import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { stagger, fadeInUp } from '../animationConstants';


export default function Personal() {
  const blackBackground =
    'https://res.cloudinary.com/acm-85/image/upload/v1674222758/photo-portfolio/commercial/hero-images/_MG_1588-as-Smart-Object-1_axr644_fuhfmz.jpg';
  let [backgroundImage, setBackgroundImage] = useState(blackBackground);
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={styles.with__transition}
        style={{
          backgroundColor: 'blue',
          width: '100%',
          height: '100%',
          background: 'white',
          opacity: '0.6',
          position: 'fixed',
          backgroundPosition: 'center',
          backgroundImage: `url(
            ${backgroundImage} )`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: '-100',
        }}
      />
      <div
        className={styles.with__transition}
        style={{
          backgroundColor: 'black',
          width: '100%',
          height: '100%',
          background: 'black',
          position: 'fixed',
          zIndex: '-200',
        }}
      />
      <div
        className={`${styles.list__block} ${styles.centered}`}
        style={{ height: '100vh', zIndex: '100' }}
      >
        <motion.ul
          variants={stagger}
          className={styles.list}
          exit={{ opacity: 0 }}
        >
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              className={styles.list__name}
              href={'gallery/street-studies'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674222758/photo-portfolio/commercial/hero-images/_MG_1588-as-Smart-Object-1_axr644_fuhfmz.jpg'
                )
              }
              onMouseLeave={() => setBackgroundImage(blackBackground)}
            >
              Street Studies
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              className={styles.list__name}
              href={'ram'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674246738/photo-portfolio/commercial/hero-images/89240017_rjivd6.jpg'
                )
              }
              onMouseLeave={() => setBackgroundImage(blackBackground)}
            >
              Random Access Memory
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              className={styles.list__name}
              href={'gallery/old-old-ny'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674222721/photo-portfolio/commercial/hero-images/Alex_Contell_-_Timeless_New_York-20_hagdc2.jpg'
                )
              }
              onMouseLeave={() => setBackgroundImage(blackBackground)}
            >
              Old Old New York
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              className={`${styles.list__name} ${styles.with__transition}`}
              href={'/travel'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674222649/photo-portfolio/commercial/hero-images/0437_pjgp4d.jpg'
                )
              }
              onMouseLeave={() => setBackgroundImage(blackBackground)}
            >
              Travel Log
            </Link>
          </motion.div>
        </motion.ul>
      </div>
    </motion.div>
  );
}
