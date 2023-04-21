import { useState, useEffect } from 'react';
import { search, getFolders, mapImageResources } from '../lib/cloudinary';
import styles from '../styles/Home.module.scss';
import ImageGallery from './components/ImageGallery';
import useWindowSize from '/useWindowSize';

export default function Overview({ images }) {
  const { width, height } = useWindowSize();
  return (
    <div>
      <h1 className={styles.sectionTitle}>overview</h1>
      {width < 750 && <ImageGallery images={images} grid={true} />}
      {width > 750 && <ImageGallery images={images} grid={true} />}
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps(context) {
  const results = await search({
    expression: `folder="photo-portfolio/overview"`,
    max_results: 500,
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources);

  return {
    props: { images },
  };
}
