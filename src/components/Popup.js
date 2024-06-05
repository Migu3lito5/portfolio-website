
import React from "react";
import styles from '@/styles/popup.module.css';

export default function Popup({text, parentRef}) {

  const popupPosition = {
    top: parentRef.current.offsetTop + 45,
    left: parentRef.current.offsetLeft,
  }

  return(
    <div className={styles.container} style={popupPosition}>
      <div className={styles.popup} >
        {text}
      </div>
    </div>
  )
}