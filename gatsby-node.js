const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const urlPath = createFilePath({ node, getNode, basePath: `content` });

    createNodeField({
      node,
      name: 'path',
      value: urlPath,
    });
    createNodeField({
      node,
      name: 'isPage',
      value: urlPath.startsWith('/pages/'),
    });
    createNodeField({
      node,
      name: 'isPost',
      value: urlPath.startsWith('/posts/'),
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                path
              }
            }
          }
        }
      }
    `)
      .then((result) => {
        result.data.allMarkdownRemark.edges.map(({ node }) => {
          createPage({
            path: node.fields.path,
            component: path.resolve('./src/components/Post/index.js'),
            context: {
              path: node.fields.path,
            },
          });
        });
        resolve();
      })
      .catch(reject);
  });
};