"use client"
import React, { useState } from 'react';
import styles from '@/styles/form.module.css';


const Form = () => {
  const [ info, setInfo ] = useState({name: "", email: "", message: ""})
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
      <button className={styles.projectButton}>Send</button>
    </div>
  );
};

export default Form;