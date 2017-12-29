import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import MarkdownWrapper from '../MarkdownWrapper';
import styles from './styles.module.scss';

const LayoutPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.backButton}>
        {'←'}
      </Link>
      <h1 className={styles.postTitle}>{post.frontmatter.title}</h1>
      <p className={styles.postDate}>
        <time>{post.frontmatter.date}</time>
      </p>
      <div className={styles.postContent}>
        <MarkdownWrapper html={post.html} />
      </div>
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
        date(formatString: "DD MMMM, YY")
      }
    }
  }
`;

export default LayoutPost;
