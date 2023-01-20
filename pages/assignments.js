import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function Assignments() {
  let [backgroundImage, setBackgroundImage] = useState(null);
  return (
    <>
      <div
        style={{
          backgroundColor: 'blue',
          width: '100%',
          height: '100%',
          background: 'white',
          // opacity: '0.5',
          position: 'fixed',
          backgroundImage: `url(
            ${backgroundImage} )`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: '-100',
        }}
      ></div>
      <div className={styles.centered}>
        <ul className={styles.list}>
          <Link
            href={'/assignments/chase-bank'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674217616/photo-portfolio/commercial/hero-images/_H2A9368-1_z6uvrh.jpg'
              )
            }
            onMouseLeave={() => setBackgroundImage(null)}
          >
            Chase Bank
          </Link>
          <Link href={'/assignments/vogue'}>Vogue</Link>

          <Link
            href={'/assignments/telva'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674247576/photo-portfolio/commercial/hero-images/Alex_Contell_-_Timeless_New_York-1_vedqv7.jpg'
              )
            }
            onMouseLeave={() => setBackgroundImage(null)}
          >
            Telva
          </Link>
          <Link
            href={'/assignments/off-white'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674217683/photo-portfolio/commercial/hero-images/SP18_D3_119-Edit_ex5ppy.jpg'
              )
            }
            onMouseLeave={() => setBackgroundImage(null)}
          >
            OffWhite
          </Link>
          <Link href={'/assignments/sylvain'}>SYLVAIN</Link>
          <Link
            href={'/assignments/pace'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674217789/photo-portfolio/commercial/hero-images/_H2A7126_jwf83a.jpg'
              )
            }
            onMouseLeave={() => setBackgroundImage(null)}
          >
            Pace
          </Link>
          <Link href={'/assignments/demelier'}>DeMelier</Link>
          <Link href={'/assignments/ismine'}>IsMine</Link>
          <Link href={'/assignments/kionita'}>Kionita</Link>
          <Link href={'/assignments/wok-bao'}>Wok & Bao</Link>
          <Link href={'/assignments/dazzler'}>Dazzler Hotel</Link>
          <Link href={'/assignments/stone-island'}>StoneIsland</Link>
          <Link href={'/assignments/balmain'}>Balmain</Link>
          <Link href={'/assignments/carolina-herrera'}>Carolina Herrera</Link>
          <Link href={'/assignments/luxottica'}>Luxottica</Link>
          <Link href={'/assignments/uag'}>Urban Atelier Group</Link>
          <Link href={'/assignments/gift-of-time'}>Gift Of Time</Link>
          <Link href={'/assignments/church-st'}>Church Street Project</Link>
          <Link href={'/assignments/blink'}>Blink</Link>
          <Link href={'/assignments/mrka'}>MRKA</Link>
          <Link href={'/assignments/shipibo'}>
            Shipibo Connibo - Sara Flores
          </Link>
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
    </>
  );
}
