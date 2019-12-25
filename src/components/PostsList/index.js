import React from 'react';
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

export default PostsLists;
