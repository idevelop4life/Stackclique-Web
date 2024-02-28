import { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
export default function TextField({
    type,
    startIcon,
    placeholder,
    label,
    onChange,
    onBlur,
    value,
    name,
    id,
    error,
}) {
    const [showPassword, setShowPassword] = useState(false);

    const handleInputType = (type) => {
        if (type != "password") return type;

        if (showPassword) return "text";
        if (!showPassword) return "password";
    };
    return (
        <div className="flex flex-col font-inter">
            <label
                htmlFor={id}
                className=" text-primary-500 text-[1rem] font-[600]"
            >
                {label}
            </label>
            <div
                className={`flex group gap-1 px-1 items-center bg-[#EFEFEF] relative h-[3rem] border border-darkGrey focus-within:border-primary-500 ${
                    error && "focus-within:border-red"
                } transition-colors duration-200 rounded-md pr-2 overflow-hidden`}
            >
                <span
                    className={`text-[2rem] group-focus-within:text-primary-500 ${
                        error && "group-focus-within:text-red-600"
                    }`}
                >
                    {startIcon}
                </span>
                
                <input
                    type={handleInputType(type)}
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    autoComplete="off"
                    className="h-full w-full outline-none text-[0.87rem] bg-[#EFEFEF]"
                />
                {type == "password" && (
                    <button
                        type="button"
                        className={`text-[1rem] group-focus-within:text-primary-500 ${
                            error && "group-focus-within:text-red-600"
                        }`}
                        onClick={() => setShowPassword((prev) => !prev)}
                    >
                        {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                    </button>
                )}
            </div>
            <p
                className={`text-red min-h-4 text-xs font-inter ${
                    error ? "visible" : "invisible"
                } `}
            >
                {error}
            </p>
        </div>
    );
}
