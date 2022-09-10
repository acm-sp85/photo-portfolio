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
