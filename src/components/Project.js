
import React from 'react';
import styles from '@/styles/project.module.css';

const Project = ({title, description, link}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          <p>{title}</p>
        </div>
        <div className={styles.desc}>
          <p>{description}</p>
        </div>
        <a target='_blank' href={link}>
        <button className={styles.projectButton}>More Info</button>
        </a>
      </div>
      <div className={styles.card_shadow}></div>
    </div>
  );
};

export default Project;