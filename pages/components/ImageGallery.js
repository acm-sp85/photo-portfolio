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
        <Box
          sx={{
            width: '100vw',
            overflowY: 'hidden',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <ImageList
            variant="masonry"
            cols={2}
            gap={20}
            className={styles.masons}
          >
            {photos &&
              photos.map((image) => {
                startingPoint++;
                return (
                  <ImageListItem key={image.img}>
                    <Image
                      width={image.width}
                      height={image.height}
                      // src={image.image}
                      src={`${image.image}?w=248&fit=crop&auto=format`}
                      srcSet={`${image.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      // loading="lazy"
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
