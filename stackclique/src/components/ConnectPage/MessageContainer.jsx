import { useState } from "react";
import styles from "../../styles/css/app.module.css";
import { ChatBox, ChatInput } from "../ChatComponents";

export default function MessageContainer() {
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
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias.",
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
            timestamp: "2024-01-30T10:08:48.597Z",
        },
    ];

    const [getReply, setReply] = useState(null);
    return (
        <>
            <section className={styles.msg_container}>
                <ChatBox data={msgModel} setReply={setReply} />
                <ChatInput reply={getReply} setReply={setReply} />
            </section>
        </>
    );
}
