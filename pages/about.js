import React from 'react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';

export default function about() {
  return (
    <div className={styles.centered}>
      <Image
        width="300px"
        height="300px"
        src="/../public/bio-pic.jpg"
        alt="portrait"
      />
      <h2 style={{ marginLeft: '40px' }}>
        Alex Contell is a Spanish Photographer and Filmmaker based in Brooklyn,
        NY.
      </h2>
    </div>
  );
}
