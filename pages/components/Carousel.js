import React, { Component } from 'react';
import Image from 'next/image';
import styles from './../../styles/Home.module.scss';
import { useState, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Carousel({
  photos,
  gridSwitch,
  startingPoint,
  setStartingPoint,
}) {
  let [counter, setCounter] = useState(startingPoint - 1);
  let [images, setImages] = useState(photos);

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

      {images && counter >= 0 && (
        <div>
          <Image
            width={images[counter].width}
            height={images[counter].height}
            src={images[counter].image}
            alt={images[counter].id}
            className={styles.carouselImage}
            onClick={(e) => {
              setStartingPoint(0);
              gridSwitch();
            }}
          />
          <KeyboardArrowRightIcon
            onClick={() => goRight()}
            className={styles.arrows}
            style={{ fontSize: 'large' }}
          >
            right arrow
          </KeyboardArrowRightIcon>
        </div>
      )}
    </div>
  );
}
