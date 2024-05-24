import React from 'react';
import styles from '@/styles/triplecontent.module.css';
import Project from './Project';
import projectData from '@/public/ProjectData';

const TripleContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {projectData.map((data, index) => 
        <div className={styles.grid_item}>
          <Project
            key={index}
            title={data.title}
            description={data.description}
            link={data.link}
          />
        </div>
        )}
    </div>
  </div>
  );
};

export default TripleContent;


