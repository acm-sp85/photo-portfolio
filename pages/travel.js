import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../animationConstants';

export default function Travel() {
  const blackBackground =
    'https://res.cloudinary.com/acm-85/image/upload/v1674516421/photo-portfolio/personal/oaxaca/oaxaca-76_eatfsl.jpg';
  let [backgroundImage, setBackgroundImage] = useState(blackBackground);
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <motion.div
        className={styles.with__transition}
        style={{
          backgroundColor: 'blue',
          width: '100%',
          height: '100%',
          background: 'white',
          position: 'fixed',
          backgroundImage: `url(
            ${backgroundImage} )`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: '-100',
        }}
      ></motion.div>
      <div className={styles.centered}>
        <motion.ul variants={stagger} className={styles.list}>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/italy'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674514396/photo-portfolio/personal/italy/Italy-51_vjpgxc.jpg'
                )
              }
            >
              Italy
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/oaxaca'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674516421/photo-portfolio/personal/oaxaca/oaxaca-76_eatfsl.jpg'
                )
              }
              className={styles.list__name}
            >
              Oaxaca
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/la'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674514406/photo-portfolio/personal/la/LA-18_elfn8q.jpg'
                )
              }
              className={styles.list__name}
            >
              LA
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/new-orleans'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674514417/photo-portfolio/personal/new-orleans/New_Orleans-21_uhenrq.jpg'
                )
              }
              className={styles.list__name}
            >
              New Orleans
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/spain'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674514420/photo-portfolio/personal/spain/Spain-33_vkx7uq.jpg'
                )
              }
              className={styles.list__name}
            >
              Spain
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/morocco'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674222649/photo-portfolio/commercial/hero-images/0437_pjgp4d.jpg'
                )
              }
              className={styles.list__name}
            >
              Morocco
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/jordan'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674514405/photo-portfolio/personal/jordan/Jordan-50_x83akr.jpg'
                )
              }
              className={styles.list__name}
            >
              Jordan
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/hawaii'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674514390/photo-portfolio/personal/hawaii/Hawaii-26_ntvmvh.jpg'
                )
              }
              className={styles.list__name}
            >
              Hawaii
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/berlin'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674514338/photo-portfolio/personal/berlin/Berlin-2_htslaz.jpg'
                )
              }
              className={styles.list__name}
            >
              Berlin
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/miami'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674514935/photo-portfolio/personal/miami/Miami-10_rpcank.jpg'
                )
              }
              className={styles.list__name}
            >
              Miami
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'gallery/chicago'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674514389/photo-portfolio/personal/chicago/Chicago-2_rgynym.jpg'
                )
              }
              className={styles.list__name}
            >
              Chicago
              <motion.div
                exit={{ opacity: 0 }}
                variants={fadeInUp}
              ></motion.div>
            </Link>
          </motion.div>
        </motion.ul>
      </div>
    </motion.div>
  );
}
