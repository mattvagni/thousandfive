import React from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';

const Header = () => (
  <div className={styles.wrapper}>
    <Link to="/" className={styles.logo}>
      1005
    </Link>
  </div>
);

export default Header;
