import styles from "../../styles/css/app.module.css";
import imgSample from "../../assets/pics/4.jpg";
import { getReply, timeOfDay } from "../../utils/utils";
import BubbleReply from "./BubbleReply";

function ChatBubble({
    type,
    text,
    timestamp,
    profile,
    reply,
    setReply,
    msgId,
    allMsg,
}) {
    const bubbleType = type ? "send" : "receive";
    return (
        <div className={`${styles.chat_bubble} ${type ? styles.mine : ""}`}>
            {bubbleType === "receive" ? (
                <span>
                    <img src={profile?.img || imgSample} alt={profile?.name} />
                </span>
            ) : (
                ""
            )}
            <div className={styles.chat_detail}>
                <div
                    className={styles.reply_btn}
                    onClick={() => {
                        setReply(reply || getReply(msgId, allMsg));
                    }}
                >
                    <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.3999 1.19995L4.9999 4.79995L8.5999 1.19995"
                            stroke="#020202"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                {bubbleType === "receive" ? (
                    <BubbleHeader name={profile?.name} time={timestamp} />
                ) : (
                    ""
                )}
                {reply ? (
                    <BubbleReply profile={reply?.user} text={reply?.text} />
                ) : (
                    ""
                )}
                <BubbleMsg text={text} />
                {bubbleType === "send" ? (
                    <span className={styles.timestamp}>
                        {timeOfDay(timestamp)}
                    </span>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

function BubbleHeader({ name, time }) {
    return (
        <div className={styles.chat_header}>
            <h2>{name || "Unnamed"}</h2>
            <span>{timeOfDay(time)} </span>
        </div>
    );
}

function BubbleMsg({ text }) {
    return <div className={styles.chat_text}>{text}</div>;
}

export default ChatBubble;
