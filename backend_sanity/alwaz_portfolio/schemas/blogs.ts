// blog.js
export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Block Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Blog Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'blogURL',
      title: 'Blog URL',
      type: 'url',
    },
  ],
}
