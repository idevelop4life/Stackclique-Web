import { NavLink, Link } from "react-router-dom";
import { navLinks } from "./navigationLinks";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const mobileNavVariant = {
    hidden: { x: "100vw" },
    visible: {
        x: 0,
        transition: { ease: "linear", duration: 0.5 },
    },
};

export default function MobileNav({ setMobileNavVisible }) {
    return (
        <AnimatePresence>
            <motion.div
                className="absolute lg:hidden top-[80px] right-0 z-[1000] min-h-[calc(100vh-80px)] w-[70%] md:w-[50%] font-inter"
                variants={mobileNavVariant}
                initial="hidden"
                animate="visible"
                exit={{
                    x: "100vw",
                    transition: { ease: "linear", duration: 0.5 },
                }}
            >
                <div className=" absolute right-0 h-full w-10/12 z-[1000] bg-white flex flex-col gap-6 items-end py-[2.12rem] px-[0.86rem]">
                    <div className="flex flex-col gap-4">
                        <Link to={"/login"}>Log in</Link>
                        <Link to={"/sign-up"}>Sign Up</Link>
                    </div>
                    <hr className="h-4  w-full" />
                    {navLinks.map((item) => {
                        return (
                            <NavLink
                                to={item.link}
                                key={item.id}
                                className={({ isActive }) =>
                                    isActive ? "text-primary" : "text-black"
                                }
                            >
                                {item.title}
                            </NavLink>
                        );
                    })}
                    <p>Get the App</p>
                </div>
                <button
                    onClick={() => setMobileNavVisible(false)}
                    className="absolute left-0 top-2 bg-white w-[1.5rem] h-[1.5rem] text-black rounded-full flex items-center justify-center"
                >
                    <MdClose />
                </button>
            </motion.div>
        </AnimatePresence>
    );
}
