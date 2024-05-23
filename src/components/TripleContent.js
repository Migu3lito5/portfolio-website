import React from 'react';
import styles from '@/styles/triplecontent.module.css';
import Project from './Project';
import projectData from '@/public/ProjectData';

const TripleContent = () => {
  return (
    <div className={styles.container}>
        <Project
            key={0}
            title={projectData[0].title}
            description={projectData[0].description}
            link={projectData[0].link}
        />
    </div>
  );
};

export default TripleContent;
