import React, { Component } from 'react';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import styles from './../../styles/Home.module.scss';
import { useState, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Carousel({
  photos,
  gridSwitch,
  startingPoint,
  setStartingPoint,
  y,
  setY,
}) {
  let [counter, setCounter] = useState(startingPoint - 1);
  let [images, setImages] = useState(photos);

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
  }, [counter, goLeft, goRight, gridSwitch, setStartingPoint]);

  return (
    <div>
      <div className={styles.carouselContainer}>
        <KeyboardArrowLeftIcon
          onClick={() => goLeft()}
          className={styles.arrows__left}
          fontSize="large"
          style={{
            cursor: 'pointer',
          }}
        >
          left arrow
        </KeyboardArrowLeftIcon>

        {images && counter >= 0 && (
          <div className={`${styles.photo__display} ${styles.centered}`}>
            <CldImage
              width="1500"
              height="1500"
              loading="lazy"
              objectFit="contain"
              sizes="(min-width: 480px) 50vw , (min-width: 728px) 33vw, (min-width: 976px) 25vw"
              style={{
                height: '80vh',
                width: 'auto',
                cursor: 'n-resize',
              }}
              src={images[counter].image}
              alt={images[counter].id}
              onClick={(e) => {
                setY(y);
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
          style={{
            cursor: 'pointer',
          }}
        >
          right arrow
        </KeyboardArrowRightIcon>
      </div>
      {/* <i
        class="gg-menu-grid-r"
        style={{
          color: 'black',
          cursor: 'pointer',
          marginTop: '40px',
          marginLeft: '50%',
        }}
        onClick={(e) => {
          setY(y);
          setStartingPoint(0);
          gridSwitch();
        }}
      ></i> */}
    </div>
  );
}
