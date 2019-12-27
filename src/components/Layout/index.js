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

  console.log('initial theme:', theme);

  // On page load, set the theme
  useEffect(() => {
    console.log('set state theme on render:', getStorageTheme());
    setTheme(getStorageTheme());
  }, []);

  // When the client side theme changes, update local storage
  useEffect(() => {
    console.log('setting storage theme from state to storage', theme);
    setStorageTheme(theme);
  }, [theme]);

  return [theme, setTheme];
};

const Layout = (props) => {
  const [theme, setTheme] = useTheme();

  console.log('rendering layout', theme);

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
