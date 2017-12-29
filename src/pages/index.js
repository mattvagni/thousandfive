import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from './styles.module.scss';

const PagesIndex = ({ data }) => (
  <div>
    <h1 className={styles.introTitle}>
      {'Hey there,'} <br /> {"I'm Matt."}
    </h1>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link
            to={node.fields.slug}
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
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
          }),
        }),
      ),
    }),
  }).isRequired,
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default PagesIndex;
