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
      } else if (e.code === 'Escape') {
        setStartingPoint(0);
        gridSwitch();
      }
    };
    document.addEventListener('keydown', keyDownHandler);

    // clean up
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [counter, gridSwitch, setStartingPoint, images.length]);

  const goLeft = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    } else if (counter === 0) {
      setCounter(images.length - 1);
    }
  };

  const goRight = () => {
    if (counter < photos.length - 1) {
      setCounter(counter + 1);
    } else if (counter === images.length - 1) {
      setCounter(0);
    }
  };
  return (
    <div className={styles.carouselContainer}>
      <KeyboardArrowLeftIcon
        onClick={() => goLeft()}
        className={styles.arrows__left}
        fontSize="large"
      >
        left arrow
      </KeyboardArrowLeftIcon>

      {images && counter >= 0 && (
        <div className={`${styles.photo__display} ${styles.centered}`}>
          <Image
            width="1500"
            height="1500"
            loading="lazy"
            objectFit="contain"
            sizes="(min-width: 480px) 50vw , (min-width: 728px) 33vw, (min-width: 976px) 25vw"
            style={{
              height: '80vh',
              width: 'auto',
            }}
            src={images[counter].image}
            alt={images[counter].id}
            onClick={(e) => {
              setStartingPoint(0);
              gridSwitch();
            }}
          />
        </div>
      )}
      <KeyboardArrowRightIcon
        onClick={() => goRight()}
        className={styles.arrows__right}
        fontSize="large"
      >
        right arrow
      </KeyboardArrowRightIcon>
    </div>
  );
}
