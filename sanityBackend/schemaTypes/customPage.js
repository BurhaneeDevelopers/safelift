import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'customPage',
  title: 'Custom Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    }),
  ],
})
