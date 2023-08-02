export default function Button({ children, onClick, disabled, type }) {
    return (
        <button
            className={` disabled:bg-darkGrey hover:bg-primaryDark transition-all duration-200 bg-primary w-full text-white py-[0.8125rem] px-[11.9375rem] rounded-[2rem]`}
            onClick={onClick}
            disabled={disabled}
            type={type || "button"}
        >
            {children}
        </button>
    );
}
