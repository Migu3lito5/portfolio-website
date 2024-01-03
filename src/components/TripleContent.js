import React from 'react';
import styles from '@/styles/triplecontent.module.css';
import Project from './Project';

const TripleContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        PROJECTS
      </div>
      <div className={styles.split}>
        <Project/>
        <Project/>
        <Project/>
      </div>
    </div>
  );
};

export default TripleContent;
