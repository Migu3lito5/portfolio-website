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
            
👋 Greetings! I'm Miguel Angel Francisco, a recent Computer Science graduate from CSUMB. Being a first-generation student, obtaining my degree signifies more than personal achievement—it reflects perseverance and dedication.
<br/> <br/>
💻 Armed with a solid foundation in Computer Science, my keen interest in technology motivates me to translate academic knowledge into practical applications. The ever-evolving tech landscape intrigues me, and I'm eager to contribute to innovative projects and gain hands-on experiences.
<br/><br/>
🚀 Beyond coding, each project presents an opportunity to explore uncharted territories and contribute meaningfully to the tech sector. Whether solving intricate problems or embracing emerging technologies, I find fulfillment in pushing boundaries.
<br/><br/>
💡 Actively seeking opportunities to apply my skills, contribute to impactful projects, and connect with like-minded professionals. Let's collaborate and uncover the boundless possibilities within the world of technology!
<br/><br/>
🔍Excited for the next phase in my career—let's discuss potential collaborations and make sure it's a perfect fit for both of us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleContent;
