"use client"
import React, { useState, useRef } from 'react';
import styles from '@/styles/form.module.css';
import UsePopup from '@/components/UsePopup';
import Popup from '@/components/Popup';

const Form = () => {
  const [ info, setInfo ] = useState({name: "", email: "", message: ""})
  const [isPopupVisible, showPopup] = UsePopup(2000);
  const buttonRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.input_container}>
        <label className={styles.descriptor}>name: </label>
        <input></input>
      </div>
      <div className={styles.input_container}>
        <label className={styles.descriptor}>email: </label>
        <input></input>
      </div>
      <div className={styles.input_container}>
        <label className={styles.descriptor}>message: </label>
        <textarea rows={10}></textarea>
      </div>
      <button ref={buttonRef} className={styles.projectButton} onClick={() => {
          showPopup();
          }}>
        Send
      </button>
      {isPopupVisible && <Popup parentRef={buttonRef} text={"Message has been sent!"}/>}
    </div>
  );
};

export default Form;