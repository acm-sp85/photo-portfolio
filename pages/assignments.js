import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function assignments() {
  return (
    <div className={styles.centered}>
      <ul className={styles.list}>
        <Link href={'/assignments/chase-bank'}>Chase Bank</Link>
        <Link href={'/assignments/vogue'}>Vogue</Link>
        <Link href={'/assignments/telva'}>Telva</Link>
        <Link href={'/assignments/off-white'}>OffWhite</Link>
        <Link href={'/assignments/pace'}>Pace</Link>
        <Link href={'/assignments/dazzler'}>Dazzler Hotel</Link>
        <Link href={'/assignments/demelier'}>DeMelier</Link>
        <Link href={'/assignments/ismine'}>IsMine</Link>
        <Link href={'/assignments/kionita'}>Kionita</Link>
        <Link href={'/assignments/wok-bao'}>Wok & Bao</Link>
        {/* <li>StoneIsland</li>
        <li>Urban Atelier Group</li>
        <li>SYLVAIN</li>
        <li>Blink</li> */}
      </ul>
    </div>
  );
}
