import Link from 'next/link';
import React from 'react';
import styles from './../../styles/Home.module.scss';
import { useState } from 'react';

export default function NavBar() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href={'/'}>ALEX CONTELL</Link>
      </div>
      <div
        className={styles.nav__photography}
        onMouseEnter={() =>
          // (document.body.style = 'background: rgb(184, 87, 87)')

          // console.log(document.getElementsByClassName('container'))
          setToggle(!toggle)
        }
        onMouseLeave={() => setToggle(false)}
      >
        <Link href={'/photography-landing'}>PHOTOGRAPHY</Link>
        {toggle ? (
          <div className={styles.nav__photography}>
            <Link href={'/photography-landing'}>chicago</Link>
            <Link href={'/photography-landing'}>off-white</Link>
          </div>
        ) : (
          <></>
        )}
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
