import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

function ThemeToggleButton(props) {
  return (
    <button className={styles.button} onClick={props.onToggle}>
      Dark Mode <span className={classnames(styles.toggle, props.theme)}></span>
    </button>
  );
}

export default ThemeToggleButton;
