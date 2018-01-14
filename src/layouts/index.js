import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import 'reset-css/reset.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './styles.module.scss';

const LayoutIndex = (props) => (
  <div className={styles.wrapper}>
    <Helmet>
      <title>1005</title>
    </Helmet>
    <Header />
    <div>{props.children()}</div>
    <Footer />
  </div>
);

LayoutIndex.propTypes = {
  children: PropTypes.func.isRequired,
};

export default LayoutIndex;
