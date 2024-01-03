import PagesCarousel from "../sections/PagesCarousel";

const AboutUs = () => {
  const carouselImage = [
    {
      src: "https://cdn.pixabay.com/photo/2018/10/10/12/24/wood-fibre-boards-3737131_1280.jpg",
      title: "About Furte",
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

export default AboutUs;
