import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.nav__logo}>LOGO</div>
        <div className={styles.nav__photography}>PHOTOGRAPHY</div>
        <div className={styles.nav__film}>FILM</div>
        <div className={styles.nav__about}>ABOUT</div>
      </div>
    </div>
  );
}
