/* eslint-disable react/no-danger */

import React from 'react';

import styles from './styles.module.css';

const MarkdownWrapper = ({ html }) => <div className={styles.wrapper} dangerouslySetInnerHTML={{ __html: html }} />;

export default MarkdownWrapper;
