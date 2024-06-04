"use client"
import React from 'react';
import { Link, Element } from 'react-scroll';
import SimpleContent from '@/components/SimpleContent';
import TripleContent from '@/components/TripleContent';
import styles from '@/styles/pagecontent.module.css';
import CustomCursor from './CustomCursor';

const PageContent = () => {
  return (
    <div className={styles.pageContent}>
      <Element name="intro">
        <SimpleContent />
      </Element>
      <Element name="projects">
        <TripleContent />
      </Element>
      <Element name="contact">
        <TripleContent />
      </Element>
    </div>
  );
};

export default PageContent;