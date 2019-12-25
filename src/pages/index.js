import React from 'react';
import { graphql } from 'gatsby';
import MarkdownWrapper from '../components/MarkdownWrapper';
import Fluorish from '../components/Fluorish';
import PostsList from '../components/PostsList';
import Layout from '../components/Layout';
import styles from './styles.module.css';

const PagesIndex = ({ data, location }) => (
  <Layout location={location}>
    <Fluorish />
    <div className={styles.content}>
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
  </Layout>
);

export const query = graphql`
  query {
    bio: allMarkdownRemark(filter: { fields: { path: { eq: "/pages/bio/" } } }) {
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
