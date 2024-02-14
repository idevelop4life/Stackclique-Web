import { Link, useOutletContext } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import MembersCard from "../ConnectPage/MembersCard";
import styles from "../../styles/css/app.module.css";
import imgSample from "../../assets/pics/4.jpg";
import {
    dateToTimestamp,
    shortText,
    sortByTime,
    timeOfDay,
} from "../../utils/utils";
import { userAccounts } from "../../utils/messageSchema";

function DirectMessage({
    messages,
    customStyles = {},
    customClass = "",
    type = "",
    setMessage,
}) {
    if (messages && type !== "notify" && type === "preview") {
        return (
            <PreviewMessage
                msg={messages}
                customStyles={customStyles}
                customClass={customClass}
                setMessage={setMessage}
            />
        );
    } else if (!messages && type !== "notify") {
        return (
            <NoMessage customStyles={customStyles} customClass={customClass} />
        );
    }
    if (type === "notify") return <NotificationMessage />;
}

function PreviewMessage({ msg, customStyles, customClass, setMessage }) {
    const [person] = useOutletContext();
    return (
        <div
            className={`${styles.channel_body} ${customClass}`}
            style={customStyles}
        >
            {msg?.map((item, index) => {
                console.log("Item: ", item.data);
                const recentItem = sortByTime(item.data)[item.data.length - 1];
                const dataItem = sortByTime(item.data).filter((item) => {
                    return !item.seen.includes(person.id);
                });
                const participants = item.participants.filter((el) => {
                    return el !== person.id;
                });
                const profile = userAccounts.filter((el) => {
                    return el.id === participants.at(0);
                })[0];
                return (
                    <Inbox
                        key={index}
                        profile={profile}
                        text={recentItem.text}
                        timestamp={recentItem.timestamp}
                        msg={dataItem}
                        sender={recentItem.user.id === person.id ? true : false}
                        click={() => {
                            setMessage(item.data);
                        }}
                    />
                );
            })}
        </div>
    );
}

function Inbox({ profile, text, timestamp, msg, sender, click }) {
    return (
        <div className={styles.msg_inbox} onClick={click}>
            <img src={imgSample} alt="" />
            <div className={styles.inbox_detail}>
                <h4>{profile?.name || "Unnamed Dev"}</h4>
                <p className="flex items-center">
                    {sender ? (
                        <span className="mr-[0.5rem]">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <rect
                                    width="24"
                                    height="24"
                                    fill="url(#pattern0)"
                                />
                                <defs>
                                    <pattern
                                        id="pattern0"
                                        patternContentUnits="objectBoundingBox"
                                        width="1"
                                        height="1"
                                    >
                                        <use
                                            xlinkHref="#image0_633_3078"
                                            transform="scale(0.02)"
                                        />
                                    </pattern>
                                    <image
                                        id="image0_633_3078"
                                        width="50"
                                        height="50"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB5ElEQVR4nO2XW0rDQBSGR8VHr6U9U1+84DJEdA8uQAXdhhvwglDSmbbgu49KxSWIt5Y2c9IKbkBdgPoSmTSCD5pMdJgGOd9TCR/l/JnkzwxjBEEQBEHkj+PZh0nJ8UoC3tt0nXLKwjEJ2JQcQwnqLmThiKnL8oQEdRAP9lIv+su2XKfUINiMBuP4LiFYt+U6RZb9FQnqVQ8nysGuLdcpVQgWBKin+DHZt+U6pVEIJiRXnejugrrUL7AN1yl7LByVXJ0NBkOUM49TNlznCFCHpq0jMrhOoYbKC/+poboZGqqby4YSXJ2bNpQwdJ1DDZUXaA/1GySoG8mxXSn6nFkiOrkBqkF1YjOpdbK4iegQcVcHNsLoQQTgRdQ6HH09qA03FQ/aJf0ncWf3G4Vgjv0BCeoowynP2HUaRoC/ZXpyy+I6DaMbSgC+mZ7yTF2nYWrQWzTdF2VxnYbJ9R7KMwwTtY7hviiLaxVdxbqSk6r5S+s8e6X+kmS341Xub5zMt6bTXOaSSkKYWhl34rv7Jrha1dd0iEETqa5e1STXOZVvwlQhWItqc3Bt+9PVK/H5Duivdb3UgZ/cPITp6Q9Y/Psg6f1Kc4eC93XAlNbJ4g5vZTi2BeB12r5IuwKwZeISBEEQBMHs8AFTfdyrXGHygAAAAABJRU5ErkJggg=="
                                    />
                                </defs>
                            </svg>
                        </span>
                    ) : (
                        ""
                    )}
                    {shortText(
                        text || "Hope you’re Good",
                        sender ? 32 : 48,
                        "...",
                    )}
                </p>
            </div>
            <div className={styles.inbox_info}>
                <div className={msg.length >= 1 ? styles.active : ""}>
                    {timeOfDay(
                        dateToTimestamp(
                            timestamp || "2022-08-05T02:09:44.597Z",
                        ),
                    )}
                </div>
                {msg.length >= 1 ? (
                    <span>{msg?.length}</span>
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
