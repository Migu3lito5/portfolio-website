import React from 'react';
import styles from '@/styles/triplecontent.module.css';
import Project from './Project';
import projectData from '@/public/ProjectData';

const TripleContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        PROJECTS
      </div>
      <div className={styles.split}>
        {projectData.map((data, index) => 
          <Project
            key={index}
            title={data.title}
            description={data.description}
            link={data.link}
          />
        )}
      </div>
    </div>
  );
};

export default TripleContent;
