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
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: 'application/pdf', // Limita a seleção de arquivos apenas a PDF
      },
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
