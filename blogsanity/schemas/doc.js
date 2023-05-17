import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'doc',
  title: 'Documentos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
    defineField({
      name: 'file',
      title: 'PDF File',
      type: 'file',
    }),
    defineField({
      name: 'classification',
      title: 'Classificação',
      type: 'string',
      options: {
        list: ['Vídeo', 'Link', 'PDF'],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
