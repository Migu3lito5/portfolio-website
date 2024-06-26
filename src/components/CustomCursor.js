"use client"

import React, { useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from '@/styles/customcursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useSpring(() => ({ x: 0, y: 0 }));

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;

      setCursorPosition({ x: mouseX, y: mouseY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setCursorPosition]);

  return (
    <animated.div ref={cursorRef} className={styles.cursor} style={cursorPosition}>
      <div className={styles.centerDot}></div>
      <div className={styles.circleOutline}></div>
    </animated.div>
  );
};

export default CustomCursor;










