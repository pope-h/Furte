import PagesCarousel from "../sections/PagesCarousel";

const AboutUs = () => {
/**
 * Represents the carousel image for the About Us page.
 * @typedef {Object} CarouselImage
 * @property {string} src - The source URL of the image.
 * @property {string} title - The title of the image.
 */

/**
 * An array of carousel images for the About Us page.
 * @type {CarouselImage[]}
 */
const carouselImage = [
    {
        src: "https://cdn.pixabay.com/photo/2018/10/10/12/24/wood-fibre-boards-3737131_1280.jpg",
        title: "About Furte",
    },
];

  return (
    <div className="max-sm:my-12 mt-2 mb-24 overflow-hidden">
      <section className="pb-12 padding-t max-md:pt-12">
        <PagesCarousel imageInfo={carouselImage} />
      </section>
    </div>
  );
};

export default AboutUs;
