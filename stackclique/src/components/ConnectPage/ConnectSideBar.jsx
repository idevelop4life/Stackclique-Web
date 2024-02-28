import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import MembersCard from "./MembersCard";
import styles from "../../styles/css/app.module.css";

export default function ConnectSideBar({
    customStyle = {},
    customClass = "",
    children,
    showSidebar,
}) {
    const isHidden = !showSidebar ? `${styles.hide}`: "";
    return (
        <aside
            className={`${styles.channel_sidebar} ${customClass} ${isHidden}`}
            style={customStyle}
        >
            {children}
        </aside>
    );
}
