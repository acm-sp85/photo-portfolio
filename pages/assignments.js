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
        <Link href={'/assignments/sylvain'}>SYLVAIN</Link>
        <Link href={'/assignments/pace'}>Pace</Link>
        <Link href={'/assignments/demelier'}>DeMelier</Link>
        <Link href={'/assignments/ismine'}>IsMine</Link>
        <Link href={'/assignments/kionita'}>Kionita</Link>
        <Link href={'/assignments/wok-bao'}>Wok & Bao</Link>
        <Link href={'/assignments/dazzler'}>Dazzler Hotel</Link>
        <Link href={'/assignments/stone-island'}>StoneIsland</Link>
        <Link href={'/assignments/balmain'}>Balmain</Link>
        <Link href={'/assignments/carolina-herrerea'}>Caroina Herrera</Link>
        <Link href={'/assignments/luxottica'}>Luxottica</Link>
        <Link href={'/assignments/uag'}>Urban Atelier Group</Link>
        <Link href={'/assignments/gift-of-time'}>Gift Of Time</Link>
        <Link href={'/assignments/church-st'}>Church Street Project</Link>
        <Link href={'/assignments/blink'}>Blink</Link>
        <Link href={'/assignments/mrka'}>MRKA</Link>
        <Link href={'/assignments/shipibo'}>Shipibo Connibo - Sara Flores</Link>
        <Link href={'/assignments/hergueta'}>Gonzalo Hergueta Studio</Link>
        <Link href={'/assignments/lonely-clay'}>Lonely Clay</Link>
        <Link href={'/assignments/coma-store'}>Coma Store</Link>
        <Link href={'/assignments/henry-julier'}>Herny Julier</Link>
        <Link href={'/assignments/arizona'}>Arizona</Link>
        <Link href={'/assignments/olea'}>Olea Herbals</Link>
        <Link href={'/assignments/perrier'}>Perrier</Link>
        <Link href={'/assignments/sunday-times'}>The Sunday Times</Link>
        <Link href={'/assignments/usb'}>Union Savings Bank</Link>
        <Link href={'/assignments/beto'}>Beto Garcia</Link>
        <Link href={'/assignments/airama'}>Airama</Link>
        <Link href={'/assignments/nuvolari'}>Nuvolari - Fuori Corso</Link>
        <Link href={'/assignments/bullish'}>Bullish</Link>
      </ul>
    </div>
  );
}
