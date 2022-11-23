import React from 'react';
import { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.scss';

import Image from 'next/image';
import { XMasonry, XBlock } from 'react-xmasonry';
// import { Masonry } from '@mui/lab';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

export default function ImageGallery(props) {
  let [photos, setPhotos] = useState(props.images);
  const [showGrid, setShowGrid] = useState(true);
  let [startingPoint, setStartingPoint] = useState(-1);

  useEffect(() => {
    setPhotos(props.images);
  }, [props]);
  // useEffect(() => {
  //   setShowGrid(false);
  // }, [photos]);

  useEffect(() => {}, [startingPoint]);

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
            startingPoint++;
            return (
              <XBlock key={startingPoint}>
                <div className={styles.card}>
                  <Image
                    width={image.width}
                    height={image.height}
                    src={image.image}
                    alt={startingPoint} //adding a counter to be know which image we clicked
                    onClick={(e) => {
                      console.log(e.target.alt);
                      setStartingPoint(e.target.alt);
                      gridSwitch();
                    }}
                  />
                </div>
              </XBlock>
            );
          })}
        </XMasonry>
      )}
    </div>
  );
}
