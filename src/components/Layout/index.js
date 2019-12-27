import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import classnames from 'classnames';

import { isBrowser } from '../../utils/isBrowser';
import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.css';

const Layout = (props) => {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    const newValue = theme === 'light' ? 'dark' : 'light';
    setTheme(newValue);
  }

  return (
    <div className={classnames(styles.wrapper, `${theme}Mode`)}>
      <Helmet>
        <title>1005</title>
      </Helmet>
      <div className={styles.content}>
        <Header />
        <div>{props.children}</div>
        <Footer onToggleTheme={toggleTheme} theme={theme} />
      </div>
    </div>
  );
};

export default Layout;
