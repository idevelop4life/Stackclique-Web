import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import faqImage1 from "../../assets/pics/faq1.svg";
import faqImage2 from "../../assets/pics/faq2.svg";
import { CiSearch } from "react-icons/ci";

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-[#7E0772] rounded-xl my-5 shadow">
            <motion.div
                className="p-4 cursor-pointer flex items-center justify-between"
                onClick={toggleAccordion}
                initial={false}
                whileHover={{ backgroundColor: "#f0f0f0" }}
            >
                <div className="text-xl">{title}</div>
                {isOpen ? (
                    <IoIosArrowUp size={20} />
                ) : (
                    <IoIosArrowDown size={20} />
                )}
            </motion.div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="p-4 overflow-hidden"
                    >
                        {content}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Faq = () => {
    const accordionItems = [
        {
            title: "How To find your missing course ?",
            content: "Content for section 1",
        },
        {
            title: "How to download your certificate of completion ?",
            content: "Content for section 2",
        },
        {
            title: "experiencing a technical issue ?",
            content: "Content for section 3",
        },

        {
            title: "Learn about our mobile Apps ?",
            content: "Content for section 1",
        },
        {
            title: "Everything About the Stack clique Learning Experience",
            content: "Content for section 2",
        },
        {
            title: "How To find your missing course ?",
            content: "Content for section 3",
        },

        {
            title: "How to download your certificate of completion ?",
            content: "Content for section 1",
        },
        {
            title: "Downloading course Resources ?",
            content: "Content for section 2",
        },
        {
            title: "Lifetime Access ?",
            content: "Content for section 3",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const filteredAccordionItems = accordionItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <div className="xl:w-[60%] md:w-[80%] w-full mt-8 p-4 mx-auto">
            <div className="md:flex  gap-20 md:my-20 my-8">
                <div>
                    <h1 className="text-3xl font-bold my-10">
                        What Can We help you find ?
                    </h1>
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Ask us anything"
                            className="p-2 pl-8 pr-4 border-none border-gray-300 w-full hover:outline-[#7E0772] outline-none rounded-lg"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="absolute left-2 top-3 text-gray-400 text-xl ">
                            <CiSearch />
                        </div>
                    </div>
                </div>

                <div className="flex relative">
                    <div className="absolute -top-10 -left-6 md:block hidden">
                        <img
                            src={faqImage1}
                            alt="question"
                            className="xl:w-28 xl:h-28 lg:h-20 lg:w-20 md:w-16 md:h-16 w-10 h-10"
                        />
                    </div>
                    <div className="bg-[#edd7ea] rounded-tr-full rounded-tl-full rounded-br-sm rounded-bl-2xl md:block hidden">
                        <img
                            src={faqImage2}
                            alt="question"
                            className="md:w-[300px] w-[100px] h-auto z-10"
                        />
                    </div>
                </div>
            </div>

            {filteredAccordionItems.length > 0 ? (
                filteredAccordionItems.map((item, index) => (
                    <>
                        <AccordionItem
                            key={index}
                            className="grid grid-cols-2"
                            title={item.title}
                            content={item.content}
                        />
                    </>
                ))
            ) : (
                <p>
                    Sorry, we couldn&apos;t find any answer for your question.
                </p>
            )}
        </div>
    );
};

export default Faq;
