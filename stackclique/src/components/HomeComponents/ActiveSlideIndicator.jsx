import { activeSlideData } from "./homeComponentsData";
import { motion } from "framer-motion";

export default function ActiveSlideIndicator({ activeIndex }) {
    return (
        <div className="absolute right-2 z-10  text-darkGrey bottom-0 flex gap-4 md:gap-6 shadow-md">
            {activeSlideData.map((item) => {
                return (
                    <div
                        key={item.id}
                        className={`flex relative text-[0.5rem] gap-2 items-center  ${
                            item.id == activeIndex
                                ? "border-t-0"
                                : "border-darkGrey border-t-4"
                        }  py-2 ${
                            item.id === 3 && " after:min-w-0"
                        } after:min-w-[2px] after:min-h-full after:absolute after:top-0 after:right-[-0.5rem] after:bg-darkGrey`}
                    >
                        <p className=" lg:text-[2rem]">{item.num}</p>
                        <div className="flex flex-col">
                            <p
                                className={`md:text-[1.125rem] ${
                                    item.id === activeIndex
                                        ? "text-white"
                                        : "text-darkGrey"
                                } font-[600] font-poppins`}
                            >
                                {item.header}
                            </p>
                            <p className="">{item.subHeader}</p>
                        </div>
                        {item.id == activeIndex && (
                            <motion.span
                                layoutId="underline"
                                className="absolute border-t-4 border-green w-full  left-0 -top-0"
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
}
