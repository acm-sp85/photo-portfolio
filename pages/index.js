import { useState, useEffect } from 'react';
import { search, getFolders, mapImageResources } from '../lib/cloudinary';
import styles from '../styles/Home.module.scss';
import ImageGallery from './components/ImageGallery';
import useWindowSize from '/useWindowSize';
import { motion } from 'framer-motion';

export default function Overview({ images }) {
  const { width, height } = useWindowSize();
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className={styles.sectionTitle}>overview</h1>
      {width < 750 && <ImageGallery images={images} grid={true} />}
      {width > 750 && <ImageGallery images={images} grid={true} />}
    </motion.div>
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
