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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'video',
      type: 'document',
      title: 'Vídeo',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Título'
        },
        {
          name: 'youtubeId',
          type: 'string',
          title: 'ID do YouTube'
        }
      ],
    }),

    defineField({
      name: "date",
      type: "datetime",
    }),
    defineField({
      name: "place",
      type: "string",
    }),
    defineField({ 
      name: "description",
      type: "text",
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { value: "psersonal", title: "Personal"},
          { value: "client", title: "Client"},
          { value: "school", title: "School"},
        ]
      }
    }),
    defineField({
      name: "link",
      type: "url",
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        }
      ],
      options: {
        layout: "tags",
      },
    }),
  ],
});