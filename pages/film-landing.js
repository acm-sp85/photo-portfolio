import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';
import { stagger } from '../animationConstants';
import VideoCard from './components/VideoCard';

export default function FilmsLanding() {
  const videos = [
    {
      defaultThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1683659081/photo-portfolio/videos/thumbnails/GRAIN_thumbnail_bpda2w.png',
      hoverThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png',
      videoUrl: 'https://vimeo.com/683031798',
    },
    {
      defaultThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1683661289/photo-portfolio/videos/thumbnails/A_Song_in_a_Day_Thumbnail_sxsvd8.png',
      hoverThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png',
      videoUrl: 'https://vimeo.com/447316206',
    },
    {
      defaultThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1683748963/photo-portfolio/videos/thumbnails/Every_Sunday_kocimg.png',
      hoverThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png',
      videoUrl: 'https://vimeo.com/825612663/ad7fc7f576',
    },
    {
      defaultThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1683661407/photo-portfolio/videos/thumbnails/Tainted_Love_rb14m5.png',
      hoverThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png',
      videoUrl: 'https://vimeo.com/143644757/dd3de1d7c0',
    },
    {
      defaultThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1683747055/photo-portfolio/videos/thumbnails/dermaclear_xnyoqb.png',
      hoverThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png',
      videoUrl: 'https://vimeo.com/322354723/3dae2c5655',
    },
    {
      defaultThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1683750273/photo-portfolio/videos/thumbnails/omar_re3bgv.png',
      hoverThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png',
      videoUrl: 'https://www.youtube.com/watch?v=3_ZnGxmfBKY&t=8s',
    },
    {
      defaultThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1683749266/photo-portfolio/videos/thumbnails/erin_wasson_nuiytd.png',
      hoverThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png',
      videoUrl: 'https://vimeo.com/160776025/a7041fcf20',
    },
    {
      defaultThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1683662032/photo-portfolio/videos/thumbnails/Critical_Nonsense_b8kkpj.png',
      hoverThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png',
      videoUrl: 'https://www.youtube.com/watch?v=M0h8pcdo7Xw&t=4s',
    },
    {
      defaultThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1683747056/photo-portfolio/videos/thumbnails/mich_kogan_cghhfx.png',
      hoverThumbnail:
        'https://res.cloudinary.com/acm-85/image/upload/v1674301559/photo-portfolio/commercial/hero-images/Screen_Shot_2023-01-21_at_6.45.46_AM_rkdw6d.png',
      videoUrl: 'https://vimeo.com/250292506/8bcf72a50c',
    },
  ];

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <motion.div variants={stagger} className={styles.video__landing}>
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            defaultThumbnail={video.defaultThumbnail}
            hoverThumbnail={video.hoverThumbnail}
            videoUrl={video.videoUrl}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}


