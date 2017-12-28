/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

const LayoutPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div style={{ outline: '1px solid green' }}>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

LayoutPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      post: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
          html: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default LayoutPost;
