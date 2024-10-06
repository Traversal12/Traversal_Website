import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Cursor from './Cursor';
import CustomCursor from './CustomCursor';

export default function Carousel({ images, space, slides, rounded,setCursorVisible,effect}) {
  return (
    <div className="h-full ">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={slides}
        spaceBetween={space}
        className="w-[90%] h-[60%] relative cursor-pointer overflow-hidden mx-auto"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} 
          onMouseEnter={() => setCursorVisible(0)} 
          onMouseLeave={() => setCursorVisible(100)}  
          className={`overflow-hidden ${rounded}`}>
            <img src={image} alt='image' 
            className={`w-full h-full object-cover ${effect}`} />
          </SwiperSlide>
        ))}
        <CustomCursor  />
      </Swiper>
    </div>
  );
}
