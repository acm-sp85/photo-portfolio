import React from 'react';
import styles from '../styles/Home.module.scss';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { stagger, fadeInUp } from '../animationConstants';
import ReactPlayer from 'react-player';

export default function FilmsLanding() {
  let [showGrain, setShowGrain] = useState(false);
  let [showSong, setShowSong] = useState(false);
  let [showTainted, setShowTainted] = useState(false);
  let [showNonsense, setShowNonsense] = useState(false);
  let [showMich, setShowMich] = useState(false);
  let [showDerma, setShowDerma] = useState(false);
  let [showSunday, setShowSunday] = useState(false);
  let [showErin, setShowErin] = useState(false);
  let [showOmar, setShowOmar] = useState(false);
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <motion.div variants={stagger} className={styles.video__landing}>
        <div
          style={{
            backgroundSize: 'cover',

            backgroundImage: !showGrain
              ? `url(https://res.cloudinary.com/acm-85/image/upload/v1683659081/photo-portfolio/videos/thumbnails/GRAIN_thumbnail_bpda2w.png )`
              : `url(https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png)`,
          }}
          onMouseEnter={() => {
            setShowGrain(true);
          }}
          onMouseLeave={() => setShowGrain(false)}
        >
          {showGrain && (
            <ReactPlayer
              url={'https://vimeo.com/683031798'}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
            />
          )}
        </div>
        <div
          style={{
            backgroundSize: 'cover',

            backgroundImage: !showSong
              ? `url(https://res.cloudinary.com/acm-85/image/upload/v1683661289/photo-portfolio/videos/thumbnails/A_Song_in_a_Day_Thumbnail_sxsvd8.png)`
              : `url(https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png)`,
          }}
          onMouseEnter={() => {
            setShowSong(true);
          }}
          onMouseLeave={() => setShowSong(false)}
        >
          {showSong && (
            <ReactPlayer
              url={'https://vimeo.com/447316206'}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
            />
          )}
        </div>
        <div
          style={{
            backgroundSize: 'cover',

            backgroundImage: !showSunday
              ? `url(https://res.cloudinary.com/acm-85/image/upload/v1683748963/photo-portfolio/videos/thumbnails/Every_Sunday_kocimg.png`
              : `url(https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png)`,
          }}
          onMouseEnter={() => {
            setShowSunday(true);
          }}
          onMouseLeave={() => setShowSunday(false)}
        >
          {showSunday && (
            <ReactPlayer
              url={'https://vimeo.com/825612663/ad7fc7f576'}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
            />
          )}
        </div>
        <div
          style={{
            backgroundSize: 'cover',

            backgroundImage: !showTainted
              ? `url(https://res.cloudinary.com/acm-85/image/upload/v1683661407/photo-portfolio/videos/thumbnails/Tainted_Love_rb14m5.png)`
              : `url(https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png)`,
          }}
          onMouseEnter={() => {
            setShowTainted(true);
          }}
          onMouseLeave={() => setShowTainted(false)}
        >
          {showTainted && (
            <ReactPlayer
              url={'https://vimeo.com/143644757/dd3de1d7c0'}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
            />
          )}
        </div>

        <div
          style={{
            backgroundSize: 'cover',

            backgroundImage: !showDerma
              ? `url(https://res.cloudinary.com/acm-85/image/upload/v1683747055/photo-portfolio/videos/thumbnails/dermaclear_xnyoqb.png`
              : `url(https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png)`,
          }}
          onMouseEnter={() => {
            setShowDerma(true);
          }}
          onMouseLeave={() => setShowDerma(false)}
        >
          {showDerma && (
            <ReactPlayer
              url={'https://vimeo.com/322354723/3dae2c5655'}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
            />
          )}
        </div>

        <div
          style={{
            backgroundSize: 'cover',

            backgroundImage: !showOmar
              ? `url(https://res.cloudinary.com/acm-85/image/upload/v1683750273/photo-portfolio/videos/thumbnails/omar_re3bgv.png`
              : `url(https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png)`,
          }}
          onMouseEnter={() => {
            setShowOmar(true);
          }}
          onMouseLeave={() => setShowOmar(false)}
        >
          {showOmar && (
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=3_ZnGxmfBKY&t=8s'}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
            />
          )}
        </div>
        <div
          style={{
            backgroundSize: 'cover',

            backgroundImage: !showErin
              ? `url(https://res.cloudinary.com/acm-85/image/upload/v1683749266/photo-portfolio/videos/thumbnails/erin_wasson_nuiytd.png`
              : `url(https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png)`,
          }}
          onMouseEnter={() => {
            setShowErin(true);
          }}
          onMouseLeave={() => setShowErin(false)}
        >
          {showErin && (
            <ReactPlayer
              url={'https://vimeo.com/160776025/a7041fcf20'}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
            />
          )}
        </div>

        <div
          style={{
            backgroundSize: 'cover',

            backgroundImage: !showNonsense
              ? `url(https://res.cloudinary.com/acm-85/image/upload/v1683662032/photo-portfolio/videos/thumbnails/Critical_Nonsense_b8kkpj.png`
              : `url(https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png)`,
          }}
          onMouseEnter={() => {
            setShowNonsense(true);
          }}
          onMouseLeave={() => setShowNonsense(false)}
        >
          {showNonsense && (
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=M0h8pcdo7Xw&t=4s'}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
            />
          )}
        </div>
        <div
          style={{
            backgroundSize: 'cover',

            backgroundImage: !showMich
              ? `url(https://res.cloudinary.com/acm-85/image/upload/v1683747056/photo-portfolio/videos/thumbnails/mich_kogan_cghhfx.png`
              : `url(https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png)`,
          }}
          onMouseEnter={() => {
            setShowMich(true);
          }}
          onMouseLeave={() => setShowMich(false)}
        >
          {showMich && (
            <ReactPlayer
              url={'https://vimeo.com/250292506/8bcf72a50c'}
              playing={true}
              muted={true}
              controls={true}
              width="100%"
              height="100%"
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

//LINKS TO COMMERCIAL

/*

ADVANTAGE OMAR:
1: https://www.youtube.com/watch?v=8isLnDv4PKs&t=187s
2: https://www.youtube.com/watch?v=sR9dUxwvE9k&t=19s
3: https://www.youtube.com/watch?v=3_ZnGxmfBKY&t=8s
4: https://www.youtube.com/watch?v=k8Eh5o-nkj8&t=19s
5: https://www.youtube.com/watch?v=RS3q42fELhw&t=1s
6: https://www.youtube.com/watch?v=-52ioxL8474&t=2s



ADD SYLVAIN PRESENTATION VIDEO




*/
