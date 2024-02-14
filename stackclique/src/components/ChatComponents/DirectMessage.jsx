import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import MembersCard from "../ConnectPage/MembersCard";
import styles from "../../styles/css/app.module.css";
import imgSample from "../../assets/pics/4.jpg";
import { dateToTimestamp, shortText, timeOfDay } from "../../utils/utils";

function DirectMessage({
    messages,
    customStyles = {},
    customClass = "",
    type = "",
}) {
    console.log("Messages: ", messages);
    if (messages && type !== "notify") {
        return (
            <PreviewMessage
                msg={messages}
                customStyles={customStyles}
                customClass={customClass}
            />
        );
    } else if (!messages && type !== "notify") {
        return (
            <NoMessage customStyles={customStyles} customClass={customClass} />
        );
    }
    if (type === "notify") return <NotificationMessage />;
}

function PreviewMessage({ msg, customStyles, customClass }) {
    return (
        <div
            className={`${styles.channel_body} ${customClass}`}
            style={customStyles}
        >
            {msg?.map((item, index) => {
                const { user, text, timestamp } = item;

                return (
                    <Inbox
                        key={index}
                        profile={user}
                        text={text}
                        timestamp={timestamp}
                        msg={false}
                    />
                );
            })}
        </div>
    );
}

function Inbox({ profile, text, timestamp, msg }) {
    return (
        <div className={styles.msg_inbox}>
            <img src={imgSample} alt="" />
            <div className={styles.inbox_detail}>
                <h4>{profile?.name || "Unnamed Dev"}</h4>
                <p>{shortText(text || "Hope you’re Good", 60, "...")}</p>
            </div>
            <div className={styles.inbox_info}>
                <div className={styles.active}>
                    {timeOfDay(
                        dateToTimestamp(
                            timestamp || "2022-08-05T02:09:44.597Z",
                        ),
                    )}
                </div>
                {msg ? (
                    <span>{msg?.length || 1}</span>
                ) : (
                    <div>
                        <br />
                    </div>
                )}
            </div>
        </div>
    );
}

function NotificationMessage({ customStyles, customClass }) {
    return (
        <div
            className={`${styles.channel_body} ${customClass}`}
            style={customStyles}
        >
            <h2 className="flex items-center gap-2 py-1 mt-4 text-lg font-bold">
                Direct Messages
                <span>
                    <FiChevronDown aria-hidden="true" />
                </span>
            </h2>
            <div className="flex flex-col gap-6 mt-4">
                {Array.from({ length: 3 }, (_, index) => (
                    <MembersCard key={index} />
                ))}
            </div>
        </div>
    );
}

function NoMessage({ customStyles, customClass }) {
    return (
        <div
            className={`${styles.notmessage} ${customClass}`}
            style={customStyles}
        >
            <h3
                style={{
                    fontSize: 2 + "rem",
                    fontWeight: 400,
                }}
            >
                No Messages Yet
            </h3>
            <p
                style={{
                    marginTop: 0.5 + "rem",
                    color: "#7e0772",
                    fontWeight: 500,
                    cursor: "pointer",
                }}
            >
                Start a conversation
            </p>
        </div>
    );
}

export default DirectMessage;
