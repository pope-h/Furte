const ProductCard = (props) => {
    return (
        <section className="w-full h-full group">
            <div className="overflow-hidden w-full h-[75%]">
                <div className="relative cursor-pointer w-[100%] h-[100%] transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <img
                    src={props.src}
                    srcSet={`
                        ${props.src} 1440w,
                        ${props.src.replace("_1280.", "_640.")} 1024w,
                        ${props.src.replace("_1280.", "_640.")} 768w,
                        ${props.src.replace("_1280.", "_640.")} 425w,
                        ${props.src.replace("_1280.", "_640.")} 375w
                    `}
                    sizes="(min-width: 1440px) 672px,
                            (min-width: 1024px) 494px,
                            (min-width: 768px) 356px,
                            (min-width: 425px) 386px,
                            335px"
                    alt={props.alt}
                    title={props.title}
                    className="object-fill object-center w-full h-full"
                    loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
            </div>
            <div className="inset-0 flex flex-col items-center justify-center text-black cursor-pointer">
                <h2 className="text-2xl leading-normal font-palanquin  group-hover:text-coral-red transition-colors">{props.title}</h2>
                <p className="font-montserrat text-xl leading-normal text-slate-gray  group-hover:text-coral-red transition-colors">Furte</p>
            </div>
        </section>
    );
  };
  
  export default ProductCard;
  