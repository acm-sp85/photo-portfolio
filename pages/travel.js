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
            href={'gallery/italy'}
            // onMouseEnter={() =>
            //   setBackgroundImage(
            //     'https://res.cloudinary.com/acm-85/image/upload/v1674222758/photo-portfolio/commercial/hero-images/_MG_1588-as-Smart-Object-1_axr644_fuhfmz.jpg'
            //   )
            // }
            // onMouseLeave={() => setBackgroundImage(blackBackground)}
          >
            Italy
          </Link>
          <Link href={'gallery/oaxaca'} className={styles.list__name}>
            Oaxaca
          </Link>
          <Link href={'gallery/la'} className={styles.list__name}>
            LA
          </Link>
          <Link href={'gallery/new-orleans'} className={styles.list__name}>
            New Orleans
          </Link>
          <Link href={'gallery/spain'} className={styles.list__name}>
            Spain
          </Link>
          <Link href={'gallery/morocco'} className={styles.list__name}>
            Morocco
          </Link>
          <Link href={'gallery/jordan'} className={styles.list__name}>
            Jordan
          </Link>
          <Link href={'gallery/hawaii'} className={styles.list__name}>
            Hawaii
          </Link>
          <Link href={'gallery/berlin'} className={styles.list__name}>
            Berlin
          </Link>
          <Link href={'gallery/miami'} className={styles.list__name}>
            Miami
          </Link>
          <Link href={'gallery/chicago'} className={styles.list__name}>
            Chicago
          </Link>
        </ul>
      </div>
    </>
  );
}
