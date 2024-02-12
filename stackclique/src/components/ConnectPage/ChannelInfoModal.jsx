import { useState } from "react";
import { motion } from "framer-motion";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { MdOutlineClose } from "react-icons/md";

export default function ChannelInfoModal({
    setDescriptionModalOpen,
    channelModalRef,
}) {
    const [steps, setSteps] = useState(1);
    return (
        <motion.div
            ref={channelModalRef}
            className="absolute bg-white left-[50%] min-h-[60vh] max-h-[60vh] overflow-y-auto w-[90%] md:w-[50%] p-4 top-[4rem] translate-x-[-50%] shadow-md"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,

                transition: {
                    duration: 0.2,
                    // delay: 0.1,
                    ease: "linear",
                },
            }}
            exit={{ scale: 0, transition: { duration: 0.3 } }}
        >
            <h2 className="font-bold">Product Management</h2>
            <div className="relative flex items-center gap-8 mt-4 overflow-x-auto text-sm font-inter top-bar">
                <button
                    className={`min-w-[45%] lg:min-w-[12%] ${
                        steps === 1 ? "border-b-2 border-green" : "border-none"
                    }`}
                    onClick={() => setSteps(1)}
                >
                    Channel Description
                </button>
                <button
                    className={`min-w-[45%] lg:min-w-[12%] ${
                        steps === 2 ? "border-b-2 border-green" : "border-none"
                    }`}
                    onClick={() => setSteps(2)}
                >
                    Members 26
                </button>
                <button
                    className={`min-w-[45%] lg:min-w-[12%] ${
                        steps === 3 ? "border-b-2 border-green" : "border-none"
                    }`}
                    onClick={() => setSteps(3)}
                >
                    Files
                </button>
            </div>
            {steps === 1 ? <Step1 /> : steps === 2 ? <Step2 /> : <Step3 />}
            <button
                className="absolute text-2xl top-2 right-2"
                onClick={() => setDescriptionModalOpen(false)}
            >
                <MdOutlineClose arai-hidden="true" />
            </button>
        </motion.div>
    );
}
