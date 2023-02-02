import React from 'react';
import { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.scss';

import Image from 'next/image';
import { CldImage } from 'next-cloudinary';
import Carousel from './Carousel';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function ImageGallery(props) {
  let [photos, setPhotos] = useState(props.images);
  const [showGrid, setShowGrid] = useState(props.showGrid);
  let [startingPoint, setStartingPoint] = useState(1);

  useEffect(() => {
    setPhotos(props.images);
    setStartingPoint(0);
    if (props.grid) {
      setShowGrid(props.grid);
    }
  }, [props]);

  useEffect(() => {}, [startingPoint]);

  const gridSwitch = () => {
    setShowGrid(!showGrid);
  };

  return (
    <div className={styles.image_gallery}>
      {showGrid && (
        <div style={{ padding: '30px' }}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="30px">
              {photos &&
                photos.map((image) => {
                  startingPoint++;
                  return (
                    <>
                      <Image
                        width="500"
                        height="500"
                        loading="lazy"
                        // sizes="(min-width: 480px) 50vw , (min-width: 728px) 33vw, (min-width: 976px) 25vw"
                        style={{
                          height: 'auto',
                          width: 'auto',
                        }}
                        src={image.image}
                        alt={startingPoint} //adding a counter to be know which image we clicked
                        onClick={(e) => {
                          setStartingPoint(e.target.alt);

                          gridSwitch();
                        }}
                      />
                    </>
                  );
                })}
            </Masonry>
          </ResponsiveMasonry>
        </div>
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
