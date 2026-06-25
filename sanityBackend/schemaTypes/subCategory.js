export default {
  name: 'subCategory',
  type: 'document',
  title: 'Sub Categories',
  description: 'Product sub-categories. For SEO: duplicate sub-categories and change slug (e.g., add "-pune"), but keep masterSlug the same to share products.',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Sub Category Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug (SEO URL)',
      description: 'This slug will be used in the URL. For location-specific pages, add suffix like "-pune", "-mumbai"',
      options: {
        source: 'title',
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 100),
      },
    },
    {
      name: 'masterSlug',
      type: 'slug',
      title: 'Master Slug (Product Linking)',
      description: 'This is the base slug used to link products. Keep it same across all location variants (e.g., "screw-drivers" for both "screw-drivers" and "screw-drivers-pune")',
      options: {
        source: 'title',
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 100),
        isUnique: (value, context) => true,
      },
      validation: (Rule) => Rule.custom((slug) => {
        if (!slug || !slug.current) {
          return 'Master Slug is required for product linking'
        }
        return true
      }),
    },
    {
      name: 'parentCategory',
      type: 'reference',
      title: 'Main Category',
      to: [{ type: 'mainCategory' }],
    },
    {
      name: 'seo',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60).warning('Titles should be under 60 characters'),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (Rule) => Rule.max(160).warning('Descriptions should be under 160 characters'),
        },
        {
          name: 'keywords',
          title: 'Meta Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Add relevant keywords for SEO',
          options: {
            layout: 'tags',
          },
        },
        {
          name: 'publisher',
          title: 'Publisher',
          type: 'string',
          description: 'Publisher name for the content',
          initialValue: 'Safelift',
        },
        {
          name: 'canonical',
          title: 'Canonical URL',
          type: 'url',
          description: 'Preferred URL to avoid duplicate content issues',
        },
        {
          name: 'robots',
          title: 'Meta Robots',
          type: 'string',
          options: {
            list: [
              { title: 'Index & Follow', value: 'index, follow' },
              { title: 'No Index & No Follow', value: 'noindex, nofollow' },
              { title: 'No Index', value: 'noindex, follow' },
            ],
          },
        },
        {
          name: 'openGraph',
          title: 'Open Graph',
          type: 'object',
          fields: [
            { name: 'ogTitle', title: 'OG Title', type: 'string' },
            { name: 'ogDescription', title: 'OG Description', type: 'text' },
            { name: 'ogImage', title: 'OG Image', type: 'image' },
            { name: 'ogUrl', title: 'OG URL', type: 'url' },
            {
              name: 'ogType',
              title: 'OG Type',
              type: 'string',
              initialValue: 'website',
              options: {
                list: [
                  { title: 'Website', value: 'website' },
                  { title: 'Article', value: 'article' },
                ],
              },
            },
          ],
        },
        {
          name: 'twitter',
          title: 'Twitter Card',
          type: 'object',
          fields: [
            { name: 'twitterTitle', title: 'Twitter Title', type: 'string' },
            { name: 'twitterDescription', title: 'Twitter Description', type: 'text' },
            { name: 'twitterImage', title: 'Twitter Image', type: 'image' },
            {
              name: 'twitterCard',
              title: 'Twitter Card Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Summary', value: 'summary' },
                  { title: 'Summary Large Image', value: 'summary_large_image' },
                ],
              },
            },
          ],
        },
        {
          name: 'icons',
          title: 'Icons',
          type: 'object',
          fields: [
            { name: 'favicon', title: 'Favicon', type: 'image' },
            { name: 'appleIcon', title: 'Apple Touch Icon', type: 'image' },
          ],
        },
      ],
    },
  ],
}
