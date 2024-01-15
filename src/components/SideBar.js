"use client"
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from '@/styles/sidebar.module.css';

const SideBar = () => {

  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <ul>
          <li>
            <Link
              activeClass={styles.active}
              to="intro"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1000}
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              activeClass={styles.active}
              to="projects"
              spy={true}
              smooth={true}
              offset={-120}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass={styles.active}
              to="contactme"
              spy={true}
              smooth={true}
              offset={-110}
              duration={1000}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
