import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';
import ImageGallery from '../components/ImageGallery';
import styles from '../../styles/Home.module.scss';

export default function Films({ text }) {
  let router = useRouter();
  let folder = router.query.filmsName;

  return (
    <div>
      {/* <h1>{router.query.filmsName}</h1> */}
      <h1 className={styles.centered}>COMING SOON</h1>
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps(context) {
  return {
    props: { text: 'hello' },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { filmsName: 'grain' } },
      { params: { filmsName: 'asiad' } },
      { params: { filmsName: 'assignments' } },
    ],
    fallback: false,
  };
}
