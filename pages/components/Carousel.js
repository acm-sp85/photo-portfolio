import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function DemoCarousel({ photos }) {
  return (
    <Carousel showThumbs={false} >
      {photos.map((photo) => {
        return (
          <div>
            <img src={photo.image} />;
          </div>
        );
      })}
    </Carousel>
  );
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
