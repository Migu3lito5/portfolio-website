import React from 'react';
import styles from '@/styles/contactsection.module.css';
import ContactForm from './ContactForm';
import LinkedImage from '@/public/images/linkedin.png';
import GithubImage from '@/public/images/github.png';
import ResumeImage from '@/public/images/resume.png';
import InstagramImage from '@/public/images/instagram.png';
import ClickableImageLinks from './ClickableImageLinks';

const ContactSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        CONTACT INFO
      </div>
      <div className={styles.links}>
        <ClickableImageLinks
          image={LinkedImage}
          link={"https://www.linkedin.com/in/miguel-angel-francisco/"}
          title={"LINKEDIN"}
          width={40}
          height={40}
        />
        <ClickableImageLinks
          image={GithubImage}
          link={"https://github.com/Migu3lito5"}
          title={"GITHUB"}
          width={45}
          height={50}
        />
        <ClickableImageLinks
          image={InstagramImage}
          link={"https://www.instagram.com/migu3lito_0/"}
          title={"INSTAGRAM"}
          width={50}
          height={50}
        />
      </div>
      <ContactForm/>
    </div>
  );
};

export default ContactSection;