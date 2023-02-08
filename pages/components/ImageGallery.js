import React from 'react';
import { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.scss';

import Image from 'next/image';
import Carousel from './Carousel';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import useWindowSize from '/useWindowSize';

export default function ImageGallery(props) {
  let [photos, setPhotos] = useState(props.images);
  const [showGrid, setShowGrid] = useState(props.grid);
  let [startingPoint, setStartingPoint] = useState(1);
  let [scrollPosition, setScrollPosition] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setPhotos(props.images);
    setStartingPoint(0);
  }, [props]);

  const gridSwitch = () => {
    if (width > 750) {
      setShowGrid(!showGrid);
    } else {
      setStartingPoint(0);
    }
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
                        key={image.id}
                        alt={startingPoint} //adding a counter to be know which image we clicked
                        onClick={(e) => {
                          setStartingPoint(e.target.alt);
                          console.log(scrollPosition);
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
