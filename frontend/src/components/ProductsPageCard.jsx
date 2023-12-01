const ProductsPageCard = (props) => {
  const srcSet = props.imageUrl
    ? `
        ${props.imageUrl} 1440w,
        ${props.imageUrl.replace("_1280.", "_640.")} 1024w,
        ${props.imageUrl.replace("_1280.", "_640.")} 768w,
        ${props.imageUrl.replace("_1280.", "_640.")} 425w,
        ${props.imageUrl.replace("_1280.", "_640.")} 375w
      `
    : '';

  return (
    <section className="w-full group">
      <div className="overflow-hidden w-full h-full">
        <div className="relative cursor-pointer w-full transition-transform duration-300 ease-in-out transform hover:scale-105">
          <img
            src={props.imageUrl}
            srcSet={srcSet}
            sizes="(min-width: 1440px) 306.47px,
                    (min-width: 1024px) 217.47px,
                    (min-width: 768px) 209.06px,
                    (min-width: 425px) 160.22px,
                    (min-width: 375px) 135.22px"
            alt={props.description}
            title={props.name}
            className="object-fill object-center w-full  h-[150px] lg:h-[180px] xl:h-[220px] 2xl:h-[250px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
      <div className="inset-0 flex flex-col items-center justify-center text-black cursor-pointer">
        <h2 className="text-xl max-lg:text-lg font-medium text-center leading-normal font-palanquin">
          {props.name}
        </h2>
        <h4 className="text-lg max-lg:text-sm text-center leading-normal text-slate-gray">{props.category}</h4>
        <p className="font-montserrat text-base leading-normal text-slate-gray">
          ${props.price}
        </p>
      </div>
    </section>
  );
};

export default ProductsPageCard;