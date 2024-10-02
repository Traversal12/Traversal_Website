import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Carousel({ images, space, slides, rounded }) {
  // Log the props to see what's being passed
  console.log('Carousel Images:', images);
  
  if (!images || images.length === 0) {
    return <div>No images available</div>; // Handle case with no images
  }

  return (
    <div className="h-screen">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={slides}
        spaceBetween={space}
        className="w-[100%] h-[50%]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Mentor ${index + 1}`} className={`w-full h-full object-cover ${rounded}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
