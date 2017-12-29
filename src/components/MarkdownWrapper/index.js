/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const MarkdownWrapper = ({ html }) => (
  <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: html }} />
);

MarkdownWrapper.propTypes = {
  html: PropTypes.string.isRequired,
};

export default MarkdownWrapper;
