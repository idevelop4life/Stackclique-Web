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
    

    return (
        <button
            type={type}
            className={className}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
