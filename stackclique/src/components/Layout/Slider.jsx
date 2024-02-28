import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./slider.css";
import pic1 from "../../assets/pics/1.jpg";
import pic2 from "../../assets/pics/2.jpg";
import pic3 from "../../assets/pics/3.jpg";
import pic4 from "../../assets/pics/4.jpg";
import { FaAngleLeft } from "react-icons/fa";

export default function Slider() {
    const slides = [
        <img src={pic1} alt="slider" title="slider" key={1} />,
        <img src={pic2} alt="slider" title="slider" key={2} />,
        <img src={pic3} alt="slider" title="slider" key={3} />,
        <img src={pic4} alt="slider" title="slider" key={4} />,
    ];

    return (
        <section className="min-w-[55%] hidden lg:block slider">
            {/* we'll change this later */}
            <Link to="/login" className="slider-link">
                <FaAngleLeft />
                <span>Go back</span>
            </Link>
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                slidesPerView={1}
                speed={6000}
                effect={"fade"}
                navigation
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))}
            </Swiper>
            <p className="slider-text">
                Everyday is a new day to connect to like minds and grow globally
                on StackClique
            </p>
        </section>
    );
}
