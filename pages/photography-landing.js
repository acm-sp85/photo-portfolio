import { useState, useEffect } from 'react';
import React from 'react';
import ImageGallery from './components/ImageGallery';
import { search, mapImageResources, getFolders } from '../lib/cloudinary';
import { uuid } from 'uuidv4';
import Image from 'next/image';

export default function photographyLanding({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  folders,
}) {
  const [images, setImages] = useState(defaultImages);
  return (
    <div>
      {folders.map((folder) => {
        return <p>{folder.name}</p>;
      })}
      <ImageGallery images={images} />
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps() {
  const results = await search({
    expression: 'folder="photo-portfolio/chicago"',
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources);

  // console.log(results);

  // we are passing the folder category to search for sub-folders
  const { folders } = await getFolders('photo-portfolio');
  // console.log(folders);
  return {
    props: { images, nextCursor: nextCursor || false, folders },
  };
}
