import { useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "./navigationLinks";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "../../../store/useAppStore";
import { Avatar } from "../../ui";
import useClickAwayListener from "../../../hooks/useClickAway";

const mobileNavVariant = {
    hidden: { x: "100vw" },
    visible: {
        x: 0,
        transition: { ease: "linear", duration: 0.5 },
    },
};

const fadeInVariant = {
    hidden: { translateY: 30, opacity: 0 },
    show: { translateY: 0, opacity: 1, transition: { delay: 1, duration: 1 } },
};

export default function MobileNav({ setMobileNavVisible }) {
    const user = useAppStore((state) => state.user);
    const mobileSideNavRef = useRef(null);
    useClickAwayListener(mobileSideNavRef, closeSideMobileNav);

    function closeSideMobileNav() {
        setMobileNavVisible(false);
    }

    return (
        <AnimatePresence>
            <motion.div
                className="fixed lg:hidden  top-[80px] right-0 z-[2000] min-h-[calc(100vh-80px)] w-[70%] md:w-[50%] font-inter"
                variants={mobileNavVariant}
                initial="hidden"
                animate="visible"
                exit={{
                    x: "100vw",
                    transition: { ease: "linear", duration: 0.5 },
                }}
                ref={mobileSideNavRef}
            >
                <div className=" absolute right-0 h-full w-10/12 z-[1000] bg-white flex flex-col gap-6 items-end py-[2.12rem] px-[1.2rem]">
                    {/* welcome user if a user is logged in else auth buttons */}
                    {user ? (
                        <div className="flex items-center gap-4 font-inter">
                            <div className="flex flex-col h-full justify-around">
                                <p className="text-sm font-[700]">
                                    Hello, Anderson
                                </p>
                                <p className="text-xs">Welcome onboard</p>
                            </div>
                            <Avatar />
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <Link to={"/login"}>Log in</Link>
                            <Link to={"/sign-up"}>Sign Up</Link>
                        </div>
                    )}
                    <hr className="h-4  w-full" />
                    {navLinks.map((item, index) => {
                        return (
                            <motion.NavLink
                                to={item.link}
                                key={item.id}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-primary font-[600]"
                                        : "text-black"
                                }
                                initial={{ x: "100vw" }}
                                animate={{
                                    x: 0,
                                    transition: {
                                        delay: 0.1 * index,
                                        duration: 0.5,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {item.title}
                            </motion.NavLink>
                        );
                    })}
                    <motion.p
                        initial={{ opacity: 0, translateY: 30 }}
                        animate={{
                            opacity: 1,
                            translateY: 0,
                            transition: { delay: 1, duration: 1 },
                        }}
                    >
                        Get the App
                    </motion.p>
                    {user && (
                        <motion.button
                            variants={fadeInVariant}
                            initial="hidden"
                            animate="show"
                        >
                            Sign Out
                        </motion.button>
                    )}
                </div>
                <button
                    onClick={closeSideMobileNav}
                    className="absolute left-0 top-2 bg-white w-[1.5rem] h-[1.5rem] text-black rounded-full flex items-center justify-center"
                >
                    <MdClose />
                </button>
            </motion.div>
        </AnimatePresence>
    );
}
