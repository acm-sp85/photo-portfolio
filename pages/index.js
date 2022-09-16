import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import NavBar from './components/NavBar';
import ImageGallery from './components/ImageGallery';
import { search, mapImageResources, getFolders } from '../lib/cloudinary';
import { uuid } from 'uuidv4';

export default function Home(
  {
    // images: defaultImages,
    // nextCursor: defaultNextCursor,
    // folders,
  }
) {
  // const [images, setImages] = useState(defaultImages);
  // const [nextCursor, setNextCursor] = useState(defaultNextCursor);
  // const [activeFolder, setActiveFolder] = useState('');

  // async function handleLoadMore(event) {
  //   event.preventDefault();
  //   const results = await fetch('/api/search', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       nextCursor,
  //       expression: `folder="${activeFolder}"`,
  //     }),
  //   }).then((r) => r.json());

  //   const { resources, next_cursor: updatedNextCursor } = results;
  //   const images = mapImageResources(resources);

  //   setImages((prev) => {
  //     return [...prev, ...images];
  //   });
  //   setNextCursor(updatedNextCursor);
  // }
  // function handleOnFolderClick(event) {
  //   const folderPath = event.target.dataset.folderPath;
  //   setActiveFolder(folderPath);
  //   setNextCursor(undefined);
  //   setImages([]);
  // }

  // useEffect(() => {
  //   (async function run() {
  //     const results = await fetch('/api/search', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         nextCursor,
  //         expression: `folder="${activeFolder}"`,
  //       }),
  //     }).then((r) => r.json());

  //     const { resources, next_cursor: updatedNextCursor } = results;
  //     const images = mapImageResources(resources);

  //     setImages((prev) => {
  //       return [...prev, ...images];
  //     });
  //   })();
  // }, [activeFolder]);

  return (
    <div className={styles.container}>
      {/* <ul onClick={handleOnFolderClick}>
        {folders.map((folder) => {
          return (
            <li key={uuid()}>
              <button data-folder-path={folder.path}>{folder.name}</button>
            </li>
          );
        })}
      </ul>
      <button onClick={handleLoadMore}>More</button>
      {images.map((image) => {
        return (
          <li key={uuid()}>
            <div>
              <Image
                width={image.width}
                height={image.height}
                src={image.image}
                alt={image.id}
              />
            </div>
          </li>
        );
      })} */}
    </div>
  );
}

// export async function getStaticProps() {
//   const results = await search({
//     expression: 'folder=""',
//   });

//   const { resources, next_cursor: nextCursor } = results;
//   const images = mapImageResources(resources);

//   console.log(results);

//   const { folders } = await getFolders();
//   console.log(folders);
//   return {
//     props: { images, nextCursor: nextCursor || false, folders },
//   };
// }
