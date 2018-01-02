import React from 'react';
import PropTypes from 'prop-types';

import MarkdownWrapper from '../components/MarkdownWrapper';
import PostsList from '../components/PostsList';
import styles from './styles.module.scss';

const PagesIndex = ({ data }) => (
  <div>
    <h1 className={styles.title}>
      {'Hey there,'}
      <br />
      {"I'm Matt."}
    </h1>
    <div className={styles.bio}>
      <MarkdownWrapper html={data.bio.edges[0].node.html} />
      <PostsList posts={data.posts} />
    </div>
  </div>
);

PagesIndex.propTypes = {
  data: PropTypes.shape({
    bio: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          html: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,
};

export const query = graphql`
  query IndexQuery {
    bio: allMarkdownRemark(
      filter: { fields: { path: { eq: "/pages/bio/" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
    posts: allMarkdownRemark(
      filter: { fields: { isPost: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            path
          }
        }
      }
    }
  }
`;

export default PagesIndex;
