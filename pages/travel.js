import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function Travel() {
  const blackBackground =
    'https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png';
  let [backgroundImage, setBackgroundImage] = useState(blackBackground);
  return (
    <>
      <div
        className={styles.with__transition}
        style={{
          backgroundColor: 'blue',
          width: '100%',
          height: '100%',
          background: 'white',
          position: 'fixed',
          backgroundImage: `url(
            ${backgroundImage} )`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: '-100',
        }}
      ></div>
      <div className={styles.centered}>
        <ul className={styles.list}>
          <Link
            href={'gallery/rome'}
            // onMouseEnter={() =>
            //   setBackgroundImage(
            //     'https://res.cloudinary.com/acm-85/image/upload/v1674222758/photo-portfolio/commercial/hero-images/_MG_1588-as-Smart-Object-1_axr644_fuhfmz.jpg'
            //   )
            // }
            // onMouseLeave={() => setBackgroundImage(blackBackground)}
          >
            Italy
          </Link>
          <Link href={'gallery/oaxaca'}>Oaxaca</Link>
          <Link href={'gallery/la'}>LA</Link>
          <Link href={'gallery/new-orleans'}>New Orleans</Link>
          <Link href={'gallery/spain'}>Spain</Link>
          <Link href={'gallery/morocco'}>Morocco</Link>
          <Link href={'gallery/jordan'}>Jordan</Link>
          <Link href={'gallery/hawaii'}>Hawaii</Link>
          <Link href={'gallery/berlin'}>Berlin</Link>
          <Link href={'gallery/miami'}>Miami</Link>
          <Link href={'gallery/chicago'}>Chicago</Link>
        </ul>
      </div>
    </>
  );
}
