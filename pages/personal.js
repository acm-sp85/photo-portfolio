import React from 'react';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';

export default function personal() {
  return (
    <div className={styles.centered}>
      <h1 style={{ marginLeft: '40px' }}>Random Access Memories</h1>
    </div>
  );
}
