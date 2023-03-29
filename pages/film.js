import React from 'react';
import styles from '../styles/Home.module.scss';
import ReactPlayer from 'react-player';
import { useState, useEffect } from 'react';

export default function Film() {
  let [videoMuted, setVideoMuted] = useState(true);
  let [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {}, [console.log('hola')]);

  return (
    <>
      <div
        className={styles.video__card}
        // style={{
        //   backgroundImage: `url('https://res.cloudinary.com/acm-85/image/upload/v1676301440/photo-portfolio/films/Natalie-Stuart-lg_peaj0f.png')`,
        //   opacity: '.5'
        // }}
      >
        <div className={styles.description}>
          <h3>GRAIN: ANALOG RENAISSANCE</h3>
          <h4>2021</h4>
          <br />
          <p>
            GRAIN IS A DOCUMENTARY BY ALEX CONTELL AND TOMMASO SACCONI THAT
            EXPLORES THE STORIES OF THOSE COMMITTED TO USING FILM IN MODERN DAY
            PHOTOGRAPHY.
          </p>
          <br />
          <p>
            <b>SYNOPSIS:</b> TODAY, THE ART WORLD AND BEYOND IS OBSESSED WITH
            SHOOTING ANALOG. WHETHER IT&apos;S A FASHION HOUSE SEEKING TO BRING
            A NEW EDGE TO THEIR CREATIVE WORK, AN AMATEUR PERUSING EBAY FOR THE
            PERFECT VINTAGE POLAROID, OR AN INFLUENCER ATTEMPTING TO CAPTURE A
            COMFORTING RETRO AESTHETIC ON SOCIAL MEDIA, ANALOG PHOTOGRAPHY HAS
            PIQUED THE INTEREST OF PEOPLE EVERYWHERE. IS THIS RESURGENCE A
            BACKLASH AGAINST DIGITAL PHOTOGRAPHY? IS IT JUST A TREND PERPETUATED
            BY OUR DESIRE FOR AUTHENTICITY IN AN INCREASINGLY SUPERFICIAL WORLD?
            OR IS IT SOMETHING ELSE ENTIRELY?
          </p>
          <br />
          {/* <p>
            GRAIN is currently being shown in film festivals and is not
            available to watch online.{' '}
          </p> */}
        </div>
        <ReactPlayer
          url={'https://vimeo.com/683031798'}
          playing={false}
          controls={true}
          pip={false}
          width="100%"
          height="100%"
          className={styles.player}
          allowfullscreen
        />
      </div>
      <div className={styles.video__card}>
        <div className={styles.description}>
          <h3>A SONG IN A DAY</h3>
          <h4>2020</h4>
          <br />
          <p style={{ textTransform: 'uppercase' }}>
            Follow Emanuel Ayvas as he composes and records a new song in just
            24 hours. Get an intimate look at the steps involved in his creative
            process, from the inception of ideas to the final recording. This
            documentary aims to inspire and motivate artists who may be facing
            challenges in their own creative pursuits. By highlighting the
            significance of embracing the creative process without fear of
            failure, this film hopes to unblock creative potential.
          </p>
        </div>
        <ReactPlayer
          url={'https://vimeo.com/447316206'}
          playing={false}
          controls={true}
          pip={false}
          width="100%"
          height="100%"
          className={styles.player}
          allowfullscreen
        />
      </div>
      <div className={styles.video__card}>
        <div className={styles.description}>
          <h3>TAINTED LOVE</h3>
          <h4>2018</h4>
          <br />
          <p style={{ textTransform: 'uppercase' }}>
            Tainted Love is a fashion film that tells the story of a couple who
            just met. The film follows the dynamic between a man who is
            infatuated with an older woman, who only wants to play with him.
            Through its depiction of the ups and downs of their relationship,
            Tainted Love offers a look at the complexities of desire, power, and
            love.
          </p>
        </div>
        <ReactPlayer
          url={'https://vimeo.com/143644757/dd3de1d7c0'}
          playing={false}
          controls={true}
          pip={false}
          width="100%"
          height="100%"
          className={styles.player}
          allowfullscreen
        />
      </div>
    </>
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

*/
