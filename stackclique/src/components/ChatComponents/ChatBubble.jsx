import styles from "../../styles/css/app.module.css";
import imgSample from "../../assets/pics/4.jpg";
import { shortText, timeOfDay } from "../../utils/utils";

function ChatBubble({ type, text, timestamp, profile, reply }) {
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

function BubbleReply({ profile, text }) {
    return (
        <div className={styles.chat_reply}>
            <h5>{profile?.name}</h5>
            <p>{shortText(text, 110)}</p>
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
