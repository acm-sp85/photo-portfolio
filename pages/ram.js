import React from 'react';
import styles from '../styles/Home.module.scss';
import { search, mapImageResources, getFolders } from '../lib/cloudinary';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Ram({ images }) {
  let [memories, setMemories] = useState(images);
  let [counter, setCounter] = useState(
    Math.floor(Math.random() * (memories.length - 1))
  );
  useEffect(() => {
    if (memories.length == 0) {
      setMemories(images);
    }
    console.log('length: ' + memories.length);
  }, [memories]);
  return (
    <div className={styles.ram__block}>
      <div className={styles.ram__images}>
        {memories[counter] && (
          <Image
            src={memories[counter].image}
            width={memories[counter].width}
            height={memories[counter].height}
            alt={counter}
            onClick={() => {
              let aux = [...memories];
              aux.splice(counter, 1);
              setMemories(aux);
              setCounter(Math.floor(Math.random() * (memories.length - 1)));
            }}
          />
        )}
      </div>
      <p1 className={styles.ram__text}>
        Random Access Memories: a collection of personal photographs with no
        order. The way our brains work - click to randomize -
      </p1>
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps(context) {
  const results = await search({
    expression: `folder="photo-portfolio/random-access-memories"`,
    max_results: 500,
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources);

  // we are passing the folder category to search for sub-folders
  const { folders } = await getFolders('photo-portfolio');

  return {
    props: { images },
  };
}
