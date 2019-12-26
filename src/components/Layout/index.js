import React, { useState } from 'react';
import Helmet from 'react-helmet';
import classnames from 'classnames';

import Header from '../Header';
import Footer from '../Footer';
import styles from './styles.module.css';

let defaultTheme = 'light';
const storageKey = 'theme';
const isBrowser = () => typeof window !== 'undefined';

try {
  if (isBrowser()) {
    defaultTheme = localStorage.getItem(storageKey);
  }
} catch (err) {
  console.error(err);
}

const Layout = (props) => {
  const [theme, setTheme] = useState(defaultTheme);

  function toggleTheme() {
    const newValue = theme === 'light' ? 'dark' : 'light';
    setTheme(newValue);
    if (isBrowser()) {
      localStorage.setItem(storageKey, newValue);
    }
    defaultTheme = newValue;
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
