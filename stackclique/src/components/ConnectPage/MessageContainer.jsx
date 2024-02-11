import { useEffect, useState } from "react";
import styles from "../../styles/css/app.module.css";
import { ChatBox, ChatInput } from "../ChatComponents";
import {
    dateToTimestamp,
    getDateText,
    timestampGroup,
} from "../../utils/utils";
import { useNavigate } from "react-router-dom";

export default function MessageContainer() {
    const [msgModel, setMsgModel] = useState([
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
                id: 2,
                name: "Agunwami",
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
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque ratione! Anu",
            timestamp: "2024-02-09T11:08:48.597Z",
        },
    ]);

    const [getReply, setReply] = useState(null);

    // For testing purposes
    const person = {
        id: 1,
        name: "Unnamed Dev",
    };

    // Save user data here
    const [user, setUser] = useState(person);

    if (!user) return <NoUserAuthorization />;

    return (
        <>
            <section className={styles.msg_container}>
                <ChatBox data={msgModel} setReply={setReply} user={user} />
                <ChatInput
                    reply={getReply}
                    setReply={setReply}
                    user={user}
                    currentMsg={msgModel} // Just for test purposes
                    setNewMesg={setMsgModel} // Just for test purposes
                />
            </section>
        </>
    );
}

function NoUserAuthorization() {
    const navigate = useNavigate();
    return (
        <div className={styles.notauthorized}>
            <h2>User Not Authorized.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                ad aspernatur at cum facilis voluptatum praesentium eaque
                repellendus distinctio odio omnis voluptas vel quasi asperiores
                earum, alias nulla harum laborum!
            </p>
            <button
                type="button"
                className="btn btn-rect"
                onClick={() => navigate("/login")}
            >
                Sign Up For Full Experience
            </button>
        </div>
    );
}
