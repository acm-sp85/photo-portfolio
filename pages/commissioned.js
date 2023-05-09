import React from 'react';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { stagger, fadeInUp } from '../animationConstants';
import { motion } from 'framer-motion';

export default function Commissioned() {
  const whiteBackground =
    'https://res.cloudinary.com/acm-85/image/upload/v1681925803/photo-portfolio/commercial/hero-images/overview-63_k72iwu.jpg';
  let [backgroundImage, setBackgroundImage] = useState(whiteBackground);
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <motion.div
        className={styles.with__transition}
        style={{
          backgroundColor: 'blue',
          width: '100%',
          height: '100%',
          background: 'white',
          opacity: '0.6',
          position: 'fixed',
          backgroundImage: `url(
            ${backgroundImage} )`,
          backgroundPosition: 'center',
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
        className={` ${styles.verticalAlign} ${styles.list__block} ${styles.centered} `}
      >
        <motion.ul variants={stagger} className={styles.list}>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/uag'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1681925803/photo-portfolio/commercial/hero-images/overview-63_k72iwu.jpg'
                )
              }
            >
              Urban Atelier Group
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/sylvain'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674491071/photo-portfolio/commercial/hero-images/sylvain-1_tme442.jpg'
                )
              }
            >
              SYLVAIN
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/off-white'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674481537/photo-portfolio/commercial/hero-images/off-white-1_kxizck.jpg'
                )
              }
            >
              OffWhite
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/chase-bank'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674217616/photo-portfolio/commercial/hero-images/_H2A9368-1_z6uvrh.jpg'
                )
              }
            >
              Chase Bank
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/freepik'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1683149142/photo-portfolio/commercial/hero-images/hero_freepik_ewejs8.jpg'
                )
              }
            >
              FreePik
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/loftie'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1682970323/photo-portfolio/commercial/hero-images/LoftieKids_2_nfqmmj.jpg'
                )
              }
            >
              Loftie
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/drjart'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1683207776/photo-portfolio/commercial/hero-images/Dermaclear.mov.00_00_02_16.Still003_copy_ql0w03.jpg'
                )
              }
            >
              DrJart+
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/vogue'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674476528/photo-portfolio/commercial/hero-images/_MG_5091_du2qpw.jpg'
                )
              }
            >
              Vogue
            </Link>
          </motion.div>

          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/telva'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674478322/photo-portfolio/commercial/hero-images/Telva-12_nxofkn.jpg'
                )
              }
            >
              Telva
            </Link>
          </motion.div>

          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/henry-julier'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674494298/photo-portfolio/commercial/henry-julier/henry-julier-5_d7via9.jpg'
                )
              }
            >
              Henry Julier
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/arizona'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674495450/photo-portfolio/commercial/arizona/Arizona-3_eiqb3n.jpg'
                )
              }
            >
              Arizona
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/olea'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1672158055/photo-portfolio/commercial/olea/Olea1545_viviy7.jpg'
                )
              }
            >
              Olea Herbals
            </Link>
          </motion.div>

          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/pace'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674217789/photo-portfolio/commercial/hero-images/_H2A7126_jwf83a.jpg'
                )
              }
            >
              Pace
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/nuvolari'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1675277903/photo-portfolio/commercial/hero-images/nuvolari-6_kztbry.jpg'
                )
              }
            >
              Nuvolari - Fuori Corso
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/usb'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1675374678/photo-portfolio/commercial/hero-images/USB-_Dance_etc-4_sho8xi.jpg'
                )
              }
            >
              Union Savings Bank
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/airama'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1675375053/photo-portfolio/commercial/hero-images/Airama-1_kldudw.jpg'
                )
              }
            >
              Airama
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/sunday-times'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1675375192/photo-portfolio/commercial/hero-images/sunday-times-7_xc0mqz.jpg'
                )
              }
            >
              The Sunday Times
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/wok-bao'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674482319/photo-portfolio/commercial/hero-images/_H2A6769-1_bhhfyp.jpg'
                )
              }
            >
              Wok & Bao
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/dazzler'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674483474/photo-portfolio/commercial/hero-images/Dazzler-4_let0jp.jpg'
                )
              }
            >
              Dazzler Hotel
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/stone-island'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1671752257/photo-portfolio/commercial/stone-island/Stone_Island0004_ney899.jpg'
                )
              }
            >
              StoneIsland
            </Link>
          </motion.div>

          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/mrka'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674488361/photo-portfolio/commercial/hero-images/MRKA-sho-1_psn6vo.jpg'
                )
              }
            >
              MRKA
            </Link>
          </motion.div>
          <motion.div exit={{ opacity: 0 }} variants={fadeInUp}>
            <Link
              href={'/commissioned/lonely-clay'}
              onMouseEnter={() =>
                setBackgroundImage(
                  'https://res.cloudinary.com/acm-85/image/upload/v1674492869/photo-portfolio/commercial/hero-images/ceramics_30_zjqamu.jpg'
                )
              }
            >
              Lonely clay
            </Link>
          </motion.div>
          {/* <Link href={'/commissioned/balmain'}>Balmain</Link>
          <Link href={'/commissioned/carolina-herrera'}>Carolina Herrera</Link>
        <Link href={'/commissioned/luxottica'}>Luxottica</Link> */}

          {/* <Link
            className={styles.list__name}
            href={'/commissioned/gift-of-time'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674488404/photo-portfolio/commercial/hero-images/Gift-of-Time-1_g5ulzg.jpg'
              )
            }
          >
            Gift Of Time
          </Link> */}

          {/* <Link href={'/commissioned/church-st'}>Church Street Project</Link> */}
          {/* <Link href={'/commissioned/blink'}>Blink</Link> */}
          {/* <Link
            className={styles.list__name}
            href={'/commissioned/coma-store'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674493193/photo-portfolio/commercial/hero-images/coma-1-2_kq9put.jpg'
              )
            }
          >
            Coma Store
          </Link> */}

          {/* <Link
            className={styles.list__name}
            href={'/commissioned/perrier'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674496000/photo-portfolio/commercial/perrier/Perrier-1_nulqsj.jpg'
              )
            }
          >
            Perrier
          </Link> */}

          {/* <Link
            className={styles.list__name}
            href={'/commissioned/demelier'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674481617/photo-portfolio/commercial/hero-images/_H2A2171_jxs7pr.jpg'
              )
            }
          >
            DeMelier
          </Link> */}
          {/* <Link
            className={styles.list__name}
            href={'/commissioned/ismine'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674481927/photo-portfolio/commercial/hero-images/ismine-hero-1_ewhqd5.jpg'
              )
            }
          >
            Ismine
          </Link>
          <Link
            className={styles.list__name}
            href={'/commissioned/kionita'}
            onMouseEnter={() =>
              setBackgroundImage(
                'https://res.cloudinary.com/acm-85/image/upload/v1674482226/photo-portfolio/commercial/hero-images/kionita-1_s4jvvx.jpg'
              )
            }
          >
            Kionita
          </Link> */}

          {/* <Link href={'/commissioned/beto'}>Beto Garcia</Link> */}

          {/* <Link href={'/commissioned/bullish'}>Bullish</Link> */}
          {/* <Link href={'/commissioned/shipibo'}>
            Shipibo Connibo - Sara Flores
          </Link> */}
          {/* <Link href={'/commissioned/hergueta'}>Gonzalo Hergueta Studio</Link> */}
        </motion.ul>
      </div>
    </motion.div>
  );
}
