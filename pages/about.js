import React from 'react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';

export default function about() {
  return (
    <div className={styles.centered}>
      <Image
        width="300px"
        height="300px"
        src="https://res.cloudinary.com/acm-85/image/upload/v1671568786/about/bio-pic_jkixgd.jpg"
        alt="portrait"
      />
      <h2 style={{ marginLeft: '40px' }}>
        Alex Contell is a Spanish Photographer and Filmmaker based in Brooklyn,
        NY.
      </h2>
    </div>
  );
}
