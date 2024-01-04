/**
 * Button component that displays a customizable button with optional label and icon.
 *
 * @component
 * @param {Object} props - The properties for the Button component.
 * @param {string} props.label - The label text for the button.
 * @param {string} props.iconURL - The URL of the icon to display next to the label.
 * @param {string} props.backgroundColor - The background color of the button.
 * @param {string} props.textColor - The text color of the button.
 * @param {string} props.borderColor - The border color of the button.
 * @param {boolean} props.fullWidth - Determines if the button should take up the full width.
 * @returns {JSX.Element} - The rendered Button component.
 */
const Button = (props) => {
  const {
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  } = props;

  const buttonClasses = `flex justify-center items-center gap-2 px-7 py-4
    border font-montserrat text-lg leading-none 
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && 'w-full'}`;

  return (
    <button className={buttonClasses}>
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="Arrow Right Icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;