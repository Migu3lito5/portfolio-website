import React from 'react';
import styles from '@/styles/simplecontent.module.css';

const SimpleContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        INTRO
      </div>
      <div className={styles.description_outline}>
        <div className={styles.description}>
          <p>
            Hello! 👋 I'm a recent graduate from California State University, Monterey Bay (CSUMB), holding a degree in Computer Science. As a first-generation student, achieving this milestone has been a source of pride and a testament to the strength of perseverance.
            <br/><br/>My journey through the world of computer science has been an exciting adventure, fueled by a natural curiosity and an unyielding motivation to learn. I find the ever-evolving landscape of technology intriguing, and I'm eager to channel my enthusiasm into hands-on experiences and innovative projects.
            Beyond technical skills, my academic endeavors have instilled in me a resilience and determination that I bring to every challenge. I'm genuinely excited about the prospect of continuous learning and ready to contribute my passion and knowledge to the dynamic field of technology.
            <br/><br/>Let's connect and explore the boundless opportunities that lie ahead! 🌐💡
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleContent;
