import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import classnames from 'classnames';

import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.css';

const themeKey = 'theme';
const isBrowser = () => typeof window !== 'undefined';

function getStorageTheme() {
  if (isBrowser()) {
    return localStorage.getItem(themeKey);
  }
  return 'light';
}

function setStorageTheme(theme) {
  if (isBrowser()) {
    return localStorage.setItem(themeKey, theme);
  }
}

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  // On page load, set the theme
  useEffect(() => {
    setTheme(getStorageTheme());
  }, []);

  // When the client side theme changes, update local storage
  useEffect(() => {
    setStorageTheme(theme);
  }, [theme, isBrowser]);

  return [theme, setTheme];
};

const Layout = (props) => {
  const [theme, setTheme] = useTheme();

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
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
