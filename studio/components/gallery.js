export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Album Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 36,
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: {type: 'author'},
      },
      {
        name: 'images',
        type: 'array',
        title: 'Images',
        of: [
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
              },
            ],
          },
        ],
        options: {
          layout: 'grid',
        },
      },
      {
        name: 'displayNav',
        type: 'boolean',
        title: 'Added',
        description: 'Add this to Navbar?',
      },
      {
        name: 'buttonText',
        title: 'NavBar Button Text',
        type: 'string',
        description: 'Button in Navbar will display the text',
      }
    ],
    preview: {
      select: {
        title: 'title',
        images: 'images',
        image: 'images.0',
      },
      prepare(selection) {
        const { title, image } = selection;
  
        return {
          title: title,
          subtitle: `Alt text: ${image.alt}`,
          media: image,
        };
      },
    },
  };