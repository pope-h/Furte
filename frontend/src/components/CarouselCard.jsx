const CarouselCard = (props) => {
  return (
    <img
        src={props.src}
        srcSet={props.srcset}
        alt={props.alt}
        title={props.title}
        style={{ 
          maxWidth: '100%',
          width: '100%',
          height: '500px',
          objectFit: 'cover',
        }}
        loading="lazy"
    />
  )
}

export default CarouselCard