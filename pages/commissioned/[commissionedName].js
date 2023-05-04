import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';
import ImageGallery from '../components/ImageGallery';
import styles from '../../styles/Home.module.scss';
import ReactPlayer from 'react-player';

export default function Commissioned({ images, nextCursor, folders }) {
  let router = useRouter();
  let folder = router.query.commissionedName;

  return (
    <div className={styles.assignment__block}>
      <ImageGallery images={images} folder={folder} grid={true} />
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps(context) {
  const commissionedName = context.params.commissionedName;
  const results = await search({
    expression: `folder="photo-portfolio/commercial/${commissionedName}"`,
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
      { params: { commissionedName: 'chase-bank' } },
      { params: { commissionedName: 'vogue' } },
      { params: { commissionedName: 'loftie' } },
      { params: { commissionedName: 'telva' } },
      { params: { commissionedName: 'off-white' } },
      { params: { commissionedName: 'sylvain' } },
      { params: { commissionedName: 'pace' } },
      { params: { commissionedName: 'freepik' } },
      { params: { commissionedName: 'drjart' } },
      { params: { commissionedName: 'demelier' } },
      { params: { commissionedName: 'ismine' } },
      { params: { commissionedName: 'kionita' } },
      { params: { commissionedName: 'wok-bao' } },
      { params: { commissionedName: 'dazzler' } },
      { params: { commissionedName: 'stone-island' } },
      { params: { commissionedName: 'balmain' } },
      { params: { commissionedName: 'carolina-herrera' } },
      { params: { commissionedName: 'luxottica' } },
      { params: { commissionedName: 'uag' } },
      { params: { commissionedName: 'gift-of-time' } },
      { params: { commissionedName: 'church-st' } },
      { params: { commissionedName: 'blink' } },
      { params: { commissionedName: 'mrka' } },
      { params: { commissionedName: 'shipibo' } },
      { params: { commissionedName: 'hergueta' } },
      { params: { commissionedName: 'lonely-clay' } },
      { params: { commissionedName: 'coma-store' } },
      { params: { commissionedName: 'henry-julier' } },
      { params: { commissionedName: 'arizona' } },
      { params: { commissionedName: 'olea' } },
      { params: { commissionedName: 'perrier' } },
      { params: { commissionedName: 'sunday-times' } },
      { params: { commissionedName: 'usb' } },
      { params: { commissionedName: 'beto' } },
      { params: { commissionedName: 'airama' } },
      { params: { commissionedName: 'nuvolari' } },
      { params: { commissionedName: 'bullish' } },
    ],
    fallback: false,
  };
}
