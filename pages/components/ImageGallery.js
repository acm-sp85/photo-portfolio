import React from 'react';
import { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.scss';
import { uuid } from 'uuidv4';
import Image from 'next/image';
import { XMasonry, XBlock } from 'react-xmasonry';
import Carousel from './Carousel';

export default function ImageGallery(props) {
  let [photos, setPhotos] = useState(props.images);

  useEffect(() => {
    setPhotos(props.images);
  }, [props]);

  return (
    <div>
      {/* <XMasonry
        maxColumns={3}
        responsive={true}
        smartUpdate={true}
        className={styles.photo__display}
      >
        {photos.map((image) => {
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
      </XMasonry> */}
      <Carousel photos={photos} style={{ maxWidth: '16px' }} />
    </div>
  );
}
