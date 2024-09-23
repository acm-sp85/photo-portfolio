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
          Valencia, Spain. He made his artistic debut in 2016 with his solo
          exhibition <i>Don&apos;t Think Twice</i>, which focused on the complex
          interplay between photography and self-censorship. This exhibition
          marked his growing interest in photography as a medium and set the
          stage for his later work. His fascination with analog photography
          culminated in the feature documentary film{' '}
          <a
            href="https://www.imdb.com/title/tt16262836/?ref_=vp_vi_tt"
            target="_blank"
            rel="noreferrer"
            className={styles.underlineLink}
          >
            <i>GRAIN: Analog Renaissance</i>
          </a>
          , an exploration of the resurgence of the medium. The film premiered
          at the DOC NYC Film Festival in 2021.
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
          <h2 className={styles.about__contact}>+34 679 671 884</h2>
          <a className={styles.about__contact} href="mailto:acontell@gmail.com">
            acontell@gmail.com
          </a>
          <br />
          <br />
          {/* <h2 className={styles.about__contact}>INFO</h2> */}
          <Link
            className={styles.about__contact}
            href="https://www.instagram.com/alex_contell/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Instagram</p>
          </Link>
          {/* <Link
            className={styles.about__contact}
            href="https://dontttwice.tumblr.com/"
            target="_blank"
            rel="noreferrer"
          >
            <p>Tumblr</p>
          </Link>
          <Link
            className={styles.about__contact}
            href="https://twitter.com/Alex_Contell"
            target="_blank"
            rel="noreferrer"
          >
            <p>Twitter</p>
          </Link> */}
          <Link
            className={styles.about__contact}
            href="https://www.imdb.com/name/nm3990386/?ref_=nv_sr_srsg_0"
            target="_blank"
            rel="noreferrer"
          >
            <p>IMDB</p>
          </Link>
          {/* <Link
            className={styles.about__contact}
            href="https://vimeo.com/alexcontell"
            target="_blank"
            rel="noreferrer"
          >
            <p>Vimeo</p>
          </Link> */}
        </div>
      </div>
    </motion.div>
  );
}
