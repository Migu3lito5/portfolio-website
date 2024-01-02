// components/Header.js

import React from 'react';
import styles from '@/styles/header.module.css';

const Header = ({ title, desc }) => {
  return (
    <div>
      <div className={styles.solidColorBar}></div>
      <div className={styles.header}>
        <div className={styles.header__title}>
          {title}
          <div className={styles.header__description}>{desc}</div>
        </div>
        </div>
    </div>
  );
};

export default Header;