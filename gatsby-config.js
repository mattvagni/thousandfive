module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              ignoreFileExtensions: [],
            },
          },
        ],
      },
    },
    'gatsby-plugin-sass',
  ],
};
