import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'document',
  fields: [
    // defineField({
    //   name: 'productCategory',
    //   title: 'Product Category',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'Hoisting Equipment', value: 'hoisting-equipment'},
    //       {
    //         title: 'Polyester Lifting & Lashing Products',
    //         value: 'polyester-lifting-&-lashing-products',
    //       },
    //       {title: 'G-80 Riggings', value: 'g-80-riggings'},
    //       {title: 'G-100 Riggings', value: 'g-100-riggings'},
    //       {title: 'Clamps', value: 'clamps'},
    //       {title: 'Lifting Tackles', value: 'lifting-tackles'},
    //       {title: 'Slings', value: 'slings'},
    //       {title: 'Hydraulic Lifting Equipments', value: 'hydraulic-lifting-equipments'},
    //       {title: 'Special Products', value: 'special-products'},
    //     ],
    //   },
    //   description: 'Select a product category',
    //   hidden: ({document}) => !!document?.page, // Hide if page is selected
    // }),
    defineField({
      name: 'page',
      title: 'Page',
      type: 'reference',
      to: [
        {type: 'product'}, // Reference to Product pages
        {type: 'customPage'}, // Reference to any other custom pages (like home, about)
      ],
      description: 'Select the page this SEO metadata applies to',
      hidden: ({document}) => !!document?.productCategory, // Hide if productCategory is selected
    }),
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60).warning('Titles should be under 60 characters'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required().max(160).warning('Descriptions should be under 160 characters'),
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical URL',
      type: 'url',
      description: 'Preferred URL to avoid duplicate content issues',
    }),
    defineField({
      name: 'robots',
      title: 'Meta Robots',
      type: 'string',
      options: {
        list: [
          {title: 'Index & Follow', value: 'index, follow'},
          {title: 'No Index & No Follow', value: 'noindex, nofollow'},
          {title: 'No Index', value: 'noindex, follow'},
        ],
      },
    }),
    defineField({
      name: 'openGraph',
      title: 'Open Graph',
      type: 'object',
      fields: [
        defineField({name: 'ogTitle', title: 'OG Title', type: 'string'}),
        defineField({name: 'ogDescription', title: 'OG Description', type: 'text'}),
        defineField({name: 'ogImage', title: 'OG Image', type: 'image'}),
        defineField({name: 'ogUrl', title: 'OG URL', type: 'url'}),
        defineField({name: 'ogType', title: 'OG Type', type: 'string', initialValue: 'website'}),
      ],
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter Card',
      type: 'object',
      fields: [
        defineField({name: 'twitterTitle', title: 'Twitter Title', type: 'string'}),
        defineField({name: 'twitterDescription', title: 'Twitter Description', type: 'text'}),
        defineField({name: 'twitterImage', title: 'Twitter Image', type: 'image'}),
        defineField({
          name: 'twitterCard',
          title: 'Twitter Card Type',
          type: 'string',
          options: {
            list: [
              {title: 'Summary', value: 'summary'},
              {title: 'Summary Large Image', value: 'summary_large_image'},
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'icons',
      title: 'Icons',
      type: 'object',
      fields: [
        defineField({name: 'favicon', title: 'Favicon', type: 'image'}),
        defineField({name: 'appleIcon', title: 'Apple Touch Icon', type: 'image'}),
      ],
    }),
  ],
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (!fields.page && !fields.productCategory) {
        return '⚠️ You must select either a Page or a Product Category'
      }
      if (fields.page && fields.productCategory) {
        return '❌ You cannot select both a Page and a Product Category at the same time'
      }
      return true
    }),
  preview: {
    select: {
      title: 'title',
      subtitle: 'page.title',
    },
  },
})
