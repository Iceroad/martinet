module.exports = {
  type: 'object',
  fields: {
    paths: {
      type: 'object',
      optional: true,
      fields: {
        src: {
          type: 'string',
          optional: true,
        },
        dist: {
          type: 'string',
          optional: true,
        },
      },
    },
    pages: {
      type: 'array',
      minElements: 1,
      elementType: {
        type: 'object',
        fields: {
          src: {
            type: 'string',
          },
          dist: {
            type: 'string',
          },
          data: {
            type: 'array',
            optional: true,
            elementType: {
              type: 'string',
            },
          },
          styles: {
            type: 'array',
            optional: true,
            elementType: {
              type: 'string',
            },
          },
          scripts: {
            type: 'array',
            optional: true,
            elementType: {
              type: 'string',
            },
          },
        },
      },
    },
  },
};