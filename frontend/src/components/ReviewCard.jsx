/**
 * Renders a review card component.
 *
 * @component
 * @param {string} imgURL - The URL of the customer's image.
 * @param {string} customerName - The name of the customer.
 * @param {number} rating - The rating given by the customer.
 * @param {string} feedback - The feedback given by the customer.
 * @returns {JSX.Element} The rendered review card component.
 */
import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img
            src={imgURL}
            alt="customer"
            className="rounded-full object-cover w-[120px] h-[120px]"
        />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img
                src={star}
                width={24}
                height={24}
                className="object-contain m-0"
            />
            <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard