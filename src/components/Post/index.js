import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import MarkdownWrapper from '../MarkdownWrapper';
import styles from './styles.module.scss';

const Post = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>{`1005 • ${post.frontmatter.title}`}</title>
      </Helmet>
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

Post.propTypes = {
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
  query BlogPostQuery($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YY")
      }
    }
  }
`;

export default Post;
