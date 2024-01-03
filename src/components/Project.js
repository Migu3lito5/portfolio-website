// components/Header.js

import React from 'react';
import styles from '@/styles/project.module.css';

const Project = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Recipe Finder</div>
      <div className={styles.description}>In this web application, you as a user are able
      to search from different cuisines around the world. Once you find a recipe that catches your eyes, you have a couple options.</div>
    </div>
  );
};

export default Project;