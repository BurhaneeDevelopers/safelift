export default {
  name: 'mainCategory',
  type: 'document',
  title: 'Main Categories',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Main Category Name',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 100),
      },
    },
  ],
}
