import React from 'react';
import styles from '@/styles/simplecontent.module.css';
import LinkedImage from '@/public/images/linkedin.png';
import GithubImage from '@/public/images/github.png';
import InstagramImage from '@/public/images/instagram.png';
import ClickableImageLinks from './ClickableImageLinks';

const SimpleContent = ({title, description}) => {
  return (
    <div className={styles.container}>
      <div className={styles.main_square}>
        <div className={styles.header}>
          <p className={styles.title}>Hello!</p>
        </div>
        <div className={styles.body}>
          <p className={styles.description}>I'm an aspiring software engineer eager to grow in my career. With a curious mind and a passion for learning, I'm always seeking new challenges. Check out some of my projects below, and feel free to reach out.</p>
          <button className={styles.projectButton}>Get in Touch</button>
          <div className={styles.shadow_right}></div>
        </div>
        <div className={styles.footer}>
          <p>I'd love to connect! - </p>
          <ClickableImageLinks
          image={LinkedImage}
          link={"https://www.linkedin.com/in/miguel-angel-francisco/"}
          title={"LINKEDIN"}
          width={35}
          height={35}
        />
        <ClickableImageLinks
          image={GithubImage}
          link={"https://github.com/Migu3lito5"}
          title={"GITHUB"}
          width={35}
          height={35}
        />
        <ClickableImageLinks
          image={InstagramImage}
          link={"https://www.instagram.com/migu3lito_0/"}
          title={"INSTAGRAM"}
          width={35}
          height={35}
        />
        </div>
      </div>
      <div className={styles.shadow_square}></div>
      
    </div>
  )
};

export default SimpleContent;
