import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'style',
  title: 'Style',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'teachers',
      title: 'Teachers',
      type: 'array',
      of: [{type: 'reference', to: {type: 'teacher'}}],
    }),
  ],
})
