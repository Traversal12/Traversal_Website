import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../assets/mentors/img1.jpg';
import img2 from '../assets/mentors/img2.jpeg';
import img3 from '../assets/mentors/img3.jpg';
import img4 from '../assets/mentors/img4.jpg';

import { Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className="h-screen">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={2.5} 
        spaceBetween={10} 
        className="w-[100%] h-[50%] "
      >
        <SwiperSlide>
          <img className="w-full h-full object-cover" src={img1} alt="Mentor 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full object-cover" src={img2} alt="Mentor 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full object-cover" src={img3} alt="Mentor 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-full object-cover" src={img4} alt="Mentor 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

