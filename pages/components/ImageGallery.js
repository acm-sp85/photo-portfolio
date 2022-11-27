import React from 'react';
import { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.scss';

import Image from 'next/image';

import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
        <Box sx={{ overflowY: 'scroll' }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {photos.map((image) => (
              <ImageListItem key={image.img}>
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
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      )}
    </div>
  );
}
