import React from 'react'
import Image from 'next/image';
import styles from '@/styles/clickableimage.module.css';

export default function ClickableImageLinks({image, link, title, width, height, pdf}) {
  return (
    <div>
      <a className={styles.click} href={link} target='_blank' rel='noopener noreferrer' >
      <Image
          src={image}
          width={width}
          height={height}
        />
      </a>
    </div>
  )
}