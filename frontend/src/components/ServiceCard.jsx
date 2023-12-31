/**
 * Renders a service card component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.imgURL - The URL of the image.
 * @param {string} props.label - The label of the service.
 * @param {string} props.subtext - The subtext of the service.
 * @returns {JSX.Element} The rendered service card component.
 */
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-8 max-md:py-4">
        <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
            <img
                src={imgURL}
                alt={label}
                width={24}
                height={24}
            />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard