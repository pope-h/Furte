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
      <section className="pb-12 mt-24 max-md:pt-12">
        <PagesCarousel imageInfo={carouselImage} />
      </section>
      <section className="mx-48 max-lg:mx-20 py-16 max-lg:py-12 font-thin text-xl flex flex-col gap-6 flex-wrap text-gray-500 leading-relaxed">
        <p>
          <strong>Furte</strong> marks a significant milestone in my journey as
          a Software Engineer, serving as my inaugural personal project
          following the completion of the Software Engineering Programme with
          ALX. This e-commerce website is designed to showcase and advertise
          furniture, drawing inspiration from the renowned Vitra brand.
        </p>
        <p>
          Embarking on this solo project presented its fair share of challenges
          and triumphs. There were days filled with discouragement and moments
          of wavering motivation. I extend heartfelt gratitude to friends,
          especially <strong>Mary Apeh</strong>, whose unwavering support and
          encouragement kept me steadfast on this challenging yet rewarding
          path. Having go-to guys like{" "}
          <strong>Henry Oseh, Godwin Nwabuma, Osaze, Joy Nfua</strong> just to name a few, can be said to
          be a secret sauce as these guys were always there to hear all my
          jargons and frustrations. Another mention is{" "}
          <strong>David Edema</strong> who advised me on the first 3 to 4 steps
          needed to achieve the project before he got engulfed with work. A
          multitude of YouTube tutors played a pivotal role in demystifying
          intricate features, accelerating my comprehension. Special
          acknowledgment goes to educators such as{" "}
          <em>
            Dave Gray, JavaScript Mastery, LetsCode, PedroTech, Frontend Dev
          </em>
          , and countless others. <em>Angela Yu</em> approachable introduction
          to React significantly eased my journey into the world of React
          development.{" "}
        </p>
        <p>
          I express deep appreciation to <strong>ALX</strong> for providing the
          robust foundation that fueled my transition into a Software Engineer.
          Despite my background in Mechanical Engineering, this journey was far
          from easy. As of the present, I have achieved a significant milestone
          by successfully passing and gaining admission to{" "}
          <strong>WEB3BRIDGE</strong> for specialized training in WEB3 and
          Blockchain development—an aspiration turned reality. For any inquiries
          or further communication, please feel free to reach out to me via
          email at <em>hamatthan@gmail.com</em> or via mobile on{" "}
          <em>+234 7086681344</em>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
