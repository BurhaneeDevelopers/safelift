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
      },
      validation: (Rule) => Rule.required().error('Master Slug is required for product linking'),
    },
    {
      name: 'parentCategory',
      type: 'reference',
      title: 'Main Category',
      to: [{ type: 'mainCategory' }],
    },
    // {
    //   name: 'description',
    //   title: 'Short Description',
    //   type: 'text',
    // },
    // {
    //   name: 'seo',
    //   title: 'SEO Metadata',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'metaTitle',
    //       title: 'Meta Title',
    //       type: 'string',
    //       validation: (Rule) => Rule.max(60),
    //     },
    //     {
    //       name: 'metaDescription',
    //       title: 'Meta Description',
    //       type: 'text',
    //       validation: (Rule) => Rule.max(160),
    //     },
    //     {
    //       name: 'keywords',
    //       title: 'Keywords',
    //       type: 'array',
    //       of: [{ type: 'string' }],
    //     },
    //     {
    //       name: 'ogImage',
    //       title: 'Open Graph Image',
    //       type: 'image',
    //       options: { hotspot: true },
    //     },
    //   ],
    // },
  ],
}
