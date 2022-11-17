import React from 'react';
import { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.scss';
import { uuid } from 'uuidv4';
import Image from 'next/image';
import { XMasonry, XBlock } from 'react-xmasonry';
import Carousel from './Carousel';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

export default function ImageGallery(props) {
  let [photos, setPhotos] = useState(props.images);
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    setPhotos(props.images);
  }, [props]);
  useEffect(() => {
    setShowGrid(false);
  }, [photos]);

  const gridSwitch = () => {
    setShowGrid(!showGrid);
  };

  return (
    <div>
      {showGrid ? (
        <ZoomOutMapIcon onClick={gridSwitch} className={styles.icons} />
      ) : (
        <ViewModuleIcon onClick={gridSwitch} className={styles.icons} />
      )}

      {showGrid && (
        <XMasonry
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
        </XMasonry>
      )}
      {!showGrid && <Carousel photos={photos} />}
    </div>
  );
}
