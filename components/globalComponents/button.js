

const Button = ({ title, bgColor, textColor }) => {
    return (
        <button
            type="button"
            className={`${textColor} ${bgColor} rounded-md px-8 w-48 py-3 text-center mr-2 mb-2`}
        >
            {title}
        </button>
    );
};
export default Button;
