import React from 'react';
import { Link } from 'gatsby';

import styles from './styles.module.css';

const Header = () => (
  <div className={styles.wrapper}>
    <Link to="/" className={styles.logo}>
      1005
    </Link>
  </div>
);

export default Header;
