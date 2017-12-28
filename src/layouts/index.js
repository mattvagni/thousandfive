import React from 'react';
import PropTypes from 'prop-types';
import 'reset-css/reset.css';

import Header from '../components/Header';
import styles from './styles.module.scss';

const LayoutIndex = (props) => (
  <div className={styles.wrapper}>
    <Header />
    <div>{props.children()}</div>
  </div>
);

LayoutIndex.propTypes = {
  children: PropTypes.func.isRequired,
};

export default LayoutIndex;
