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

// import { useState, useEffect } from 'react';
// import { search, getFolders, mapImageResources } from '../lib/cloudinary';
// import styles from '../styles/Home.module.scss';

// export default function Home({ images }) {
//   let background =
//     'https://res.cloudinary.com/acm-85/image/upload/v1675963304/photo-portfolio/landing/landing-6_gjlbw4.jpg';
//   let [backgroundImage, setBackgroundImage] = useState(background);
//   let [backgroundPool, setBackgroundPool] = useState([...images]);
//   let counter = 0;

//   const updateBackground = () => {
//     if (counter >= backgroundPool.length) counter = 0;
//     setBackgroundImage(backgroundPool[counter].image);
//     counter++;
//   };
//   useEffect(() => {
//     const interval = setInterval(() => updateBackground(), 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.container}>
//       <div
//         className={styles.with__transition}
//         style={{
//           backgroundColor: 'blue',
//           width: '100%',
//           height: '100%',
//           background: 'white',
//           // opacity: '0.5',
//           position: 'fixed',
//           backgroundImage: `url(
//             ${backgroundImage} )`,
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat',
//           zIndex: '-100',
//         }}
//       ></div>
//       ;
//     </div>
//   );
// }

// // via getStaticProps we are making our API call
// export async function getStaticProps(context) {
//   const results = await search({
//     expression: `folder="photo-portfolio/landing"`,
//   });

//   const { resources, next_cursor: nextCursor } = results;
//   const images = mapImageResources(resources);

//   return {
//     props: { images },
//   };
// }
