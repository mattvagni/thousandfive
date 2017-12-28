import React from 'react';
import PropTypes from 'prop-types';
import 'reset-css/reset.css';

import styles from './styles.module.scss';

const LayoutIndex = (props) => (
  <div className={styles.wrapper}>
    <h1>{props.data.site.siteMetadata.title}</h1>
    <div>{props.children()}</div>
  </div>
);

LayoutIndex.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default LayoutIndex;
