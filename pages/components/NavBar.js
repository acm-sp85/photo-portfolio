import React from 'react';
import styles from './../../styles/Home.module.scss';

function NavBar() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>
        <a>ALEX CONTELL</a>
      </div>
      <div className={styles.nav__photography}>
        <a>PHOTOGRAPHY</a>
      </div>
      <div className={styles.nav__film}>
        <a>FILM</a>
      </div>
      <div className={styles.nav__about}>
        <a>ABOUT</a>
      </div>
    </div>
  );
}

export default NavBar;
