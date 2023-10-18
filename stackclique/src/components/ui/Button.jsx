// export default function Button({ children, onClick, disabled, type, bgWhite }) {
//     return (
//         <button
//             className={` disabled:bg-darkGrey disabled:border-darkGrey hover:bg-primary-500Dark hover:text-white transition-all duration-200 ${
//                 bgWhite ? "bg-white text-primary-500" : "bg-primary-500 text-white"
//             } w-full py-[0.8125rem] rounded-[2rem] border border-primary-500`}
//             onClick={onClick}
//             disabled={disabled}
//             type={type || "button"}
//         >
//             {children}
//         </button>
//     );
// }

// export default function Button({
//     children,
//     onClick,
//     disabled,
//     type,
//     bgWhite,
//     width,
//     rounded,
// }) {
//     return (
//         <button
//             className={clsx(
//                 "bg-primary-500 text-white py-[0.8125rem] hover:bg-primary-500Dark transition-colors duration-150",
//                 {
//                     "bg-[#8E8C8C] border-darkGrey": disabled == true,
//                     "bg-white text-primary-500 border-primary-500": bgWhite === true,
//                     "w-[16.375rem]": width == "medium",
//                     "w-fit py-[0.5rem] px-[1rem]": width == "small",
//                     "rounded-[0.375rem]": rounded == "small",
//                     "rounded-[2rem]": rounded == "large",
//                 },
//             )}
//             type={type || "button"}
//             onClick={onClick}
//         >
//             {children}
//         </button>
//     );
// }

import { cn } from "../../library/utils";

export default function Button({
    size,
    type,
    children,
    disabled,
    className,
    onClick,
    rounded,
    variant,
}) {
    const normal =
        "bg-primary-500 font-bold text-white rounded-md hover:bg-primary-600  disabled:bg-primary-100 transition-colors duration-150 px-2 w-fit h-[3.5rem]";
    const defaultClasses = cn(normal, {
        " w-[5rem]": size === "small",
        " w-[12rem]": size === "medium",
        " w-full": size === "fullwidth",
        "rounded-lg": rounded === "md",
        "rounded-full": rounded === "lg",
        "bg-white text-primary-500 border-2 border-primary-500 hover:bg-primary-500 hover:text-white":
            variant === "outlined",
    });

    const combinedClasses = cn(defaultClasses, className);

    return (
        <button
            type={type}
            className={combinedClasses}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
