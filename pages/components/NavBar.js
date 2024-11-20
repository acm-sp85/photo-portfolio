import Link from 'next/link';
import React from 'react';
import styles from './../../styles/Home.module.scss';
import { useState, useEffect } from 'react';
import useWindowSize from '/useWindowSize';
import HamburgerMenu from 'react-hamburger-menu';

export default function NavBar() {
  const [togglePhoto, setTogglePhoto] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuColor, setMenuColor] = useState('gray');
  const size = useWindowSize();

  const menuClicked = () => {
    setIsOpen(!isOpen);
    setShowMenu(!showMenu);
    if (menuColor === 'gray') {
      setMenuColor('white');
    } else {
      setMenuColor('gray');
    }
  };

  return (
    <div>
      {size.width < 750 && (
        <div className={styles.phone_nav}>
          {showMenu && (
            <div className={styles.modal}>
              <ul>
                <li>
                  {' '}
                  <Link
                    className={styles.modal_menu}
                    href={'/'}
                    onClick={menuClicked}
                  >
                    OVERVIEW
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link
                    className={styles.modal_menu}
                    href={'/commissioned'}
                    onClick={menuClicked}
                  >
                    COMMISSIONED
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link
                    className={styles.modal_menu}
                    href={'/personal'}
                    onClick={menuClicked}
                  >
                    PERSONAL
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link
                    className={styles.modal_menu}
                    href={'/film-landing'}
                    onClick={menuClicked}
                  >
                    DIRECTOR
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link
                    className={styles.modal_menu}
                    href={'/about'}
                    onClick={menuClicked}
                  >
                    ABOUT
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <HamburgerMenu
            className={styles.hamberder}
            isOpen={isOpen}
            menuClicked={menuClicked}
            width={28}
            height={25}
            strokeWidth={1.5}
            rotate={0}
            color={menuColor}
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
      )}
      {size.width > 750 && (
        <div className={styles.nav}>
          <div className={styles.nav__logo}>
            <Link href={'/'}>ALEX CONTELL</Link>
          </div>
          <div className={styles.nav__overview}>
            <Link href={'/'}>OVERVIEW</Link>
          </div>
          <div className={styles.nav__photography}>
            <Link href={'/projects'}>PROJECTS</Link>
          </div>
          <div className={styles.nav__film}>
            <Link href={'/film-landing'}>DIRECTOR</Link>
          </div>
          <div className={styles.nav__about}>
            <Link href={'/about'}>ABOUT</Link>
          </div>
        </div>
      )}
    </div>
  );
}
