export default {
  name: 'subCategory',
  type: 'document',
  title: 'Sub Categories',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Sub Category Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 100),
      },
    },
    {
      name: 'parentCategory',
      type: 'reference',
      title: 'Main Category',
      to: [{ type: 'mainCategory' }],
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
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
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          validation: (Rule) => Rule.max(160),
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
  ],
}
