import PagesCarousel from "../sections/PagesCarousel";

const Services = () => {
/**
 * Array of carousel images for displaying services.
 * @type {Array<Object>}
 * @property {string} src - The URL of the image.
 * @property {string} title - The title of the image.
 */
  const carouselImage = [
    {
      src: "https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678_1280.jpg",
      title: "Our Services",
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

export default Services;
