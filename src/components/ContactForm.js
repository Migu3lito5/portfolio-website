"use client"
import React from 'react';
import styles from "@/styles/contactform.module.css"

const ContactForm = () => {

  const [textValue, setTextValue] = React.useState('');
  const [inputValues, setInputValues] = React.useState({
    personName: "",
    personEmail: "",
  });
  
   const handleTextChange = (e) => {
      setTextValue(e.target.value);
    };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
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
            name='personName'
            value={inputValues.personName}
            onChange={handleInputChange}
            className={styles.underline_input}
          />
          <label htmlFor="textInput">NAME</label>
          <input
            type="text"
            id="personEmail"
            name='personEmail'
            value={inputValues.personEmail}
            onChange={handleInputChange}
            className={styles.underline_input}
          />
          <label htmlFor="textInput">EMAIL</label>
        </div>
        <button className={styles.formButton}>SEND</button>
      </div>
      <div className={styles.right}>
        <textarea
          id="textArea"
          value={textValue}
          onChange={handleTextChange}
          placeholder='MESSAGE'
          rows={20} 
          cols={50} 
          style={{ resize: 'none',  border: "1px solid black" }} 
        />
    </div>
    </div>
  );
};

export default ContactForm;