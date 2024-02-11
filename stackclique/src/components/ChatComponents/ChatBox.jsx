import {
    timeGrouping,
    getDateFromTimestamp,
    timestampGroup,
    getReply,
} from "../../utils/utils";
import ChatBubble from "./ChatBubble";
import styles from "../../styles/css/app.module.css";
import { useEffect, useRef } from "react";

function ChatBox({ data, setReply }) {
    const userId = 1;
    const msgBox = useRef(null);

    useEffect(() => {
        //  Scrool to the latest message
        const box = msgBox.current;
        box.scrollTop = box.scrollHeight;
    }, []);

    return (
        <section className={styles.chat_box} ref={msgBox}>
            <div className={styles.chat_shadow}></div>
            {timeGrouping(data).map((item, key) => {
                return (
                    <ChatGroup
                        key={key}
                        data={item}
                        allMsg={data}
                        userID={userId}
                        setReply={setReply}
                    />
                );
            })}
        </section>
    );
}

function Timestamp({ date }) {
    return (
        <div className={styles.timestamp_bubble}>{timestampGroup(date)}</div>
    );
}

function ChatGroup({ data, allMsg, userID, setReply }) {
    const objKey = data[0];
    return (
        <>
            <div className="mb-[2.5rem]">
                <Timestamp date={getDateFromTimestamp(objKey)} />
                {data[1].map((item, index) => {
                    // console.log("Bubble Item: ", getReply(item.id, allMsg))
                    return (
                        <ChatBubble
                            key={index}
                            type={userID === item?.user.id ? true : false}
                            text={item?.text}
                            timestamp={item?.timestamp}
                            profile={item?.user}
                            msgId={item.id}
                            reply={getReply(item?.reply, allMsg)}
                            allMsg={allMsg}
                            setReply={setReply}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ChatBox;
