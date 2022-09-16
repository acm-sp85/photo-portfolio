import React from 'react';
import { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.scss';
import { uuid } from 'uuidv4';
import Image from 'next/image';

export default function ImageGallery(props) {
  const [images, setImages] = useState(props.images);
  return (
    <div className={styles.photo__display}>
      {images.map((image) => {
        return (
          <li key={uuid()}>
            <div>
              <Image
                width={image.width}
                height={image.height}
                src={image.image}
                alt={image.id}
              />
            </div>
          </li>
        );
      })}
    </div>
  );
}
