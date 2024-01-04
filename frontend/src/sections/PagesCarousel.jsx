/**
 * Renders a carousel component using Swiper library.
 *
 * @component
 * @param {Object[]} imageInfo - An array of objects containing image information.
 * @param {string} imageInfo[].src - The source URL of the image.
 * @param {string} [imageInfo[].title] - The title of the image (optional).
 * @returns {JSX.Element} The rendered carousel component.
 */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Parallax, Navigation } from "swiper/modules";

const PagesCarousel = ({ imageInfo }) => {
  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        direction="vertical"
        navigation={true}
        modules={[Parallax, Navigation]}
        className="relative"
      >
        {imageInfo.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`{image.title} carousel image}`}
              style={{
                maxWidth: "100%",
                width: "100%",
                objectFit: "fill",
                height: "400px",
              }}
              data-swiper-parallax="-23%"
            />
            {image.title && (
              <h1
                className="text-8xl max-sm:text-4xl font-extrabold text-white-400 absolute inset-0 flex items-center justify-center"
                data-swiper-parallax="-100"
              >
                {image.title}
              </h1>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PagesCarousel;
