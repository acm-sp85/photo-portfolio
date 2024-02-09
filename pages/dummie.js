import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';

export default function Dummie() {
  let [show1, setShow1] = useState(true);
  let [show2, setShow2] = useState(false);
  return (
    <div>
      <p
        // className={` ${styles.verticalAlign} ${styles.list__block} ${styles.centered} `}
        style={{
          position: 'absolute',

          zIndex: 100,
          color: 'white',
        }}
      >
        XXX
      </p>{' '}
      {show1 && (
        <Image
          onClick={() => {
            setShow1(false);
            setShow2(true);
          }}
          alt=""
          priority={true}
          style={{
            backgroundColor: 'blue',
            width: '100vw',
            height: '100vh',
            background: 'black',
            zIndex: '-100',
            objectFit: 'cover',
            zIndex: -1,
          }}
          src={
            'https://res.cloudinary.com/acm-85/image/upload/v1674222758/photo-portfolio/commercial/hero-images/_MG_1588-as-Smart-Object-1_axr644_fuhfmz.jpg'
          }
          width="1000"
          height="1000"
        />
      )}
      {show2 && (
        <Image
          onClick={() => {
            setShow2(false);
            setShow1(true);
          }}
          alt=""
          priority={true}
          style={{
            backgroundColor: 'blue',
            width: '100vw',
            height: '100vh',
            background: 'black',
            zIndex: '-100',
            objectFit: 'cover',
            zIndex: -1,
          }}
          src={
            'https://res.cloudinary.com/acm-85/image/upload/v1676305791/photo-portfolio/films/Thumbnail_Song_in_a_Day_xmaiev.jpg'
          }
          width="1000"
          height="1000"
        />
      )}
    </div>
  );
}
