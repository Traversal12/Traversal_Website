import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Carousel({ images, space, slides, rounded }) {

  return (
    <div className="h-full ">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={slides}
        spaceBetween={space}
        className="w-[100%] h-[70%] "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt='image' className={`w-full h-full object-cover ${rounded}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
