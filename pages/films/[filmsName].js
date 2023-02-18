import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';
import ImageGallery from '../components/ImageGallery';
import styles from '../../styles/Home.module.scss';
import ReactPlayer from 'react-player';

export default function Films({ text }) {
  let router = useRouter();
  let folder = router.query.filmsName;
  let [videoMuted, setVideoMuted] = useState(true);
  const videoLinks = {
    grain: 'https://vimeo.com/683031798',
    asiad: 'https://vimeo.com/447316206',
    commissioned: 'https://vimeo.com/322354723',
    tainted: 'https://vimeo.com/143644757/dd3de1d7c0',
  };

  return (
    <div>
      {/* <h1 className={styles.centered}>{folder} COMING SOON</h1> */}
      <ReactPlayer
        url={videoLinks[folder]}
        playing={true}
        loop={true}
        controls={true}
        muted={videoMuted}
        width="100%"
        height="100%"
        className={styles.video}
      />
      {/* <button
        className={styles.centered}
        onClick={() => setVideoMuted(!videoMuted)}
      >
        mute
      </button> */}
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
      { params: { filmsName: 'commissioned' } },
      { params: { filmsName: 'tainted' } },
    ],
    fallback: false,
  };
}
