import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function Personal() {
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
          // opacity: '0.5',
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
            href={'/assignments/chase-bank'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674222758/photo-portfolio/commercial/hero-images/_MG_1588-as-Smart-Object-1_axr644_fuhfmz.jpg'
              )
            }
            onMouseLeave={() => setBackgroundImage(blackBackground)}
          >
            Street Studies
          </Link>

          <Link
            href={'/ram'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674246738/photo-portfolio/commercial/hero-images/89240017_rjivd6.jpg'
              )
            }
            onMouseLeave={() => setBackgroundImage(blackBackground)}
          >
            Random Access Memory
          </Link>

          <Link
            href={'/assignments/pace'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674222721/photo-portfolio/commercial/hero-images/Alex_Contell_-_Timeless_New_York-20_hagdc2.jpg'
              )
            }
            onMouseLeave={() => setBackgroundImage(blackBackground)}
          >
            Old Old New York
          </Link>
          <Link
            className={styles.with__transition}
            href={'/assignments/pace'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674222649/photo-portfolio/commercial/hero-images/0437_pjgp4d.jpg'
              )
            }
            onMouseLeave={() => setBackgroundImage(blackBackground)}
          >
            Travel Log
          </Link>
          <Link
            href={'/ram'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674300863/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.32.48_AM_rq3oxl.png'
              )
            }
            onMouseLeave={() => setBackgroundImage(blackBackground)}
          >
            Don't Think Twice
          </Link>
        </ul>
      </div>
    </>
  );
}