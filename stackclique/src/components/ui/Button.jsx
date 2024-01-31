import { cn } from "../../library/utils";
import "../../styles/css/app_root.css";

export default function Button({
    size,
    type,
    children,
    disabled,
    className = "btn",
    onClick,
    rounded,
    variant,
}) {
    const btnType = () => {
        switch (variant) {
        case 'light':
            return "btn-light";
        default:
            break;
    }}

    return (
        <button
            type={type}
            className={`${className} ${btnType()}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
