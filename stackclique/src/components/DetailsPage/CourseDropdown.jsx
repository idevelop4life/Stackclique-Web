import { useState } from "react";

function CourseDropdown({ header = "Content", state=false, children }) {
    const [isActive, setActive] = useState(state);

    return (
        <>
            <div className="dropdown">
                <div
                    className={`dropdown_header ${!isActive ? "open" : ""}`}
                    onClick={() => {
                        setActive(!isActive);
                    }}
                >
                    {header}
                    <span>
                        {true ? (
                            <svg
                                width="18"
                                height="10"
                                viewBox="0 0 18 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.7998 1.3999L8.9998 8.5999L16.1998 1.3999"
                                    stroke="#020202"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="18"
                                height="10"
                                viewBox="0 0 18 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.2002 8.6001L9.0002 1.4001L1.8002 8.6001"
                                    stroke="#020202"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </span>
                </div>
                <ul className={`dropdown_content ${!isActive ? "hide" : ""}`}>
                    {children?.map((el, index) => {
                        return (
                            <li key={index}>
                                <span>
                                    <svg
                                        width="48"
                                        height="48"
                                        viewBox="0 0 48 48"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_537_1401)">
                                            <path
                                                d="M28 0H20C8.9543 0 0 8.9543 0 20V28C0 39.0457 8.9543 48 20 48H28C39.0457 48 48 39.0457 48 28V20C48 8.9543 39.0457 0 28 0Z"
                                                fill="#7E0772"
                                            />
                                            <path
                                                d="M20.3998 18V27.6L28.7998 22.8L20.3998 18ZM34.7998 13.2H13.1998C11.8798 13.2 10.7998 14.28 10.7998 15.6V30C10.7998 31.32 11.8798 32.4 13.1998 32.4H19.1998V34.8H28.7998V32.4H34.7998C36.1198 32.4 37.1998 31.32 37.1998 30V15.6C37.1998 14.28 36.1198 13.2 34.7998 13.2ZM34.7998 30H13.1998V15.6H34.7998V30Z"
                                                fill="white"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_537_1401">
                                                <rect
                                                    width="48"
                                                    height="48"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                {el.title}
                                <span className="timestamp">
                                    {el.timestamp}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default CourseDropdown;
