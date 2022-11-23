import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';
import ImageGallery from '../components/ImageGallery';
import styles from '../../styles/Home.module.scss';

export default function Gallery({ images, nextCursor, folders }) {
  let router = useRouter();
  let folder = router.query.galleryName;
  let [photosToDisplay, setPhotosToDisplay] = useState(images);

  return (
    <div>
      <h1 className={styles.sectionTitle}>{router.query.galleryName}</h1>
      <ImageGallery images={images} />
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps(context) {
  const galleryName = context.params.galleryName;
  const results = await search({
    expression: `folder="photo-portfolio/${galleryName}"`,
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources);

  // we are passing the folder category to search for sub-folders
  const { folders } = await getFolders('photo-portfolio');

  return {
    props: { images, nextCursor: nextCursor || false, folders },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { galleryName: 'portraits' } },
      { params: { galleryName: 'street' } },
      { params: { galleryName: 'style' } },
    ],
    fallback: false,
  };
}
