import { useEffect, useState } from "react";
import styles from "../../styles/css/app.module.css";
import { ChatBox, ChatInput } from "../ChatComponents";
import {
    dateToTimestamp,
    getDateText,
    timestampGroup,
} from "../../utils/utils";
import { useNavigate } from "react-router-dom";

export default function MessageContainer({ msgModel, setMsgModel }) {
    const [getReply, setReply] = useState(null);

    // For testing purposes
    const person = {
        id: 1,
        name: "Unnamed Dev",
    };

    // Save user data here
    const [user, setUser] = useState(person);

    if (!user) return <NoUserAuthorization />;
    if (!msgModel) return <NoMessage />;

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

function NoMessage() {
    return (
        <div className={styles.notmessage}>
            <h3>Select a message to read it here</h3>
        </div>
    );
}
