import { shortText } from "../../utils/utils";
import styles from "../../styles/css/app.module.css";

function BubbleReply({ profile, text, userInfo }) {
    console.log("User Info: ", userInfo, "\n", "Reply Info: ", profile);
    return (
        <div className={styles.chat_reply}>
            <h5>{userInfo?.id === profile?.id ? "You" : profile?.name}</h5>
            <p>{shortText(text, 110)}</p>
        </div>
    );
}

export default BubbleReply;
