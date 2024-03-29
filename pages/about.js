import React from 'react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function about() {
  return (
    // <li className={`${styles.projectsPdText} ${styles.projectsPdSubdetail}`}>

    <motion.div
      className={`${styles.about__container} ${styles.centered}`}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.about__left}>
        <p className={styles.about__text}>
          Alex Contell is a photographer and filmmaker with a Master&apos;s
          degree in Communication and Media Studies from CEU-University of
          Valencia, Spain. He moved to New York to advance his career and has
          worked for various brands and magazines as a freelancer. In his free
          time, Alex collaborates with other artists and works on personal
          projects. In 2016, he held his first solo show, &lsquo;don&apos;t
          think twice&lsquo; which explored the relationship between photography
          and editing in street photography. In 2021, his co-directed
          documentary, &lsquo;GRAIN&lsquo; premiered at the DOC NYC Film
          Festival in New York City after four years of production. The film has
          since been shown at several international film festivals.
        </p>
        {/* <p className={styles.about__text}>
          CLIENTS Vogue | The Sunday Times | JPM Chase | DrJart+ | The Tennis
          Channel | Spotify | MTV | Nike | Off-White | Studio Rondinone |
          SYLVAIN | Arizona Beverage Company | Union Savings Bank | Telva{' '}
        </p> */}
      </div>
      <div className={styles.about__right}>
        <div className={styles.about__right__top}></div>
        <div className={styles.about__right__bottom}>
          <h2 className={styles.about__contact}>CONTACT</h2>
          <h2 className={styles.about__contact}>Alex Contell</h2>
          <h2 className={styles.about__contact}>+1 516 590 9314</h2>
          <a className={styles.about__contact} href="mailto:acontell@gmail.com">
            acontell@gmail.com
          </a>
          <br />
          <br />
          {/* <h2 className={styles.about__contact}>INFO</h2> */}
          <Link
            className={styles.about__contact}
            href="https://www.instagram.com/alex_contell/"
          >
            <p>Instagram</p>
          </Link>
          <Link
            className={styles.about__contact}
            href="https://dontttwice.tumblr.com/"
          >
            <p>Tumblr</p>
          </Link>
          <Link
            className={styles.about__contact}
            href="https://twitter.com/Alex_Contell"
          >
            <p>Twitter</p>
          </Link>
          <Link
            className={styles.about__contact}
            href="https://vimeo.com/alexcontell"
          >
            <p>Vimeo</p>
          </Link>
          <Link
            className={styles.about__contact}
            href="https://www.imdb.com/name/nm3990386/?ref_=nv_sr_srsg_0"
          >
            <p>IMDB</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
