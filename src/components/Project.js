// components/Header.js

import React from 'react';
import styles from '@/styles/project.module.css';

const Project = ({title, description, link}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <a href={link} target='_blank'>
      <button className={styles.projectButton}>LEARN MORE</button>
      </a>
    </div>
  );
};

export default Project;