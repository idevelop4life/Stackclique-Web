import { useState } from "react";
import { sumCourseTimestamp } from "../../utils/utils";

function CourseDropdown({
    index,
    header = "Content",
    state = false,
    type = true,
    children,
}) {
    const [isActive, setActive] = useState(state);

    const dropdown = type ? (
        <LargeDropdown
            isActive={isActive}
            setActive={setActive}
            header={header}
            content={children}
        />
    ) : (
        <SmallDropdown
            index={index}
            isActive={isActive}
            setActive={setActive}
            header={header}
            content={children}
        />
    );

    return dropdown;
}

function ToggleChevron({ active }) {
    return (
        <span>
            {active ? (
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
    );
}

function LargeDropdown({ isActive, setActive, content, header }) {
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
                    <ToggleChevron active={isActive} />
                </div>
                <ul className={`dropdown_content ${!isActive ? "hide" : ""}`}>
                    {content?.map((el, index) => {
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

function SmallDropdown({ isActive, setActive, content, header, index }) {
    return (
        <>
            <section className="dropdown mini">
                <div
                    className={`dropdown_header ${!isActive ? "open" : ""}`}
                    onClick={() => {
                        setActive(!isActive);
                    }}
                >
                    <h4 className="header_section_detail">
                        {`Section ${index + 1} : `}{" "}
                        <span>{` ${sumCourseTimestamp(content, true)} ${sumCourseTimestamp(content, true) > 1 ? "mins" : "min"}`}</span>
                    </h4>
                    <h5 className="header_section_title">
                        {header}
                        <ToggleChevron active={isActive} />
                    </h5>
                </div>
                <ul className={`dropdown_content ${!isActive ? "hide" : ""}`}>
                    {content?.map((el, index) => {
                        return (
                            <li key={index}>
                                <span>
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17.6006 12.2528L15.8646 11.2608L9.59579 14.84C9.41459 14.9438 9.20941 14.9984 9.00059 14.9984C8.79178 14.9984 8.58659 14.9438 8.40539 14.84L2.13819 11.2608L0.400593 12.2528C0.339413 12.2878 0.288568 12.3383 0.253206 12.3993C0.217843 12.4603 0.199219 12.5295 0.199219 12.6C0.199219 12.6705 0.217843 12.7397 0.253206 12.8007C0.288568 12.8617 0.339413 12.9122 0.400593 12.9472L8.80059 17.7472C8.86102 17.7817 8.9294 17.7999 8.99899 17.7999C9.06858 17.7999 9.13697 17.7817 9.19739 17.7472L17.5974 12.9472C17.6586 12.9122 17.7094 12.8617 17.7448 12.8007C17.7801 12.7397 17.7988 12.6705 17.7988 12.6C17.7988 12.5295 17.7801 12.4603 17.7448 12.3993C17.7094 12.3383 17.6586 12.2878 17.5974 12.2528H17.6006Z"
                                            fill="#020202"
                                        />
                                        <path
                                            d="M17.6006 8.65283L15.8646 7.66083L9.59579 11.24C9.41459 11.3438 9.20941 11.3984 9.00059 11.3984C8.79178 11.3984 8.58659 11.3438 8.40539 11.24L2.13819 7.66083L0.400593 8.65283C0.339413 8.68783 0.288568 8.73837 0.253206 8.79934C0.217843 8.86031 0.199219 8.92954 0.199219 9.00003C0.199219 9.07051 0.217843 9.13974 0.253206 9.20071C0.288568 9.26168 0.339413 9.31223 0.400593 9.34723L8.80059 14.1472C8.86102 14.1817 8.9294 14.1999 8.99899 14.1999C9.06858 14.1999 9.13697 14.1817 9.19739 14.1472L17.5974 9.34723C17.6586 9.31223 17.7094 9.26168 17.7448 9.20071C17.7801 9.13974 17.7988 9.07051 17.7988 9.00003C17.7988 8.92954 17.7801 8.86031 17.7448 8.79934C17.7094 8.73837 17.6586 8.68783 17.5974 8.65283H17.6006Z"
                                            fill="#020202"
                                        />
                                        <path
                                            d="M17.6013 5.0528L9.2013 0.252805C9.14087 0.218289 9.07249 0.200134 9.0029 0.200134C8.93331 0.200134 8.86493 0.218289 8.8045 0.252805L0.404499 5.0528C0.34332 5.0878 0.292474 5.13835 0.257112 5.19932C0.221749 5.26029 0.203125 5.32952 0.203125 5.4C0.203125 5.47049 0.221749 5.53972 0.257112 5.60069C0.292474 5.66166 0.34332 5.7122 0.404499 5.7472L8.8045 10.5472C8.86493 10.5817 8.93331 10.5999 9.0029 10.5999C9.07249 10.5999 9.14087 10.5817 9.2013 10.5472L17.6013 5.7472C17.6625 5.7122 17.7133 5.66166 17.7487 5.60069C17.784 5.53972 17.8027 5.47049 17.8027 5.4C17.8027 5.32952 17.784 5.26029 17.7487 5.19932C17.7133 5.13835 17.6625 5.0878 17.6013 5.0528Z"
                                            fill="#020202"
                                        />
                                    </svg>
                                </span>
                                {el.title}
                            </li>
                        );
                    })}
                </ul>
            </section>
        </>
    );
}

export default CourseDropdown;
