import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { search, mapImageResources, getFolders } from '../../lib/cloudinary';

export default function Gallery({ images, nextCursor, folders }) {
  const router = useRouter();
  const folder = router.query.slug;
  const [routi, setRouti] = useState('chicago');

  {
    folder && console.log('the folder is: ' + folder);
  }

  useEffect(() => {});

  return (
    <div>
      <p>Gallery</p>
      <p>{router.query.slug}</p>
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
    paths: [{ params: { slug: 'chicago' } }, { params: { slug: 'off-white' } }],
    fallback: false,
  };
}
