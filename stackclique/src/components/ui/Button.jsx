import clsx from "clsx";

// export default function Button({ children, onClick, disabled, type, bgWhite }) {
//     return (
//         <button
//             className={` disabled:bg-darkGrey disabled:border-darkGrey hover:bg-primaryDark hover:text-white transition-all duration-200 ${
//                 bgWhite ? "bg-white text-primary" : "bg-primary text-white"
//             } w-full py-[0.8125rem] rounded-[2rem] border border-primary`}
//             onClick={onClick}
//             disabled={disabled}
//             type={type || "button"}
//         >
//             {children}
//         </button>
//     );
// }

export default function Button({
    children,
    onClick,
    disabled,
    type,
    bgWhite,
    width,
    rounded,
}) {
    return (
        <button
            className={clsx(
                "bg-primary text-white py-[0.8125rem] hover:bg-primaryDark transition-colors",
                {
                    "disabled:bg-darkGrey disabled:border-darkGrey":
                        disabled === true,
                    "bg-white text-primary border-primary": bgWhite === true,
                    "w-[16.375rem]": width == "medium",
                    "w-fit py-[0.5rem] px-[1rem]": width == "small",
                    "rounded-[0.375rem]": rounded == "small",
                    "rounded-[2rem]": rounded == "large",
                },
            )}
            type={type || "button"}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
