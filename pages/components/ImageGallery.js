import React from 'react';
import { useState, useEffect } from 'react';
import styles from './../../styles/Home.module.scss';

import Image from 'next/image';
import Carousel from './Carousel';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import useWindowSize from '/useWindowSize';

export default function ImageGallery(props) {
  let sortedPhotos = null;
  if (props.images) {
    sortedPhotos = props.images.sort((a, b) => {
      const nameA = a.filename.toLowerCase();
      const nameB = b.filename.toLowerCase();

      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  let [photos, setPhotos] = useState(sortedPhotos);

  const [showGrid, setShowGrid] = useState(props.grid);
  let [startingPoint, setStartingPoint] = useState(1);
  let [scrollPosition, setScrollPosition] = useState(0);
  const { width, height } = useWindowSize();
  const regex = /\/([^/]+)$/;

  useEffect(() => {
    if (props.images) {
      setPhotos(props.images);
    }
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
        <div style={{ padding: '80px' }}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="80px">
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
                        filename={image.filename}
                        folder={regex.exec(image.folder)}
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
