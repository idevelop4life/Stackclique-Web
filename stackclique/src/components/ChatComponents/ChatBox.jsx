import {
    timeGrouping,
    getDateFromTimestamp,
    randomTimestamp,
    timestampGroup,
    getReply,
} from "../../utils/utils";
import ChatBubble from "./ChatBubble";
import styles from "../../styles/css/app.module.css";

const msgModel = [
    {
        id: 1,
        user: {
            id: 1,
            name: "Unnamed Dev",
        },
        reply: null,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque ratione!",
        timestamp: "2022-08-05T02:09:44.597Z",
    },
    {
        id: 2,
        user: {
            id: 2,
            name: "Agunwami",
        },
        reply: 1,
        text: "Lorem ipsum dolor sit amet.",
        timestamp: "2022-08-08T15:09:44.597Z",
    },
    {
        id: 3,
        user: {
            id: 1,
            name: "Unnamed Dev",
        },
        reply: null,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        timestamp: "2022-08-11T07:09:44.597Z",
    },

    {
        id: 4,
        user: {
            id: 1,
            name: "Unnamed Dev",
        },
        reply: null,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque ratione!",
        timestamp: "2024-01-30T10:09:44.597Z",
    },

    {
        id: 5,
        user: {
            id: 1,
            name: "Unnamed Dev",
        },
        reply: null,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque ratione!",
        timestamp: "2024-02-09T10:08:48.597Z",
    },
];

// console.log(msgModel);

function ChatBox() {
    const userId = 1;
    // console.log(msgModel)
    return (
        <>
            {timeGrouping(msgModel)
                .map((item, key) => {
                    return (
                        <ChatGroup
                            key={key}
                            data={item}
                            allMsg={msgModel}
                            userID={userId}
                        />
                    );
                })}
        </>
    );
}

function Timestamp({ date }) {
    return (
        <div className={styles.timestamp_bubble}>{timestampGroup(date)}</div>
    );
}

function ChatGroup({ data, allMsg, userID }) {
    const objKey = data[0];
    return (
        <>
            <div className="mb-[2.5rem]">
                <Timestamp date={getDateFromTimestamp(objKey)} />
                {data[1].map((item, index) => {
                    return (
                        <ChatBubble
                            key={index}
                            type={userID === item?.user.id ? true : false}
                            text={item?.text}
                            timestamp={item?.timestamp}
                            profile={item?.user}
                            reply={getReply(item?.reply, allMsg)}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ChatBox;
