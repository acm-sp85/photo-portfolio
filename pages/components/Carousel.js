import React, { Component } from 'react';
import Image from 'next/image';
import styles from './../../styles/Home.module.scss';
import { useState } from 'react';

export default function DemoCarousel({ photos }) {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.carouselContainer}>
      {counter != 0 && (
        <button onClick={() => setCounter(counter - 1)}>left arrow</button>
      )}

      <Image
        width={photos[counter].width}
        height={photos[counter].height}
        src={photos[counter].image}
        alt={photos[counter].id}
        className={styles.carouselImage}
      />
      <button onClick={() => setCounter(counter + 1)}>right arrow</button>
    </div>
  );
}
