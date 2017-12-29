import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import MarkdownWrapper from '../components/MarkdownWrapper';
import styles from './styles.module.scss';

const PagesIndex = ({ data }) => (
  <div>
    <h1 className={styles.title}>
      {'Hey there,'}
      <br />
      {"I'm Matt."}
    </h1>
    <div className={styles.bio}>
      <MarkdownWrapper html={data.intro.edges[0].node.html} />
    </div>
    <ul>
      {data.posts.edges.map(({ node }) => (
        <li key={node.id}>
          <Link
            to={node.fields.path}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

PagesIndex.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          fields: PropTypes.shape({
            path: PropTypes.string,
          }),
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
          }),
        }),
      ),
    }),
    intro: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          html: PropTypes.string,
        }),
      ),
    }).isRequired,
  }).isRequired,
};

export const query = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(filter: { fields: { isPost: { eq: true } } }) {
      totalCount
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
    intro: allMarkdownRemark(
      filter: { fields: { path: { eq: "/pages/bio/" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`;

export default PagesIndex;
