export default {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Product Name',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 10000, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 10000),
      },
    },
    {
      name: 'mainCategory',
      title: 'Main Category (if applicable)',
      type: 'reference',
      to: [{type: 'mainCategory'}],
      hidden: ({parent}) => !!parent?.subCategory,
    },
    {
      name: 'subCategory',
      title: 'Sub Category (if applicable)',
      type: 'reference',
      to: [{type: 'subCategory'}],
      hidden: ({parent}) => !!parent?.mainCategory,
    },
    {
      name: 'series',
      type: 'string',
      title: 'Series',
    },
    {
      name: 'seriesFeature',
      type: 'string',
      title: 'Feature Of Series',
    },
    {
      title: 'Product Image',
      name: 'productimage',
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
      title: 'Table Stats',
      name: 'table',
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
      type: 'array',
      name: 'highlightPoints',
      of: [
        {
          title: 'Highlight Point',
          type: 'string',
        },
      ],
    },
    {
      type: 'array',
      name: 'highlightFeatures',
      of: [
        {
          title: 'Highlight Features',
          type: 'object',
          fields: [
            {
              title: 'Title of the Highlight Feature',
              name: 'featureTitle',
              type: 'string',
            },
            {
              title: 'Feature Image',
              name: 'featuredImage',
              type: 'image',
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
          ],
        },
      ],
    },
  ],
}
