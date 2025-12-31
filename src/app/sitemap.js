import client from '@/utils/sanity';

const baseUrl = 'https://safelift.in';

// Helper function to validate URLs for XML safety
function isValidXmlUrl(url) {
  if (!url || typeof url !== 'string') return false;
  
  // Check for XML-problematic characters
  if (url.includes('&') && !url.includes('&amp;')) return false;
  if (url.includes('<') || url.includes('>')) return false;
  if (url.includes('"') && !url.includes('&quot;')) return false;
  if (url.includes("'") && !url.includes('&apos;')) return false;
  
  // Check for control characters and non-ASCII characters
  if (/[\x00-\x1F\x7F]/.test(url) || /[^\x20-\x7E]/.test(url)) return false;
  
  // Check URL length and format
  if (url.length > 2000) return false;
  
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Helper function to clean and validate URLs
function cleanUrl(url) {
  if (!url || typeof url !== 'string') return '';
  
  const cleanedUrl = url.replace(/[\x00-\x1F\x7F]/g, '').trim();
  
  if (!isValidXmlUrl(cleanedUrl)) {
    console.warn('⚠️ Filtering out invalid URL:', cleanedUrl);
    return '';
  }
  
  return cleanedUrl;
}

// Static pages
const staticPages = [
  {
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/products`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/infra`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/blogs`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/careers`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  },
];

// Fetch blog posts from Sanity
async function getBlogPages() {
  const query = `*[_type == "blogs" && defined(slug.current)] | order(publishedAt desc) {
    "slug": slug.current,
    publishedAt,
    _updatedAt,
    title
  }`;

  try {
    const blogs = await client.fetch(query);
    
    const validBlogs = blogs
      .filter(blog => {
        if (!blog.slug?.trim()) return false;
        
        const slug = blog.slug;
        if (/[^\x20-\x7E]/.test(slug) || 
            slug.includes('&') || slug.includes('<') || 
            slug.includes('>') || slug.includes('"') || slug.includes("'")) {
          console.warn('⚠️ Filtering blog with problematic slug:', blog.title);
          return false;
        }
        
        return true;
      })
      .map((blog) => {
        const url = cleanUrl(`${baseUrl}/blogs/${blog.slug}`);
        return url ? {
          url,
          lastModified: new Date(blog._updatedAt || blog.publishedAt),
          changeFrequency: 'monthly',
          priority: 0.7,
        } : null;
      })
      .filter(Boolean);
    
    return validBlogs;
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
    return [];
  }
}

// Fetch product categories from Sanity
async function getProductCategoryPages() {
  const query = `*[_type == "mainCategory" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`;

  try {
    const categories = await client.fetch(query);
    
    return categories
      .filter(category => category.slug?.trim())
      .map((category) => {
        const url = cleanUrl(`${baseUrl}/products/${category.slug}`);
        return url ? {
          url,
          lastModified: new Date(category._updatedAt),
          changeFrequency: 'daily',
          priority: 0.8,
        } : null;
      })
      .filter(Boolean);
  } catch (error) {
    console.error('Error fetching product categories for sitemap:', error);
    return [];
  }
}

// Fetch individual products from Sanity
async function getProductPages() {
  const query = `*[_type == "product" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt,
    "categorySlug": coalesce(
      mainCategory->slug.current,
      subCategory->slug.current
    )
  }`;

  try {
    const products = await client.fetch(query);
    
    return products
      .filter(product => product.categorySlug?.trim() && product.slug?.trim())
      .map((product) => {
        const url = cleanUrl(`${baseUrl}/products/${product.categorySlug}/${product.slug}`);
        return url ? {
          url,
          lastModified: new Date(product._updatedAt),
          changeFrequency: 'monthly',
          priority: 0.6,
        } : null;
      })
      .filter(Boolean);
  } catch (error) {
    console.error('Error fetching products for sitemap:', error);
    return [];
  }
}

// Fetch job openings from Sanity
async function getJobPages() {
  const query = `*[_type == "jobOpening" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }`;

  try {
    const jobs = await client.fetch(query);
    
    return jobs
      .filter(job => job.slug?.trim())
      .map((job) => {
        const url = cleanUrl(`${baseUrl}/careers/${job.slug}`);
        return url ? {
          url,
          lastModified: new Date(job._updatedAt),
          changeFrequency: 'weekly',
          priority: 0.6,
        } : null;
      })
      .filter(Boolean);
  } catch (error) {
    console.error('Error fetching jobs for sitemap:', error);
    return [];
  }
}

// Main sitemap function
export default async function sitemap() {
  try {
    const [blogPages, productCategoryPages, productPages, jobPages] = await Promise.all([
      getBlogPages(),
      getProductCategoryPages(),
      getProductPages(),
      getJobPages(),
    ]);

    const allPages = [
      ...staticPages,
      ...blogPages,
      ...productCategoryPages,
      ...productPages,
      ...jobPages,
    ];

    return allPages;
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return staticPages;
  }
}