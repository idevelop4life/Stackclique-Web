import { Link } from "react-router-dom";
import SocialButton from "./SocialButton";
import styles from "../../styles/css/app.module.css";

function SocialRedirect({ type, divider = false, dividerLabel = "or" }) {
    const divide = divider ? <div className={styles.social_divider}>{dividerLabel}</div> : "";
    return (
        <>
        <div className={styles.social_redirect}>
            {divide}
            <div className={styles.social_links}>
                <Link to={""}>
                    <SocialButton type={"facebook"} />
                </Link>

                <Link to={""}>
                    <SocialButton type={"apple"} />
                </Link>

                <Link to={""}>
                    <SocialButton type={"google"} />
                </Link>
            </div>
        </div>
        </>
    );
}

export default SocialRedirect;
