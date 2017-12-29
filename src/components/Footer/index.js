import React from 'react';

import styles from './styles.module.scss';

const links = [
  {
    label: 'View Source',
    href: 'https://www.github.com/mattvagni/thousandfive',
  },
  {
    label: 'Linkedin',
    href: 'www.linkedin.com/in/mathias-vagni-24a68228',
  },
  {
    label: 'Twitter',
    href: 'https://www.twitter.com/mattvagni',
  },
];

const Footer = () => (
  <div className={styles.wrapper}>
    {links.map((link) => (
      <span className={styles.linkWrapper}>
        <a className={styles.link} href={link.href}>
          {link.label}
        </a>
      </span>
    ))}
  </div>
);

export default Footer;
