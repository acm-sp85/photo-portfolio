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
      <div className={styles.video__card}>
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
          <p>
            GRAIN is currently being shown in film festivals and is not
            available to watch online.{' '}
          </p>
        </div>
        <ReactPlayer
          url={'https://vimeo.com/683031798'}
          playing={false}
          controls={true}
          width="100%"
          height="100%"
          className={styles.player}
        />
      </div>
      <div className={styles.video__card}>
        <div className={styles.description}>
          <h3>A SONG IN A DAY</h3>
          <h4>2020</h4>
          <br />
          <p style={{ textTransform: 'uppercase' }}>
            This documentary follows the journey of talented musician, Emanuel
            Ayvas, as he writes and produces a whole song in just 24 hours.
            Viewers are given an inside look at Emanuel&apos;s creative process,
            from idea generation to recording. Throughout the experience,
            Emanuel handles the pressure with determination as he strives to
            bring his music to life. Emanuel&apos;s journey emphasizes the
            importance of embracing the creative process without being too
            focused on the end result. The real reward lies in the experience of
            creation and the satisfaction it brings. This film is sure to
            inspire viewers to tackle their own creative projects.
          </p>
        </div>
        <ReactPlayer
          url={'https://vimeo.com/447316206'}
          playing={false}
          controls={true}
          width="100%"
          height="100%"
          className={styles.player}
        />
      </div>
    </>
  );
}
