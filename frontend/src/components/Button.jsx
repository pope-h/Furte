const Button = (props) => {
  const {
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  } = props;

  /**
   * Generates the CSS classes for the Button component.
   *
   * @param {string} backgroundColor - The background color of the button.
   * @param {string} textColor - The text color of the button.
   * @param {string} borderColor - The border color of the button.
   * @param {boolean} fullWidth - Determines if the button should take up the full width.
   * @returns {string} - The generated CSS classes for the button.
   */
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