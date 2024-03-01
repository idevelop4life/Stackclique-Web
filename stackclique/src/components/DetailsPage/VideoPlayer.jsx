import { useState } from "react";
import "../../styles/css/app_root.css";
import thumb from "../../assets/pics/thumb.jpg";

function VideoPlayer() {
    const [idle, setIdle] = useState(true);
    const [play, setPlay] = useState(false);

    // document.addEventListener("keydown", ())
    return (
        <>
            <div className="video_container">
                <div className={`video_thumbnail ${!idle ? "hide" : ""}`}>
                    <img
                        src={thumb}
                        alt=""
                        title=""
                        width={1080}
                        height={720}
                    />
                </div>
                <div className="controls_container">
                    <div className="controls_row">
                        <div className="controls_left">
                            <button
                                type="button"
                                className="control_btn play-pause-btn"
                                onClick={() => {
                                    setIdle(false)
                                }}
                            >
                                {play ? (
                                    <svg
                                        width="14"
                                        height="18"
                                        viewBox="0 0 14 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.199219 0.599976V17.4L13.3992 8.99998L0.199219 0.599976Z"
                                            fill="white"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="14"
                                        height="18"
                                        viewBox="0 0 14 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.199219 0.599976V17.4L13.3992 8.99998L0.199219 0.599976Z"
                                            fill="white"
                                        />
                                    </svg>
                                )}
                            </button>
                            <button
                                type="button"
                                className="control_btn backward-btn"
                            >
                                <svg
                                    width="26"
                                    height="20"
                                    viewBox="0 0 26 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.8 18.4L1 9.99998L11.8 1.59998V18.4Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M24.9992 18.4L14.1992 9.99998L24.9992 1.59998V18.4Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="control_btn speed-btn"
                            >
                                <span className="speedometer">1x</span>
                            </button>
                            <button
                                type="button"
                                className="control_btn forward-btn"
                            >
                                <svg
                                    width="26"
                                    height="20"
                                    viewBox="0 0 26 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.1992 18.4L24.9992 9.99998L14.1992 1.59998V18.4Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1 18.4L11.8 9.99998L1 1.59998V18.4Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <span className="timestamp">0:5 / 8:02</span>
                        </div>

                        <div className="controls_right">
                            <button
                                type="button"
                                className="control_btn volume-btn"
                            >
                                <svg
                                    width="26"
                                    height="20"
                                    viewBox="0 0 26 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.8 1.59998L5.8 6.39998H1V13.6H5.8L11.8 18.4V1.59998Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M21.484 1.51599C23.7337 3.76632 24.9975 6.81802 24.9975 9.99999C24.9975 13.182 23.7337 16.2337 21.484 18.484M17.248 5.75199C18.3729 6.87716 19.0048 8.40301 19.0048 9.99399C19.0048 11.585 18.3729 13.1108 17.248 14.236"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="control_btn setting-btn"
                            >
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0004 18.6C16.9886 18.6 18.6004 16.9882 18.6004 15C18.6004 13.0118 16.9886 11.4 15.0004 11.4C13.0122 11.4 11.4004 13.0118 11.4004 15C11.4004 16.9882 13.0122 18.6 15.0004 18.6Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M23.8808 18.6C23.721 18.962 23.6734 19.3635 23.744 19.7528C23.8146 20.142 24.0001 20.5012 24.2768 20.784L24.3488 20.856C24.5719 21.0789 24.7489 21.3436 24.8697 21.635C24.9905 21.9263 25.0527 22.2387 25.0527 22.554C25.0527 22.8694 24.9905 23.1817 24.8697 23.4731C24.7489 23.7645 24.5719 24.0292 24.3488 24.252C24.1259 24.4752 23.8612 24.6522 23.5698 24.773C23.2785 24.8938 22.9662 24.9559 22.6508 24.9559C22.3354 24.9559 22.0231 24.8938 21.7317 24.773C21.4404 24.6522 21.1757 24.4752 20.9528 24.252L20.8808 24.18C20.598 23.9034 20.2388 23.7178 19.8495 23.6472C19.4602 23.5767 19.0587 23.6243 18.6968 23.784C18.3419 23.9362 18.0392 24.1887 17.8259 24.5107C17.6127 24.8326 17.4983 25.2099 17.4968 25.596V25.8C17.4968 26.4366 17.2439 27.047 16.7938 27.4971C16.3437 27.9472 15.7333 28.2 15.0968 28.2C14.4603 28.2 13.8498 27.9472 13.3997 27.4971C12.9496 27.047 12.6968 26.4366 12.6968 25.8V25.692C12.6875 25.2949 12.5589 24.9096 12.3278 24.5865C12.0967 24.2633 11.7737 24.0172 11.4008 23.88C11.0388 23.7203 10.6373 23.6727 10.2481 23.7432C9.8588 23.8138 9.4996 23.9994 9.21678 24.276L9.14478 24.348C8.92189 24.5712 8.65719 24.7482 8.36584 24.869C8.07448 24.9898 7.76218 25.0519 7.44678 25.0519C7.13138 25.0519 6.81908 24.9898 6.52772 24.869C6.23637 24.7482 5.97168 24.5712 5.74878 24.348C5.52564 24.1252 5.34862 23.8605 5.22784 23.5691C5.10706 23.2777 5.04489 22.9654 5.04489 22.65C5.04489 22.3347 5.10706 22.0223 5.22784 21.731C5.34862 21.4396 5.52564 21.1749 5.74878 20.952L5.82078 20.88C6.09743 20.5972 6.283 20.238 6.35359 19.8488C6.42417 19.4595 6.37652 19.058 6.21678 18.696C6.06467 18.3411 5.81209 18.0384 5.49014 17.8252C5.16819 17.612 4.79093 17.4976 4.40478 17.496H4.20078C3.56426 17.496 2.95381 17.2432 2.50372 16.7931C2.05364 16.343 1.80078 15.7326 1.80078 15.096C1.80078 14.4595 2.05364 13.8491 2.50372 13.399C2.95381 12.9489 3.56426 12.696 4.20078 12.696H4.30878C4.70597 12.6868 5.09119 12.5582 5.41434 12.3271C5.73749 12.0959 5.98364 11.7729 6.12078 11.4C6.28052 11.0381 6.32817 10.6366 6.25759 10.2473C6.187 9.85807 6.00143 9.49886 5.72478 9.21605L5.65278 9.14405C5.42964 8.92115 5.25262 8.65646 5.13184 8.36511C5.01106 8.07375 4.94889 7.76145 4.94889 7.44605C4.94889 7.13065 5.01106 6.81835 5.13184 6.52699C5.25262 6.23564 5.42964 5.97094 5.65278 5.74805C5.87568 5.52491 6.14037 5.34788 6.43172 5.22711C6.72308 5.10633 7.03538 5.04416 7.35078 5.04416C7.66618 5.04416 7.97848 5.10633 8.26984 5.22711C8.56119 5.34788 8.82589 5.52491 9.04878 5.74805L9.12078 5.82005C9.4036 6.09669 9.7628 6.28227 10.1521 6.35285C10.5413 6.42344 10.9428 6.37579 11.3048 6.21605H11.4008C11.7557 6.06393 12.0584 5.81136 12.2716 5.48941C12.4848 5.16746 12.5992 4.79019 12.6008 4.40405V4.20005C12.6008 3.56353 12.8536 2.95308 13.3037 2.50299C13.7538 2.05291 14.3643 1.80005 15.0008 1.80005C15.6373 1.80005 16.2477 2.05291 16.6978 2.50299C17.1479 2.95308 17.4008 3.56353 17.4008 4.20005V4.30805C17.4023 4.69419 17.5167 5.07146 17.7299 5.39341C17.9432 5.71536 18.2459 5.96793 18.6008 6.12005C18.9627 6.27979 19.3642 6.32744 19.7535 6.25685C20.1428 6.18627 20.502 6.00069 20.7848 5.72405L20.8568 5.65205C21.0797 5.42891 21.3444 5.25188 21.6357 5.13111C21.9271 5.01033 22.2394 4.94816 22.5548 4.94816C22.8702 4.94816 23.1825 5.01033 23.4738 5.13111C23.7652 5.25188 24.0299 5.42891 24.2528 5.65205C24.4759 5.87494 24.6529 6.13964 24.7737 6.43099C24.8945 6.72235 24.9567 7.03465 24.9567 7.35005C24.9567 7.66545 24.8945 7.97775 24.7737 8.26911C24.6529 8.56046 24.4759 8.82515 24.2528 9.04805L24.1808 9.12005C23.9041 9.40286 23.7186 9.76207 23.648 10.1513C23.5774 10.5406 23.625 10.9421 23.7848 11.304V11.4C23.9369 11.755 24.1895 12.0577 24.5114 12.2709C24.8334 12.4841 25.2106 12.5985 25.5968 12.6H25.8008C26.4373 12.6 27.0477 12.8529 27.4978 13.303C27.9479 13.7531 28.2008 14.3635 28.2008 15C28.2008 15.6366 27.9479 16.247 27.4978 16.6971C27.0477 17.1472 26.4373 17.4 25.8008 17.4H25.6928C25.3066 17.4016 24.9294 17.516 24.6074 17.7292C24.2855 17.9424 24.0329 18.2451 23.8808 18.6Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="control_btn caption-btn"
                            >
                                <svg
                                    width="22"
                                    height="20"
                                    viewBox="0 0 22 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19.3992 0.400024H2.59922C1.9627 0.400024 1.35225 0.652881 0.902162 1.10297C0.452075 1.55306 0.199219 2.1635 0.199219 2.80002V17.2C0.199219 17.8365 0.452075 18.447 0.902162 18.8971C1.35225 19.3472 1.9627 19.6 2.59922 19.6H19.3992C20.7192 19.6 21.7992 18.52 21.7992 17.2V2.80002C21.7992 1.48002 20.7192 0.400024 19.3992 0.400024ZM19.3992 17.2H2.59922V2.80002H19.3992V17.2ZM4.99922 13.6H8.59922C9.25922 13.6 9.79922 13.06 9.79922 12.4V11.2H7.99922V11.8H5.59922V8.20002H7.99922V8.80002H9.79922V7.60002C9.79922 6.94002 9.25922 6.40002 8.59922 6.40002H4.99922C4.33922 6.40002 3.79922 6.94002 3.79922 7.60002V12.4C3.79922 13.06 4.33922 13.6 4.99922 13.6ZM13.3992 13.6H16.9992C17.6592 13.6 18.1992 13.06 18.1992 12.4V11.2H16.3992V11.8H13.9992V8.20002H16.3992V8.80002H18.1992V7.60002C18.1992 6.94002 17.6592 6.40002 16.9992 6.40002H13.3992C12.7392 6.40002 12.1992 6.94002 12.1992 7.60002V12.4C12.1992 13.06 12.7392 13.6 13.3992 13.6Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="control_btn fullscreen-btn"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.5996 1.19995H22.7996V8.39995"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.39922 22.8H1.19922V15.6"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M22.7984 1.19995L14.3984 9.59995"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1.19922 22.7999L9.59922 14.3999"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="control_btn screen-btn"
                            >
                                <svg
                                    width="34"
                                    height="32"
                                    viewBox="0 0 34 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M27.5508 10.194L32.8257 15.2879L27.732 20.5626"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M6.99371 20.9242L1.71876 15.8303L6.8125 10.5555"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M32.826 15.2878L20.7292 15.4987"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1.71746 15.8302L13.8143 15.6193"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <video src=""></video>
            </div>
        </>
    );
}

export default VideoPlayer;
