import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import classnames from 'classnames';

import { isBrowser } from '../../utils/isBrowser';
import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.css';

const themeKey = 'theme';

function getStorageTheme() {
  let theme = 'light';
  if (isBrowser()) {
    theme = localStorage.getItem(themeKey) || theme;
  }
  return theme;
}

function setStorageTheme(theme) {
  if (isBrowser()) {
    return localStorage.setItem(themeKey, theme);
  }
}

const useTheme = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  // On page load, set the theme
  useEffect(() => {
    setTheme(getStorageTheme());
  }, []);

  // When the client side theme changes, update local storage
  useEffect(() => {
    setStorageTheme(theme);
  }, [theme]);

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
