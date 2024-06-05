import React from 'react';
import styles from '@/styles/contact.module.css';
import Form from '@/components/Form';


const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          <p className={styles.title}>Let's Chat</p>
        </div>
        <div className={styles.intro}>
          <p>Fill out the form if you have any questions or inquiries. I’ll try to get back to you as soon as possible!</p>
        </div>
        <div className={styles.form}>
          <Form/>
        </div>
      </div>
      <div className={styles.side}>

      </div>
    </div>
  );
};

export default Contact;