import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

function ThemeToggleButton(props) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => setTheme(window.__theme);
  }, []);

  function onToggle() {
    window.__setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button className={styles.button} onClick={onToggle}>
      Dark Mode <span className={classnames(styles.toggle, theme)}></span>
    </button>
  );
}

export default ThemeToggleButton;
