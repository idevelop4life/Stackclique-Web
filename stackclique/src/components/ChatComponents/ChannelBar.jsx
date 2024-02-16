import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi"; 
import styles from "../../styles/css/app.module.css";

function ChannelBar({ channelList, curChannel, setChannel }) {
    return (
        <div className={styles.channel_body}>
            <h2 className="flex items-center gap-2 py-1 text-lg font-bold">
                All Channels{" "}
                <span>
                    <FiChevronDown aria-hidden="true" />
                </span>
            </h2>
            <div className="flex flex-col gap-6 mt-4 text-sm">
                {channelList
                    ?.filter((_, key) => key <= 8)
                    ?.map((item, key) => {
                        return (
                            <Link key={item?.id} onClick={(e) => {
                                e.preventDefault();
                                setChannel(key)
                            }}>
                                {item?.name}{" "}
                                {key === curChannel ? <span></span> : ""}
                            </Link>
                        );
                    })}
                {channelList.length >= 8 ? (
                    <Link className={styles.more}>
                        View more
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-[.5rem]"
                        >
                            <g clipPath="url(#clip0_363_2604)">
                                <path
                                    d="M0 10L0 14C0 19.5228 4.47715 24 10 24H14C19.5228 24 24 19.5228 24 14V10C24 4.47715 19.5228 0 14 0H10C4.47715 0 0 4.47715 0 10Z"
                                    fill="#7E0772"
                                />
                                <path
                                    d="M10.2002 15.6001L13.8002 12.0001L10.2002 8.4001"
                                    stroke="white"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_363_2604">
                                    <rect
                                        width="24"
                                        height="24"
                                        fill="white"
                                        transform="matrix(0 -1 1 0 0 24)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default ChannelBar;
