import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.projects__commissioned}>
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
      <div className={styles.projects__personal}>
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
