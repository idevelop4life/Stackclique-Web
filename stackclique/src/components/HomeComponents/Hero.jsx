import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { FiUser } from "react-icons/fi";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/autoplay";

import { slideData } from "./homeComponentsData";
import ActiveSlideIndicator from "./ActiveSlideIndicator";

const SingleSlide = ({ url, id, setActiveIndex }) => {
    const [newsletterValue, setNewsLetterValue] = useState("");
    const swiperSlide = useSwiperSlide();
    // set the active index
    useEffect(() => {
        if (swiperSlide.isActive) {
            setActiveIndex(id);
        }
    }, [swiperSlide.isActive, id, setActiveIndex]);
    return (
        <div className=" flex">
            <div className="absolute w-full h-full">
                <img src={url} alt="" className="object-fit z-[-100]" />
            </div>
            <div className=" flex relative mt-[7rem] md:mt-[10rem] ml-4 lg:ml-[6rem]  flex-col text-left text-white z-[100] ">
                <h2 className="md:text-[3.5rem] flex font-[600] lg:leading-[4.5rem] font-poppins">
                    A community <br /> designed to reward
                </h2>
                <div className="h-[2.5rem]  md:h-[3rem] relative md:w-[80%] mt-4 flex bg-white rounded-[0.375rem] overflow-hidden">
                    <input
                        type="text"
                        placeholder="Join our newsletter, stay updated"
                        className=" px-4  w-[70%] text-darkGrey outline-none"
                        value={newsletterValue}
                        onChange={(e) => setNewsLetterValue(e.target.value)}
                    />
                    <button className="bg-primary flex-1 w-[30%] rounded-[0.375rem]">
                        Subscribed
                    </button>
                </div>
                <div className="flex items-center text-lightGrey text-xs mt-2 gap-2">
                    <span>
                        <FiUser />
                    </span>
                    <p>Join STACKCLIQUE</p>
                </div>
            </div>
        </div>
    );
};

export default function Hero() {
    const [swiper, setSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className=" relative flex h-[20rem] md:h-[35rem]">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                slidesPerView={1}
                onSwiper={setSwiper}
                speed={6000}
                // effect={"fade"}
                navigation
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "hero-section-bullet",
                }}
                loop={true}
                className=" relative max-h-full"

                // onSwiper={(swiper) => handleSwipe(swiper)}
            >
                {slideData.map((item) => {
                    return (
                        <SwiperSlide
                            key={item.id}
                            className="text-center relative max-h-[35rem]"
                        >
                            <SingleSlide
                                url={item.slideImg}
                                id={item.id}
                                setActiveIndex={setActiveIndex}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            {/* change slide buttons */}
            <div className="absolute z-[200] w-full mt-[4rem] px-4 md:mt-[5rem] md:px-[5rem] flex justify-between">
                <button
                    className=" bg-white text-primary h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] rounded-full flex items-center justify-center"
                    onClick={() => swiper?.slideNext()}
                >
                    <MdChevronLeft />
                </button>
                <button
                    className=" bg-white text-primary h-[1.5rem] w-[1.5rem] md:h-[2rem] md:w-[2rem] rounded-full flex items-center justify-center"
                    onClick={() => swiper?.slideNext()}
                >
                    <MdChevronRight />
                </button>
            </div>

            {/* active slide indicator for the hero section */}
            <ActiveSlideIndicator activeIndex={activeIndex} />
        </section>
    );
}
