import PagesCarousel from "../sections/PagesCarousel";

const Services = () => {
  const carouselImage = [
    {
      src: "https://cdn.pixabay.com/photo/2013/02/21/19/12/lumber-84678_1280.jpg",
      title: "Our Services",
    },
  ];

  return (
    <div>
      <section className="pb-12 padding-t max-md:pt-12">
        <PagesCarousel imageInfo={carouselImage} />
      </section>
    </div>
  );
};

export default Services;
