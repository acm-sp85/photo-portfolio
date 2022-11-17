import React, { Component } from 'react';
import Image from 'next/image';
import styles from './../../styles/Home.module.scss';
import { useState, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function DemoCarousel({ photos }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(0);
  }, [photos]);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.code === 'ArrowRight') {
        goRight();
      } else if (e.code === 'ArrowLeft') {
        goLeft();
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    // clean up
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [counter]);

  const goLeft = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  const goRight = () => {
    if (counter < photos.length - 1) {
      setCounter(counter + 1);
    }
  };
  return (
    <div className={styles.carouselContainer}>
      <KeyboardArrowLeftIcon onClick={() => goLeft()} className={styles.arrows}>
        left arrow
      </KeyboardArrowLeftIcon>

      <Image
        width={photos[counter].width}
        height={photos[counter].height}
        src={photos[counter].image}
        alt={photos[counter].id}
        className={styles.carouselImage}
      />
      <KeyboardArrowRightIcon
        onClick={() => goRight()}
        className={styles.arrows}
        style={{ fontSize: 'large' }}
      >
        right arrow
      </KeyboardArrowRightIcon>
    </div>
  );
}
