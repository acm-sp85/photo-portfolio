import React from 'react';
import { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.scss';

import Image from 'next/image';
import Carousel from './Carousel';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
// import Masonry from '@mui/lab/Masonry';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageGallery(props) {
  let [photos, setPhotos] = useState(props.images);
  const [showGrid, setShowGrid] = useState(true);
  let [startingPoint, setStartingPoint] = useState(1);

  useEffect(() => {
    setPhotos(props.images);
    setStartingPoint(0);
  }, [props]);
  // useEffect(() => {
  //   setShowGrid(false);
  // }, [photos]);

  useEffect(() => {}, [startingPoint]);

  const gridSwitch = () => {
    setShowGrid(!showGrid);
  };

  return (
    <div className={styles.image_gallery}>
      {/* {showGrid ? (
        <ZoomOutMapIcon onClick={gridSwitch} className={styles.icons} />
      ) : (
        <ViewModuleIcon onClick={gridSwitch} className={styles.icons} />
      )}{' '} */}

      {showGrid && (
        <Box sx={{ width: '100vw', height: '100vh', overflowY: 'scroll' }}>
          <ImageList
            variant="masonry"
            cols={3}
            gap={20}
            style={{ padding: '20px' }}
          >
            {photos &&
              photos.map((image) => {
                startingPoint++;
                return (
                  <ImageListItem key={image.img} style={{ overflow: 'hidden' }}>
                    <Image
                      width="500"
                      height="500"
                      style={{
                        height: 'auto',
                        width: 'auto',
                      }}
                      src={image.image}
                      // loading="lazy"
                      // alt={image.title}
                      alt={startingPoint} //adding a counter to be know which image we clicked
                      onClick={(e) => {
                        console.log(e.target.src);
                        setStartingPoint(e.target.alt);

                        gridSwitch();
                      }}
                    />
                  </ImageListItem>
                );
              })}
          </ImageList>
        </Box>
      )}
      {!showGrid && (
        <div>
          <Carousel
            photos={photos}
            gridSwitch={gridSwitch}
            startingPoint={startingPoint}
            setStartingPoint={setStartingPoint}
          />
          <p className={styles.assignmentName}>{props.folder}</p>
        </div>
      )}
    </div>
  );
}
