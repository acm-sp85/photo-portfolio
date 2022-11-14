import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';
import ImageGallery from '../components/ImageGallery';

export default function Gallery({ images, nextCursor, folders }) {
  let router = useRouter();
  let folder = router.query.slug;
  let [photosToDisplay, setPhotosToDisplay] = useState(images);

  {
    folder && console.log('the folder is: ' + folder);
  }

  return (
    <div>
      <h1>{router.query.slug}</h1>
      <ImageGallery images={images} />
    </div>
  );
}

// via getStaticProps we are making our API call
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const results = await search({
    expression: `folder="photo-portfolio/${slug}"`,
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
      { params: { slug: 'portraits' } },
      { params: { slug: 'street' } },
      { params: { slug: 'style' } },
    ],
    fallback: false,
  };
}
