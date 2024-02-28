import styles from "../../styles/css/app.module.css";
import loginImg from "../../assets/svg/auth/login.svg";
import signupImg from "../../assets/svg/auth/signup.svg";
import verifyImg from "../../assets/svg/auth/verify.svg";

function AuthGraphics({ type = "login" }) {
    const { auth_img } = styles;
    if (type === "login") {
        const title = "Login Account";
        return (
            <>
                <img
                    src={loginImg}
                    alt={title}
                    title={title}
                    loading="lazy"
                    width={"300"}
                    height={"300"}
                    className={`${auth_img}`}
                />
            </>
        );
    } else if (type === "signup") {
        const title = "Create Account";
        return (
            <>
                <img
                    src={signupImg}
                    alt={title}
                    title={title}
                    loading="lazy"
                    width={"300"}
                    height={"300"}
                    className={`${auth_img}`}
                />
            </>
        );
    } else if (type === "verify") {
        const title = "Verify Your Account";
        return (
            <>
                <img
                    src={verifyImg}
                    alt={title}
                    title={title}
                    loading="lazy"
                    width={"300"}
                    height={"300"}
                    className={`${auth_img}`}
                />
            </>
        );
    } else {
        return <></>;
    }
}

export default AuthGraphics;
