/**
 * Renders a carousel card with an image.
 *
 * @component
 * @param {Object} props - The properties for the CarouselCard component.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.srcset - The source set of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {string} props.title - The title of the image.
 * @returns {JSX.Element} The rendered CarouselCard component.
 */
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