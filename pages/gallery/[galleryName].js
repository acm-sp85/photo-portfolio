import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';
import ImageGallery from '../components/ImageGallery';
import styles from '../../styles/Home.module.scss';
import useWindowSize from '/useWindowSize';

export default function Gallery({ images, nextCursor, folders, grid }) {
  let router = useRouter();
  let folder = router.query.galleryName;
  let [photosToDisplay, setPhotosToDisplay] = useState(images);
  const { width, height } = useWindowSize();
  return (
    <div>
      <h1 className={styles.sectionTitle}>{router.query.galleryName}</h1>
      {width < 750 && <ImageGallery images={images} grid={true} />}
      {width > 750 && <ImageGallery images={images} grid={grid} />}
      {/* <ImageGallery images={images} grid={grid} /> */}
      {/* <ImageGallery images={images} showGrid={false} grid={grid} /> */}
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps(context) {
  const galleryName = context.params.galleryName;
  let grid = true;
  if (
    galleryName == 'street-studies' ||
    galleryName == 'old-old-ny' ||
    galleryName == 'dontttwice'
  ) {
    grid = false;
  }
  const results = await search({
    expression: `folder="photo-portfolio/personal/${galleryName}"`,
    max_results: 500,
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources);

  // we are passing the folder category to search for sub-folders
  const { folders } = await getFolders('photo-portfolio');

  return {
    props: { images, nextCursor: nextCursor || false, folders, grid },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { galleryName: 'street-studies' } },
      { params: { galleryName: 'old-old-ny' } },
      { params: { galleryName: 'dontttwice' } },
      { params: { galleryName: 'italy' } },
      { params: { galleryName: 'la' } },
      { params: { galleryName: 'spain' } },
      { params: { galleryName: 'morocco' } },
      { params: { galleryName: 'jordan' } },
      { params: { galleryName: 'hawaii' } },
      { params: { galleryName: 'berlin' } },
      { params: { galleryName: 'new-orleans' } },
      { params: { galleryName: 'miami' } },
      { params: { galleryName: 'chicago' } },
      { params: { galleryName: 'oaxaca' } },
    ],
    fallback: false,
  };
}
