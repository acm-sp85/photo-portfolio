import { useState, useEffect } from 'react';
import { search, getFolders } from '../lib/cloudinary';
import styles from '../styles/Home.module.scss';

export default function Home({ folders }) {
  return <div className={styles.container}></div>;
}

export async function getStaticProps() {
  const results = await search({
    expression: 'folder=""',
  });

  const { folders } = await getFolders('photo-portfolio');
  console.log(folders);
  return {
    props: { folders },
  };
}
