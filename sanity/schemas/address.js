import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'address',
  title: 'Address',
  type: 'document',
  fields: [
    defineField({
      name: 'City',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'street',
      title: 'Street',
      type: 'text',
    }),

    defineField({
      name: 'postCode',
      title: 'Post Code',
      type: 'text',
    }),
    defineField({
      name: 'img',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
