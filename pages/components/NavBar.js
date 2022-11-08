import Link from 'next/link';
import React from 'react';
import styles from './../../styles/Home.module.scss';

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href={'/'}>ALEX CONTELL</Link>
      </div>
      <div
        className={styles.nav__photography}
        onMouseOver={() =>
          // (document.body.style = 'background: rgb(184, 87, 87)')

          console.log(document.getElementsByClassName('container'))
        }
      >
        <Link href={'/photography-landing'}>PHOTOGRAPHY</Link>
      </div>
      <div className={styles.nav__film}>
        <Link href={'/film'}>FILM</Link>
      </div>
      <div className={styles.nav__about}>
        <Link href={'/about'}>ABOUT</Link>
      </div>
    </div>
  );
}
