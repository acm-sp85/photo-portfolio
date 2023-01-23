import Link from 'next/link';
import React from 'react';
import styles from './../../styles/Home.module.scss';
import { useState } from 'react';

export default function NavBar() {
  const [togglePhoto, setTogglePhoto] = useState(false);
  const [toggleFilms, setToggleFilms] = useState(false);
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href={'/'}>ALEX CONTELL</Link>
      </div>
      <div
        className={styles.nav__photography}
        onMouseEnter={() => setTogglePhoto(!togglePhoto)}
        onMouseLeave={() => setTogglePhoto(false)}
      >
        <Link href={'/'}>PHOTOGRAPHY</Link>
        {togglePhoto ? (
          <div className={styles.nav__photography__items}>
            {/* <Link href={'/overview'}>OVERVIEW</Link> */}
            <Link href={'/personal'}>PERSONAL</Link>
            <Link href={'/assignments'}>ASSIGNMENTS</Link>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div
        className={styles.nav__film}
        onMouseEnter={() => setToggleFilms(!toggleFilms)}
        onMouseLeave={() => setToggleFilms(false)}
      >
        <Link href={'/film'}>FILM</Link>
        {toggleFilms ? (
          <div className={styles.nav__photography__items}>
            <Link href={'/films/grain'}>GRAIN</Link>
            <Link href={'/films/asiad'}>ASIAD</Link>
            <Link href={'/films/tainted'}>TAINTED</Link>
            <Link href={'/films/assignments'}>ASSIGNMENTS</Link>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.nav__about}>
        <Link href={'/about'}>ABOUT</Link>
      </div>
    </div>
  );
}
