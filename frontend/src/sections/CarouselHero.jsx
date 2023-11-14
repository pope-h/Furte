// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { hero } from '../constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarouselHero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img 
                src={hero[0].src}
                srcSet={hero[0].srcset}
                alt={hero[0].alt}
                title={hero[0].title}
                // style={{ ...props.style, maxWidth: '100%', maxHeight: '100%' }}
                loading="lazy"
                className="object-cover rounded-2xl max-h-full w-full border-2 border-green-500"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src={hero[1].src}
                srcSet={hero[1].srcset}
                alt={hero[1].alt}
                title={hero[1].title}
                // style={{ ...props.style, maxWidth: '100%', maxHeight: '100%' }}
                loading="lazy"
                className="object-cover rounded-2xl max-h-full w-full border-2 border-green-500"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src={hero[2].src}
                srcSet={hero[2].srcset}
                alt={hero[2].alt}
                title={hero[2].title}
                // style={{ ...props.style, maxWidth: '100%', maxHeight: '100%' }}
                loading="lazy"
                className="object-cover rounded-2xl max-h-full w-full border-2 border-green-500"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src={hero[3].src}
                srcSet={hero[3].srcset}
                alt={hero[3].alt}
                title={hero[3].title}
                // style={{ ...props.style, maxWidth: '100%', maxHeight: '100%' }}
                loading="lazy"
                className="object-cover rounded-2xl max-h-full w-full border-2 border-green-500"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img 
                src={hero[4].src}
                srcSet={hero[4].srcset}
                alt={hero[4].alt}
                title={hero[4].title}
                // style={{ ...props.style, maxWidth: '100%', maxHeight: '100%' }}
                loading="lazy"
                className="object-cover rounded-2xl max-h-full w-full border-2 border-green-500"
            />
        </SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
