/**
 * Renders a carousel hero section with Swiper React components.
 *
 * @returns {JSX.Element} The rendered carousel hero section.
 */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { hero } from '../constants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselCard from '../components/CarouselCard';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { useNavigate } from 'react-router-dom';

export default function CarouselHero() {
  const navigate = useNavigate();

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        lazy="true"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={1000}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        className="relative group"
      >
        {hero.map((item) => (
          <SwiperSlide key={item.id}>
            <CarouselCard {...item} />
            <div className="absolute inset-0 flex flex-1 items-center justify-center">
              <div className="max-lg:hidden text-center text-white transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <h1 className="mt-10 font-palanquin text-8xl font-bold">
                  {item.title}
                </h1>
                <p className="hidden group-hover:block transition-opacity duration-300 ease-in-out font-montserrat text-lg leading-8 mt-6 mb-14 px-48">
                  {item.text}
                </p>
                <div
                  className="hidden group-hover:flex flex-col items-center mt-10 transition-opacity duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => navigate("/products")}
                >
                  <Button label="Shop Now" iconURL={arrowRight} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
