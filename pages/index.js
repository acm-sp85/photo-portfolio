import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import NavBar from './components/NavBar';
import ImageGallery from './components/ImageGallery';

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <ImageGallery />
    </div>
  );
}

export async function getStaticProps() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/folders/`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET
        ).toString('base64')}`,
      },
    }
  ).then((r) => r.json());

  // const { resources } = results;
  // const images = resources.map((resource) => {
  //   return {
  //     id: resource.asset_id,
  //     title: resource.public_id;

  //   };
  // });

  console.log(results);
  return {
    props: {},
  };
}
