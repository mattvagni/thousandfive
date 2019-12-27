import React from 'react';
import Helmet from 'react-helmet';

import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.css';

const Layout = (props) => {
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <title>1005</title>
      </Helmet>
      <div className={styles.content}>
        <Header />
        <div>{props.children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
