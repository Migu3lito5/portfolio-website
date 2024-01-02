import React from 'react';
import styles from '@/styles/sidebar.module.css';

const SideBar = () => {

  const Items = ['Info', 'Projects', 'Connect'];

  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <ul>
          {Items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
