import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './styles.module.scss';

const PostsLists = (props) => (
  <div className={styles.wrapper}>
    <h4 className={styles.title}>Stuff to read:</h4>
    <ul className={styles.list}>
      {props.posts.edges.map(({ node }) => (
        <li className={styles.post} key={node.id}>
          <Link to={node.fields.path} className={styles.postLink}>
            <span className={styles.postTitle}>{node.frontmatter.title}</span>

            <span className={styles.postDate}>
              <time>{node.frontmatter.date}</time>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

PostsLists.propTypes = {
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
  }).isRequired,
};

export default PostsLists;
