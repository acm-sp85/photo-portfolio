import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';
import ImageGallery from '../components/ImageGallery';
import styles from '../../styles/Home.module.scss';
import ReactPlayer from 'react-player';

export default function Commissioned({ images, nextCursor, folders }) {
  let router = useRouter();
  let folder = router.query.commissioned;

  return (
    <div className={styles.assignment__block}>
      <ImageGallery images={images} folder={folder} grid={true} />
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps(context) {
  const commissioned = context.params.commissioned;
  const results = await search({
    expression: `folder="photo-portfolio/commercial/${commissioned}"`,
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
      { params: { commissioned: 'chase-bank' } },
      { params: { commissioned: 'vogue' } },
      { params: { commissioned: 'telva' } },
      { params: { commissioned: 'off-white' } },
      { params: { commissioned: 'sylvain' } },
      { params: { commissioned: 'pace' } },
      { params: { commissioned: 'demelier' } },
      { params: { commissioned: 'ismine' } },
      { params: { commissioned: 'kionita' } },
      { params: { commissioned: 'wok-bao' } },
      { params: { commissioned: 'dazzler' } },
      { params: { commissioned: 'stone-island' } },
      { params: { commissioned: 'balmain' } },
      { params: { commissioned: 'carolina-herrera' } },
      { params: { commissioned: 'luxottica' } },
      { params: { commissioned: 'uag' } },
      { params: { commissioned: 'gift-of-time' } },
      { params: { commissioned: 'church-st' } },
      { params: { commissioned: 'blink' } },
      { params: { commissioned: 'mrka' } },
      { params: { commissioned: 'shipibo' } },
      { params: { commissioned: 'hergueta' } },
      { params: { commissioned: 'lonely-clay' } },
      { params: { commissioned: 'coma-store' } },
      { params: { commissioned: 'henry-julier' } },
      { params: { commissioned: 'arizona' } },
      { params: { commissioned: 'olea' } },
      { params: { commissioned: 'perrier' } },
      { params: { commissioned: 'sunday-times' } },
      { params: { commissioned: 'usb' } },
      { params: { commissioned: 'beto' } },
      { params: { commissioned: 'airama' } },
      { params: { commissioned: 'nuvolari' } },
      { params: { commissioned: 'bullish' } },
    ],
    fallback: false,
  };
}
