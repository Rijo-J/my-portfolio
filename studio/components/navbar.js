export default {
  name: "navbar",
  title: "NavBar Elements",
  type: "document",
  fields: [
      {
          name: "buttonText",
          title: 'Button Text',
          type: "string",
      },
      {
        name: 'gallery',
        title: 'Gallery / Album Link',
        type: 'reference',
        to: {type: 'gallery'},
      },
  ],
}