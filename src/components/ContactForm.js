"use client"
import React, { useState } from 'react';
import styles from '@/styles/contactform.module.css';


//re_CoaYcz1Z_AY5kfEMhCeZtEprTX1GnjBJ7
const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    personName: '',
    personEmail: '',
    message: '', // Updated variable name
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.title}>GET IN TOUCH</div>
        <div className={styles.input_container}>
          <input
            type="text"
            id="personName"
            name="personName"
            value={formValues.personName}
            onChange={handleInputChange}
            className={styles.underline_input}
          />
          <label htmlFor="personName">NAME</label>
          <input
            type="text"
            id="personEmail"
            name="personEmail"
            value={formValues.personEmail}
            onChange={handleInputChange}
            className={styles.underline_input}
          />
          <label htmlFor="personEmail">EMAIL</label>
        </div>
        <button className={styles.formButton}>SEND</button>
      </div>
      <div className={styles.right}>
        <textarea
          id="textArea"
          value={formValues.message}
          onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
          placeholder="MESSAGE"
          className={styles.textarea}
          rows={20} 
          cols={50} 
        />
      </div>
    </div>
  );
};

export default ContactForm;