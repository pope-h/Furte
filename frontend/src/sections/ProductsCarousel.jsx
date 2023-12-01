// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Navigation } from 'swiper/modules';

const ProductsCarousel = () => {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        direction='vertical'
        navigation={true}
        modules={[Parallax, Navigation]}
        className="relative"
      >
        <SwiperSlide>
            <img
                src="https://cdn.pixabay.com/photo/2015/06/27/16/34/wall-823611_640.jpg"
                alt="img"
                style={{
                    maxWidth: '100%',
                    width: '100%',
                    objectFit: 'fill',
                    height: '400px',
                }}
                data-swiper-parallax="-23%"
            />
            <h1 className="text-8xl font-extrabold text-white-400 absolute inset-0 flex items-center justify-center" data-swiper-parallax="-100">Products</h1>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default ProductsCarousel