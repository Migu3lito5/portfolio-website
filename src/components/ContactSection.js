// components/Header.js

import React from 'react';
import styles from '@/styles/contactsection.module.css';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        CONTACT INFO
      </div>
      <div className={styles.links}>Hi</div>
      <ContactForm/>
    </div>
  );
};

export default ContactSection;