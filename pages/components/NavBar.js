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
        onMouseEnter={() =>
          // (document.body.style = 'background: rgb(184, 87, 87)')

          // console.log(document.getElementsByClassName('container'))
          setTogglePhoto(!togglePhoto)
        }
        onMouseLeave={() => setTogglePhoto(false)}
      >
        <Link href={'/'}>PHOTOGRAPHY</Link>
        {togglePhoto ? (
          <div className={styles.nav__photography__items}>
            <Link href={'/gallery/portraits'}>PORTRAITS</Link>
            <Link href={'/gallery/street'}>STREET</Link>
            <Link href={'/gallery/style'}>STYLE</Link>
            <Link href={'/gallery/chicago'}>CHICAGO</Link>
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
            <Link href={'/films/assigments'}>ASSIGNMENTS</Link>
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
