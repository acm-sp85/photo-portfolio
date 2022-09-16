import { useState, useEffect } from 'react';
import React from 'react';
import ImageGallery from './components/ImageGallery';
import { search, mapImageResources, getFolders } from '../lib/cloudinary';
import { uuid } from 'uuidv4';
import Image from 'next/image';

export default function photography({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  folders,
}) {
  const [images, setImages] = useState(defaultImages);
  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
}

export async function getStaticProps() {
  const results = await search({
    expression: 'folder="photo-portfolio/chicago"',
  });

  const { resources, next_cursor: nextCursor } = results;
  const images = mapImageResources(resources);

  console.log(results);

  const { folders } = await getFolders();
  console.log(folders);
  return {
    props: { images, nextCursor: nextCursor || false, folders },
  };
}
