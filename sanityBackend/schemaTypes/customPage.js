import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'customPage',
  title: 'Custom Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'pageUrl',
      title: 'Page URL',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Enter the page URL path (e.g., "/" for home, "/about" for about page)',
      placeholder: '/',
    }),
    // SEO Settings Group
    defineField({
      name: 'seoTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(60).warning('Titles should be under 60 characters'),
      description: 'SEO title that appears in search results',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required().max(160).warning('Descriptions should be under 160 characters'),
      description: 'SEO description that appears in search results',
    }),
    defineField({
      name: 'keywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Add relevant keywords for SEO (press Enter after each keyword)',
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
      description: 'Publisher name for the content',
      initialValue: 'Safelift',
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical URL',
      type: 'url',
      description: 'Full canonical URL (e.g., https://safelift.in/)',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
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
      initialValue: 'index, follow',
    }),

    // Open Graph Settings
    defineField({
      name: 'openGraph',
      title: 'Open Graph (Social Media)',
      type: 'object',
      description: 'Settings for how the page appears when shared on social media',
      fields: [
        defineField({name: 'ogTitle', title: 'OG Title', type: 'string'}),
        defineField({name: 'ogDescription', title: 'OG Description', type: 'text'}),
        defineField({
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          description: 'Recommended size: 1200x630px',
        }),
        defineField({name: 'ogUrl', title: 'OG URL', type: 'url'}),
        defineField({
          name: 'ogType',
          title: 'OG Type',
          type: 'string',
          initialValue: 'website',
          options: {
            list: [
              {title: 'Website', value: 'website'},
              {title: 'Article', value: 'article'},
            ],
          },
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // Twitter Card Settings
    defineField({
      name: 'twitter',
      title: 'Twitter Card',
      type: 'object',
      description: 'Settings for how the page appears when shared on Twitter/X',
      fields: [
        defineField({name: 'twitterTitle', title: 'Twitter Title', type: 'string'}),
        defineField({name: 'twitterDescription', title: 'Twitter Description', type: 'text'}),
        defineField({
          name: 'twitterImage',
          title: 'Twitter Image',
          type: 'image',
          description: 'Recommended size: 1200x675px',
        }),
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
          initialValue: 'summary_large_image',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),

    // Icons
    defineField({
      name: 'icons',
      title: 'Page Icons',
      type: 'object',
      description: 'Custom icons for this page (optional)',
      fields: [
        defineField({name: 'favicon', title: 'Favicon', type: 'image'}),
        defineField({name: 'appleIcon', title: 'Apple Touch Icon', type: 'image'}),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'seoTitle',
      subtitle: 'pageUrl',
    },
  },
})
