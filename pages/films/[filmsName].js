import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';
import ImageGallery from '../components/ImageGallery';
import styles from '../../styles/Home.module.scss';

export default function Films({ text }) {
  let router = useRouter();
  let folder = router.query.filmsName;
  const videoLinks = {
    grain: 'https://www.youtube.com/watch?v=VraRuNJ6T5k',
    asiad: 'https://vimeo.com/447316206',
    assignments: 'https://vimeo.com/322354723',
  };

  return (
    <div>
      {folder && console.log(videoLinks[folder])}
      <h1 className={styles.centered}>{folder} COMING SOON</h1>
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
