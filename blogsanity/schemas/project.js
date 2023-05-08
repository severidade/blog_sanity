import {defineField, defineType} from 'sanity'

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string"
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
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