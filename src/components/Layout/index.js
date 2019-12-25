import React from 'react';
import Helmet from 'react-helmet';
import 'reset-css/reset.css';

import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.scss';

const Layout = (props) => (
  <div className={styles.wrapper}>
    <Helmet>
      <title>1005</title>
    </Helmet>
    <Header />
    <div>{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
