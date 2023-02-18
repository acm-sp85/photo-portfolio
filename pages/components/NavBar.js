import Link from 'next/link';
import React from 'react';
import styles from './../../styles/Home.module.scss';
import { useState, useEffect } from 'react';
import useWindowSize from '/useWindowSize';

export default function NavBar() {
  const [togglePhoto, setTogglePhoto] = useState(false);
  const [toggleFilms, setToggleFilms] = useState(false);
  const size = useWindowSize();
  return (
    <div>
      {size.width < 750 && (
        <div className={styles.phone_nav}>
          <div
            className={styles.nav__photography}
            onMouseEnter={() => setTogglePhoto(!togglePhoto)}
            onMouseLeave={() => setTogglePhoto(false)}
          >
            <Link href={''}>PHOTOGRAPHY</Link>
            {togglePhoto ? (
              <div className={styles.phone_nav__photography__items}>
                {/* <Link href={'/overview'}>OVERVIEW</Link> */}
                <Link href={'/personal'} onClick={() => setTogglePhoto(false)}>
                  PERSONAL
                </Link>
                <Link
                  href={'/commissioned'}
                  onClick={() => setTogglePhoto(false)}
                >
                  COMMISSIONED
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={styles.phone_nav__film}
            // onMouseEnter={() => setToggleFilms(!toggleFilms)}
            // onMouseLeave={() => setToggleFilms(false)}
          >
            <Link href={'/film'}>FILM</Link>
            {toggleFilms ? (
              <div className={styles.phone_nav__film__items}>
                <Link
                  href={'/films/grain'}
                  onClick={() => setToggleFilms(false)}
                >
                  GRAIN
                </Link>
                <Link
                  href={'/films/asiad'}
                  onClick={() => setToggleFilms(false)}
                >
                  ASIAD
                </Link>
                <Link
                  href={'/films/tainted'}
                  onClick={() => setToggleFilms(false)}
                >
                  TAINTED
                </Link>
                {/* <Link href={'/films/commissioned'}>commissioned</Link> */}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.phone_nav__about}>
            <Link href={'/about'}>ABOUT</Link>
          </div>
        </div>
      )}
      {size.width > 750 && (
        <div className={styles.nav}>
          <div className={styles.nav__logo}>
            <Link href={'/'}>ALEX CONTELL</Link>
          </div>
          <div
            className={styles.nav__photography}
            onMouseEnter={() => setTogglePhoto(!togglePhoto)}
            onMouseLeave={() => setTogglePhoto(false)}
          >
            <Link href={''}>PHOTOGRAPHY</Link>
            {togglePhoto ? (
              <div className={styles.nav__photography__items}>
                {/* <Link href={'/overview'}>OVERVIEW</Link> */}
                <Link href={'/personal'} onClick={() => setTogglePhoto(false)}>
                  PERSONAL
                </Link>
                <Link
                  href={'/commissioned'}
                  onClick={() => setTogglePhoto(false)}
                >
                  COMMISSIONED
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className={styles.nav__film}
            // onMouseEnter={() => setToggleFilms(!toggleFilms)}
            // onMouseLeave={() => setToggleFilms(false)}
          >
            <Link href={'/film'}>FILM</Link>
            {toggleFilms ? (
              <div className={styles.nav__photography__items}>
                <Link
                  href={'/films/grain'}
                  onClick={() => setToggleFilms(false)}
                >
                  GRAIN
                </Link>
                <Link
                  href={'/films/asiad'}
                  onClick={() => setToggleFilms(false)}
                >
                  ASIAD
                </Link>
                <Link
                  href={'/films/tainted'}
                  onClick={() => setToggleFilms(false)}
                >
                  TAINTED
                </Link>
                {/* <Link href={'/films/commissioned'}>commissioned</Link> */}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className={styles.nav__about}>
            <Link href={'/about'}>ABOUT</Link>
          </div>
        </div>
      )}
    </div>
  );
}
