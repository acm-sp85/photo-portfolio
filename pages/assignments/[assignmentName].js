import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';
import ImageGallery from '../components/ImageGallery';
import styles from '../../styles/Home.module.scss';
import ReactPlayer from 'react-player';

export default function Assignments({ images, nextCursor, folders }) {
  let router = useRouter();
  let folder = router.query.assignmentName;

  return (
    <div className={styles.assignment__block}>
      <ImageGallery images={images} folder={folder} grid={true} />
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps(context) {
  const assignmentName = context.params.assignmentName;
  const results = await search({
    expression: `folder="photo-portfolio/commercial/${assignmentName}"`,
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
      { params: { assignmentName: 'chase-bank' } },
      { params: { assignmentName: 'vogue' } },
      { params: { assignmentName: 'telva' } },
      { params: { assignmentName: 'off-white' } },
      { params: { assignmentName: 'sylvain' } },
      { params: { assignmentName: 'pace' } },
      { params: { assignmentName: 'demelier' } },
      { params: { assignmentName: 'ismine' } },
      { params: { assignmentName: 'kionita' } },
      { params: { assignmentName: 'wok-bao' } },
      { params: { assignmentName: 'dazzler' } },
      { params: { assignmentName: 'stone-island' } },
      { params: { assignmentName: 'balmain' } },
      { params: { assignmentName: 'carolina-herrera' } },
      { params: { assignmentName: 'luxottica' } },
      { params: { assignmentName: 'uag' } },
      { params: { assignmentName: 'gift-of-time' } },
      { params: { assignmentName: 'church-st' } },
      { params: { assignmentName: 'blink' } },
      { params: { assignmentName: 'mrka' } },
      { params: { assignmentName: 'shipibo' } },
      { params: { assignmentName: 'hergueta' } },
      { params: { assignmentName: 'lonely-clay' } },
      { params: { assignmentName: 'coma-store' } },
      { params: { assignmentName: 'henry-julier' } },
      { params: { assignmentName: 'arizona' } },
      { params: { assignmentName: 'olea' } },
      { params: { assignmentName: 'perrier' } },
      { params: { assignmentName: 'sunday-times' } },
      { params: { assignmentName: 'usb' } },
      { params: { assignmentName: 'beto' } },
      { params: { assignmentName: 'airama' } },
      { params: { assignmentName: 'nuvolari' } },
      { params: { assignmentName: 'bullish' } },
    ],
    fallback: false,
  };
}
