"use client"
import React, { useEffect } from 'react';
import { Link, animateScroll} from 'react-scroll';
import styles from '@/styles/sidebar.module.css';
import { HiHome } from "react-icons/hi";
import { MdOutlineWork } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const SideBar = () => {
  useEffect(() => window.scrollTo({ top: 2}), []);
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <ul>
          <li>
            <Link
              className={styles.linkContainer}
              activeClass={styles.active}
              to="intro"
              spy={true}
              smooth={true}
              offset={-200}
              duration={1000}
              
            >
              <HiHome className={styles.icon}/>
              Intro
            </Link>
          </li>
          <li>
            <Link
              className={styles.linkContainer}
              activeClass={styles.active}
              to="projects"
              spy={true}
              smooth={true}
              offset={-110}
              duration={1000}
             >
              <MdOutlineWork className={styles.icon} />
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={styles.linkContainer}
              activeClass={styles.active}
              to="contact"
              spy={true}
              smooth={true}
              offset={-110}
              duration={1000}
             >
              <IoMail className={styles.icon} />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
