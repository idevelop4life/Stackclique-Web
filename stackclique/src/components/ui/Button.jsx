export default function Button({ children, onClick, disabled, type, bgWhite }) {
    return (
        <button
            className={` disabled:bg-darkGrey disabled:border-darkGrey hover:bg-primaryDark hover:text-white transition-all duration-200 ${
                bgWhite ? "bg-white text-primary" : "bg-primary text-white"
            } w-full py-[0.8125rem] rounded-[2rem] border border-primary`}
            onClick={onClick}
            disabled={disabled}
            type={type || "button"}
        >
            {children}
        </button>
    );
}
