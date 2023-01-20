import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function Personal() {
  let [backgroundImage, setBackgroundImage] = useState(null);
  return (
    <>
      <div
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
            onMouseLeave={() => setBackgroundImage(null)}
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
            onMouseLeave={() => setBackgroundImage(null)}
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
            onMouseLeave={() => setBackgroundImage(null)}
          >
            Old Old New York
          </Link>
          <Link
            href={'/assignments/pace'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674222649/photo-portfolio/commercial/hero-images/0437_pjgp4d.jpg'
              )
            }
            onMouseLeave={() => setBackgroundImage(null)}
          >
            Travel Log
          </Link>
          <Link
            href={'/ram'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674246639/photo-portfolio/commercial/hero-images/show-002_u5vlgg.jpg'
              )
            }
            onMouseLeave={() => setBackgroundImage(null)}
          >
            Don't Think Twice
          </Link>
        </ul>
      </div>
    </>
  );
}
