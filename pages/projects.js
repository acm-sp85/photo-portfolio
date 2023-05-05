import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div
        style={{
          background: 'grey',

          backgroundImage: `url(
               'https://res.cloudinary.com/acm-85/image/upload/v1671572656/photo-portfolio/commercial/pace/_H2A7126_t5qgqa.jpg' )`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className={` ${styles.verticalAlign} ${styles.list__block} ${styles.centered} `}
        >
          <ul className={styles.list}>
            <Link className={styles.list__name} href={'/commissioned'}>
              COMMISSIONED
            </Link>
          </ul>
        </div>
      </div>
      <div
        style={{
          background: 'grey',
          backgroundImage: `url(
             'https://res.cloudinary.com/acm-85/image/upload/v1675254191/photo-portfolio/personal/street-studies/Street-Studies-116_upuywo.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className={` ${styles.verticalAlign} ${styles.list__block} ${styles.centered} `}
        >
          <ul className={styles.list}>
            <Link className={styles.list__name} href={'/personal'}>
              PERSONAL
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
