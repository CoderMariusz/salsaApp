import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'headline',
        maxLength: 96
      }
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),

    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
});
