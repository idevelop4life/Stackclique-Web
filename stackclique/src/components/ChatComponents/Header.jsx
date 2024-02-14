import styles from "../../styles/css/app.module.css";
import ChannelTab from "./ChannelTab";
import Search from "./Search";

function Header({ users, channelList, curChannel, updateChannel, children }) {
    return (
        <section className={styles.chat_header}>
            {children}

            <ChannelTab
                users={users}
                channelList={channelList}
                curChannel={curChannel}
                updateChannel={updateChannel}
            />
        </section>
    );
}

export default Header;
