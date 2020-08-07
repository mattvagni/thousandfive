import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';

import MarkdownWrapper from '../MarkdownWrapper';
import Layout from '../Layout';
import styles from './styles.module.css';

const Post = ({ data, location }) => {
  const post = data.markdownRemark;
  return (
    <Layout location={location}>
      <div className={styles.wrapper}>
        <Helmet>
          <title>{`1005 • ${post.frontmatter.title}`}</title>
        </Helmet>
        <Link to="/" className={styles.backButton} aria-hidden tabIndex="-1">
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
    </Layout>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`;

export default Post;
