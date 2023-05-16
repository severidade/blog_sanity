import {defineField, defineType} from 'sanity'

export default defineType({
  name: "videos",
  title: "Videos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: 'video',
      type: 'document',
      title: 'Vídeo do YouTube',
      fields: [
        {
          name: 'youtubeId',
          type: 'string',
          title: 'ID do Vídeo'
        }
      ],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
});