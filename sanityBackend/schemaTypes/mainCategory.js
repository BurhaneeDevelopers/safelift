export default {
  name: 'mainCategory',
  type: 'document',
  title: 'Main Categories',
  description: 'Product categories. For SEO: duplicate categories and change slug (e.g., add "-pune"), but keep masterSlug the same to share products.',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Main Category Name',
    },
    {
      title: 'Category Image',
      name: 'categoryImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug (SEO URL)',
      description: 'This slug will be used in the URL. For location-specific pages, add suffix like "-pune", "-mumbai"',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 100),
      },
    },
    {
      name: 'masterSlug',
      type: 'slug',
      title: 'Master Slug (Product Linking)',
      description: 'This is the base slug used to link products. Keep it same across all location variants (e.g., "screw-drivers" for both "screw-drivers" and "screw-drivers-pune")',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 100),
      },
      validation: (Rule) => Rule.required().error('Master Slug is required for product linking'),
    },
    // {
    //   name: 'description',
    //   title: 'Short Description',
    //   type: 'text',
    // },
    {
      name: 'content',
      title: 'Category Content (Rich Text)',
      type: 'array',
      description: 'Add detailed content about this category with rich text formatting',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true,
              },
            },
            {
              name: 'attribution',
              type: 'string',
              title: 'Attribution',
            },
          ],
        },
      ],
    },
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
