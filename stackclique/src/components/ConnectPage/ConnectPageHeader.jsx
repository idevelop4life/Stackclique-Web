import { useState, useRef } from "react";
import { motion } from "framer-motion";
import useClickAwayListener from "../../hooks/useClickAway";

import { BiSearch } from "react-icons/bi";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { BsPin } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import ChannelInfoModal from "./ChannelInfoModal";
export default function ConnectPageHeader() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [descriptionModalOpen, setDescriptionModalOpen] = useState(false);
    const dropdownRef = useRef(null);
    const channelModalRef = useRef(null);
    useClickAwayListener(dropdownRef, () => setDropdownOpen(false));
    useClickAwayListener(channelModalRef, () => setDescriptionModalOpen(false));

    return (
        <section>
            <div className="flex h-[2rem] font-manrope relative mt-8 items-center w-[80%] md:w-[60%] lg:w-[40%] mx-auto rounded-2xl overflow-hidden">
                <span className="flex items-center justify-center w-2/12 h-full text-white bg-primary-500">
                    <BiSearch aria-hidden="true" />
                </span>
                <input
                    type="search"
                    name=""
                    id=""
                    placeholder="search messages"
                    className="flex-1 h-full px-2 bg-white outline-none"
                />
            </div>
            <div className="bg-[#F7F7F7] relative py-2 px-2 md:px-[4rem] mt-2 gap-2 flex items-center">
                <div
                    role="dropdown"
                    className="relative flex items-center gap-2 text-sm capitalize"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                >
                    Product management{" "}
                    <span>
                        {dropdownOpen ? (
                            <FiChevronUp aria-hidden="true" />
                        ) : (
                            <FiChevronDown aria-hidden="true" />
                        )}
                    </span>
                    {dropdownOpen && (
                        <motion.div
                            ref={dropdownRef}
                            className="absolute top-[2rem] bg-white p-3 text-sm rounded-sm shadow-md flex flex-col gap-4"
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: {
                                    duration: 0.2,
                                    // delay: 0.1,
                                    ease: "linear",
                                },
                            }}
                            exit={{ scale: 0, transition: { duration: 0.3 } }}
                        >
                            <button
                                onClick={() =>
                                    setDescriptionModalOpen((prev) => !prev)
                                }
                            >
                                Channel Description{" "}
                            </button>
                            <button>Exit Channel</button>
                        </motion.div>
                    )}
                </div>
                <div className="flex items-center gap-1 ml-auto text-sm">
                    <span>
                        <BsPin aria-hidden="hidden" />
                    </span>
                    <span>2 pinned</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                    <span className="text-lg">
                        <FaUsers aria-hidden="true" />
                    </span>
                    <span className="text-xs">26 members</span>
                </div>
                {descriptionModalOpen ? (
                    <ChannelInfoModal
                        setDescriptionModalOpen={setDescriptionModalOpen}
                        channelModalRef={channelModalRef}
                    />
                ) : null}
            </div>
        </section>
    );
}
