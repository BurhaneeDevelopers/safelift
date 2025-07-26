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
  ],
}
