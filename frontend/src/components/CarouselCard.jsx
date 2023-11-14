const CarouselCard = (props) => {
  return (
    <img
        src={props.src}
        srcSet={props.srcset}
        alt={props.alt}
        title={props.title}
        // style={{ ...props.style, maxWidth: '100%', maxHeight: '100%' }}
        loading="lazy"
        className="object-cover rounded-2xl max-h-full w-full border-2 border-green-500"
    />
  )
}

export default CarouselCard