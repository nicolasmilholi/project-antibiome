

const Button = ({ title, bgColor, textColor }) => {
    return (
        <button
            type="button"
            className={`${textColor} ${bgColor} rounded-lg px-8 w-80 sm:w-48 py-3 text-center mr-2 mb-2`}
        >
            {title}
        </button>
    );
};
export default Button;
