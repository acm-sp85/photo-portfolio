import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.div
      className={styles.projects}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.projects__commissioned}>
        <div
          className={` ${styles.verticalAlign} ${styles.list__block} ${styles.centered} `}
        >
          <ul className={styles.list}>
            <Link className={styles.list__name} href={'/commissioned'}>
              COMMISSIONED
            </Link>
          </ul>
        </div>
      </div>
      <div className={styles.projects__personal}>
        <div
          className={` ${styles.verticalAlign} ${styles.list__block} ${styles.centered} `}
        >
          <ul className={styles.list}>
            <Link className={styles.list__name} href={'/personal'}>
              PERSONAL
            </Link>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
