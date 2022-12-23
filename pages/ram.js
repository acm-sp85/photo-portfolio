import React from 'react';
import styles from '../styles/Home.module.scss';
import { search, mapImageResources, getFolders } from '../lib/cloudinary';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ram({ images }) {
  // let counter = Math.floor(Math.random() * images.length);
  let [memories, setMemories] = useState(images);
  let initialCounter = 0;
  useEffect(() => {}, [memories]);
  return (
    <div className={styles.centered}>
      <h1 style={{ marginLeft: '40px' }}>Random Access Memories</h1>
      {memories.length > 0 && (
        <Image
          width={memories[initialCounter].width}
          height={memories[initialCounter].height}
          src={memories[initialCounter].image}
          alt={initialCounter} //adding a counter to be know which image we clicked
          onClick={() => {
            let aux = [...memories];
            aux.splice(initialCounter, 1);
            console.log(memories);
            initialCounter = Math.floor(Math.random() * memories.length);
            setMemories(aux);
          }}
        />
      )}
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps(context) {
  const results = await search({
    expression: `folder="photo-portfolio/random-access-memories"`,
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources);

  // we are passing the folder category to search for sub-folders
  const { folders } = await getFolders('photo-portfolio');

  return {
    props: { images },
  };
}
