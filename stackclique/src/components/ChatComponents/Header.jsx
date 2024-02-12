import styles from "../../styles/css/app.module.css";
import ChannelTab from "./ChannelTab";
import Search from "./Search";

function Header({ users, channelList, curChannel, updateChannel }) {
    return (
        <section className={styles.chat_header}>
            <Search type={"classic"} placeholder="Search messages" />
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
