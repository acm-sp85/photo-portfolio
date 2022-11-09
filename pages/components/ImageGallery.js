import React from 'react';
import { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.scss';
import { uuid } from 'uuidv4';
import Image from 'next/image';
import { XMasonry, XBlock } from 'react-xmasonry';

export default function ImageGallery(props) {
  const [images, setImages] = useState(props.images);
  return (
    <div>

      <XMasonry
        maxColumns={3}
        responsive={true}
        smartUpdate={true}
        className={styles.photo__display}
      >
        {images.map((image) => {
          return (
            <XBlock key={uuid()}>
              <div className={styles.card}>
                <Image
                  width={image.width}
                  height={image.height}
                  src={image.image}
                  alt={image.id}
                />
              </div>
            </XBlock>
          );
        })}
      </XMasonry>
    </div>
  );
}
