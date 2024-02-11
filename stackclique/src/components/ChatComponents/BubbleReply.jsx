import { shortText } from "../../utils/utils";
import styles from "../../styles/css/app.module.css";

function BubbleReply({ profile, text }) {
    return (
        <div className={styles.chat_reply}>
            <h5>{profile?.name || "Unnamed"}</h5>
            <p>{shortText(text, 110)}</p>
        </div>
    );
}

export default BubbleReply;
