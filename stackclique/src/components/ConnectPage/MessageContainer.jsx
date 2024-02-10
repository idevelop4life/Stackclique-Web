import styles from "../../styles/css/app.module.css";
import { ChatBox, ChatInput } from "../ChatComponents";

export default function MessageContainer() {
    return (
        <>
            <section className={styles.msg_container}>
               <ChatBox />
               {/* <ChatInput /> */}
            </section>
        </>
    );
}
