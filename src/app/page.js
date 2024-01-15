import React from 'react';
import Sidebar from '@/components/SideBar';
import styles from '../styles/page.module.css';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import PageContent from '@/components/PageContent';

export default function Home() {
  return (
    <div>
      <CustomCursor />
      <Header
        title={"Miguel A. Francisco"}
        desc="Software Engineer | Comp. Sci. Graduate"
      />
      <Sidebar />
      <PageContent/>
    </div>
  );
}
