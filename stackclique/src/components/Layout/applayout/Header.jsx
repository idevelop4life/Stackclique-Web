import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Menu from "../../../assets/svg/menu.svg";
import MobileNav from "./MobileNav";
import { navLinks } from "./navigationLinks";
import { useAppStore } from "../../../store/useAppStore";
import { Avatar } from "../../ui";

export default function Header() {
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const user = useAppStore((state) => state.user);

    return (
        <header className="fixed top-0 h-[80px] lg:h-[120px] left-0 right-0 bg-[#5A5F6B] backdrop-blur-xl z-[100]">
            <div className="text-white text-xs md:text-sm bg-gray-600 lg:bg-black py-2 px-2 flex items-center justify-between mx-auto md:mx-[4rem] lg:mx-[7.37rem]">
                <div className="flex items-center gap-4">
                    <MdOutlineEmail /> <p>Info@youremail.com</p>
                </div>
                <div className="flex items-center gap-4">
                    <BsTelephone /> <p>(480) 555-0103</p>
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <FaFacebookF /> <FaInstagram /> <FaTwitter /> <FaYoutube />
                </div>
            </div>

            <nav className="flex items-center font-inter justify-between min-h-[3rem] px-2 py-2 md:mx-[4rem] lg:py-[1rem] lg:mx-[7.37rem]">
                <p className="font-[700] text-sm lg:text-[1.5rem] text-white font-poppins">
                    STACK<span className="text-green">CLIQUE</span>
                </p>
                <ul className="hidden lg:flex gap-[3.12rem]">
                    {navLinks.map((item) => {
                        return (
                            <NavLink
                                to={item.link}
                                key={item.id}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-primary font-[700]"
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
                    <div className="lg:flex gap-4 hidden ">
                        <Link
                            to={"/login"}
                            className="rounded-md py-2 px-4 bg-white"
                        >
                            Login
                        </Link>
                        <Link
                            to={"sign-up"}
                            className="rounded-md py-2 px-4 bg-primary text-white"
                        >
                            Login
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
