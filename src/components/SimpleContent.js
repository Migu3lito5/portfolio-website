import React, {useRef} from 'react';
import styles from '@/styles/simplecontent.module.css';
import LinkedImage from '@/public/images/linkedin.png';
import GithubImage from '@/public/images/github.png';
import ResumeLogo from '@/public/images/resume-logo.png';
import ClickableImageLinks from './ClickableImageLinks';
import UsePopup from '@/components/UsePopup';
import Popup from '@/components/Popup';
import Link from 'next/link';

const SimpleContent = ({title, description}) => {

  const [isPopupVisible, showPopup] = UsePopup(2000);
  const buttonRef = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.main_square}>
        <div className={styles.header}>
          <p className={styles.title}>Hello!</p>
        </div>
        <div className={styles.body}>
          <p className={styles.description}>I'm an aspiring software engineer eager to grow in my career. With a curious mind and a passion for learning, I'm always seeking new challenges. Check out some of my projects below, and feel free to reach out.</p>
          <button ref={buttonRef} className={styles.projectButton} onClick={() => {
              showPopup();
              navigator.clipboard.writeText('mfranc4594@gmail.com');
              }}>
              Get in Touch
          </button>
          {isPopupVisible && <Popup parentRef={buttonRef} text={"email copied!"}/>}
        </div>
        <div className={styles.footer}>
          <p>I'd love to connect! - </p>
          <ClickableImageLinks
          image={LinkedImage}
          link={"https://www.linkedin.com/in/miguel-angel-francisco/"}
          title={"LINKEDIN"}
          width={35}
          height={35}
        />
        <ClickableImageLinks
          image={GithubImage}
          link={"https://github.com/Migu3lito5"}
          title={"GITHUB"}
          width={35}
          height={35}
        />
        <ClickableImageLinks
          image={ResumeLogo}
          link={"ResumeLogo"}
          title={"/My_Resue.pdf"}
          width={35}
          height={35}
        />
        </div>
      </div>
      <div className={styles.shadow_square}></div> 
      <div className={styles.shadow_right}></div>     
    </div>
  )
};

export default SimpleContent;

