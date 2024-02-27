import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Menu from "../../../assets/svg/menu.svg";
import MobileNav from "./MobileNav";
import { navLinks } from "./navigationLinks";
import { useAppStore } from "../../../store/useAppStore";
import { Avatar } from "../../ui";
import styles from "../../../styles/css/app.module.css";
import logoImg from "../../../assets/svg/logo.svg";

export default function Header() {
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const { pathname } = useLocation();
    const user = useAppStore((state) => state.user);
    useEffect(() => {
        setMobileNavVisible(false);
    }, [pathname]);
    return (
        <header className={styles.header}>
            <div className={styles.contact_strip}>
                <div className="justify-start">
                    <MdOutlineEmail /> <p>Info@youremail.com</p>
                </div>
                <div className="justify-center">
                    <BsTelephone /> <p>(480) 555-0103</p>
                </div>
                <div className="justify-end">
                    <FaFacebookF /> <FaInstagram /> <FaTwitter /> <FaYoutube />
                </div>
            </div>

            <nav className={styles.navigation}>
                <Link to={"/"} className={`${styles.brand_logo}`}>
                    <img
                        src={logoImg}
                        alt="Stackclique Logo"
                        title="Stackclique Logo"
                    />
                </Link>
                <ul className={styles.nav_link}>
                    {navLinks.map((item) => {
                        return (
                            <NavLink
                                to={item.link}
                                key={item.id}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-primary-500 font-[700]"
                                        : "text-white"
                                }
                            >
                                {item.title}
                            </NavLink>
                        );
                    })}
                </ul>
                {user ? (
                    <button className="hidden lg:flex">
                        <Avatar size={"small"} />
                    </button>
                ) : (
                    <div className="hidden gap-4 lg:flex ">
                        <Link
                            to={"/login"}
                            className="px-4 py-2 bg-white rounded-md"
                        >
                            Login
                        </Link>
                        <Link
                            to={"sign-up"}
                            className="px-4 py-2 text-white rounded-md bg-primary-500"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}

                <button
                    onClick={() => setMobileNavVisible(true)}
                    className={`text-white text-[2rem] ${
                        mobileNavVisible ? "hidden" : "flex"
                    }  items-center justify-center rounded-full lg:hidden bg- w-[1.6rem] h-[1.6rem] `}
                >
                    <img src={Menu} alt="menu" />
                </button>
                {mobileNavVisible && (
                    <MobileNav setMobileNavVisible={setMobileNavVisible} />
                )}
            </nav>
        </header>
    );
}
