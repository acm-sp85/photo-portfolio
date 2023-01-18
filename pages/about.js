import React from 'react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function about() {
  return (
    // <li className={`${styles.projectsPdText} ${styles.projectsPdSubdetail}`}>
    <div className={`${styles.about__container} ${styles.centered}`}>
      <div className={styles.about__left}>
        <div className={styles.about__left__top}>
          {/* <Image
            width="300px"
            height="300px"
            src="https://res.cloudinary.com/acm-85/image/upload/v1671568786/about/bio-pic_jkixgd.jpg"
            alt="portrait"
          /> */}
        </div>
        <div className={styles.about__left__bottom}>
          <p>CONTACT</p>
          <p>Alex Contell</p>
          <p>+1 516 590 9314</p>
          <a href="mailto:info@alexcontell.com">info@alexcontell.com</a>
          <br />
          <br />
          <p>INFO</p>
          <Link href="https://www.instagram.com/alex_contell/">
            <p>Instagram</p>
          </Link>
          <Link href="https://dontttwice.tumblr.com/">
            <p>Tumblr</p>
          </Link>
          <Link href="https://twitter.com/Alex_Contell">
            <p>Twitter</p>
          </Link>
          <Link href="https://vimeo.com/alexcontell">
            <p>Vimeo</p>
          </Link>
          <Link href="https://www.imdb.com/name/nm3990386/?ref_=nv_sr_srsg_0">
            <p>IMDB</p>
          </Link>
        </div>
      </div>
      <div className={styles.about__right}>
        <p className={styles.about__text}>
          After completing his Masters in Communication and Media Studies at
          CEU-University of Valencia, Spain, he moves to New York to expand his
          career as a photographer and filmmaker. While freelancing for numerous
          brands and magazines he spends his free time collaborating with other
          artists and developing his own personal projects. In 2016 holds his
          first solo show called `don’t think twice` where he reflects on the
          important relationship between the act of photographing and the
          editing process in street photography. In 2021, as a culmination of
          four years of production, the documentary he co-directs, GRAIN,
          premieres in New York City as part of DOC NYC Film Festival.
        </p>
        {/* <p className={styles.about__text}>
          CLIENTS Vogue | The Sunday Times | JPM Chase | The Tennis Channel |
          Spotify | MTV | Nike | Off-White | Studio Rondinone | SYLVAIN |
          Arizona Beverage Company | Union Savings Bank | Telva{' '}
        </p> */}
      </div>
    </div>
  );
}
