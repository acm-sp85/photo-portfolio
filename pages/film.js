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
      <div className={styles.container__landing__1}>
        <ReactPlayer
          url={'https://vimeo.com/683031798'}
          playing={true}
          loop={true}
          controls={true}
          muted={videoMuted}
          width="100%"
          height="100%"
          // className={styles.video}
        />
      </div>
      <div className={styles.container__landing__2}>A Song in a Day</div>
      <div className={styles.container__landing__3}>Tainted Love</div>
    </>
  );
}
