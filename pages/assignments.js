import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { useState } from 'react';

export default function Assignments() {
  const whiteBackground =
    'https://res.cloudinary.com/acm-85/image/upload/v1674301787/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.49.35_AM_yynapx.png';
  let [backgroundImage, setBackgroundImage] = useState(whiteBackground);
  return (
    <>
      <div
        className={styles.with__transition}
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
            // onMouseLeave={() => setBackgroundImage(whiteBackground)}
          >
            Chase Bank
          </Link>
          <Link
            href={'/assignments/vogue'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674476528/photo-portfolio/commercial/hero-images/_MG_5091_du2qpw.jpg'
              )
            }
          >
            Vogue
          </Link>

          <Link
            href={'/assignments/telva'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674478322/photo-portfolio/commercial/hero-images/Telva-12_nxofkn.jpg'
              )
            }
          >
            Telva
          </Link>
          <Link
            href={'/assignments/off-white'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674481537/photo-portfolio/commercial/hero-images/off-white-1_kxizck.jpg'
              )
            }
          >
            OffWhite
          </Link>

          <Link
            href={'/assignments/sylvain'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674491071/photo-portfolio/commercial/hero-images/sylvain-1_tme442.jpg'
              )
            }
          >
            SYLVAIN
          </Link>
          <Link
            href={'/assignments/pace'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674217789/photo-portfolio/commercial/hero-images/_H2A7126_jwf83a.jpg'
              )
            }
          >
            Pace
          </Link>
          <Link
            href={'/assignments/demelier'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674481617/photo-portfolio/commercial/hero-images/_H2A2171_jxs7pr.jpg'
              )
            }
          >
            DeMelier
          </Link>
          <Link
            href={'/assignments/ismine'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674481927/photo-portfolio/commercial/hero-images/ismine-hero-1_ewhqd5.jpg'
              )
            }
          >
            Ismine
          </Link>
          <Link
            href={'/assignments/kionita'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674482226/photo-portfolio/commercial/hero-images/kionita-1_s4jvvx.jpg'
              )
            }
          >
            Kionita
          </Link>
          <Link
            href={'/assignments/wok-bao'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674482319/photo-portfolio/commercial/hero-images/_H2A6769-1_bhhfyp.jpg'
              )
            }
          >
            Wok & Bao
          </Link>
          <Link
            href={'/assignments/dazzler'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674483474/photo-portfolio/commercial/hero-images/Dazzler-4_let0jp.jpg'
              )
            }
          >
            Dazzler Hotel
          </Link>
          <Link
            href={'/assignments/stone-island'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1671752257/photo-portfolio/commercial/stone-island/Stone_Island0004_ney899.jpg'
              )
            }
          >
            StoneIsland
          </Link>

          {/* <Link href={'/assignments/balmain'}>Balmain</Link>
          <Link href={'/assignments/carolina-herrera'}>Carolina Herrera</Link>
        <Link href={'/assignments/luxottica'}>Luxottica</Link> */}
          <Link
            href={'/assignments/uag'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1673285943/photo-portfolio/commercial/uag/02_NT_5409_sqv2u1.jpg'
              )
            }
          >
            Urban Atelier Group
          </Link>
          <Link
            href={'/assignments/gift-of-time'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674488404/photo-portfolio/commercial/hero-images/Gift-of-Time-1_g5ulzg.jpg'
              )
            }
          >
            Gift Of Time
          </Link>

          {/* <Link href={'/assignments/church-st'}>Church Street Project</Link> */}
          {/* <Link href={'/assignments/blink'}>Blink</Link> */}
          <Link
            href={'/assignments/mrka'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674488361/photo-portfolio/commercial/hero-images/MRKA-sho-1_psn6vo.jpg'
              )
            }
          >
            MRKA
          </Link>
          <Link
            href={'/assignments/lonely-clay'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674492869/photo-portfolio/commercial/hero-images/ceramics_30_zjqamu.jpg'
              )
            }
          >
            Lonely clay
          </Link>
          <Link
            href={'/assignments/coma-store'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674493193/photo-portfolio/commercial/hero-images/coma-1-2_kq9put.jpg'
              )
            }
          >
            Coma Store
          </Link>
          <Link
            href={'/assignments/henry-julier'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674494298/photo-portfolio/commercial/henry-julier/henry-julier-5_d7via9.jpg'
              )
            }
          >
            Henry Julier
          </Link>
          <Link
            href={'/assignments/arizona'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674495450/photo-portfolio/commercial/arizona/Arizona-3_eiqb3n.jpg'
              )
            }
          >
            Arizona
          </Link>
          <Link
            href={'/assignments/olea'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1672158055/photo-portfolio/commercial/olea/Olea1545_viviy7.jpg'
              )
            }
          >
            Olea Herbals
          </Link>
          <Link
            href={'/assignments/perrier'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674496000/photo-portfolio/commercial/perrier/Perrier-1_nulqsj.jpg'
              )
            }
          >
            Perrier
          </Link>

          <Link href={'/assignments/sunday-times'}>The Sunday Times</Link>
          <Link href={'/assignments/usb'}>Union Savings Bank</Link>
          <Link href={'/assignments/beto'}>Beto Garcia</Link>
          <Link href={'/assignments/airama'}>Airama</Link>
          <Link href={'/assignments/nuvolari'}>Nuvolari - Fuori Corso</Link>
          <Link href={'/assignments/bullish'}>Bullish</Link>
          {/* <Link href={'/assignments/shipibo'}>
            Shipibo Connibo - Sara Flores
          </Link> */}
          {/* <Link href={'/assignments/hergueta'}>Gonzalo Hergueta Studio</Link> */}
        </ul>
      </div>
    </>
  );
}
