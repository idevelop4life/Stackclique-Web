import { FaCheckCircle } from "react-icons/fa";

import MobileAppScreen from "../../assets/svg/mobile-app-screen.svg";

const aboutAppData = [
    {
        id: 1,
        heading: "Empower Your Learning",
        subHeading:
            "Stackclique's app is your gateway to unlocking your full potential in the dynamic world of technology",
    },
    {
        id: 2,
        heading: "Flexible Learning",
        subHeading:
            "Access a diverse range of courses, tailored from beginner to advanced levels, allowing you to learn and progress at your own pace",
    },
    {
        id: 3,
        heading: "User-Friendly Experience",
        subHeading:
            "Enjoy a user-friendly app interface that makes navigation and learning a seamless and enjoyable experience",
    },
    {
        id: 4,
        heading: "Accessible Anytime, Anywhere",
        subHeading:
            "Learn on the go with our app, ensuring you can continue your education no matter where you are",
    },
];

export default function AboutOurApp() {
    return (
        <section className="flex flex-col items-center px-4 md:px-[3rem] mb-[4rem] mt-10">
            <h2 className="text-center text-[1.5rem] md:text-[2.6rem] font-[800] font-poppins">
                About Our App
            </h2>
            <p className="text-center md:w-[60%] lg:w-[50%] text-[1rem] mx-auto text-darkGrey">
                Welcome to the Stackclique Learning App, your personalized path
                to mastering the ever-changing world of technology. We&apos;re
                here to help you flourish, whether you&apos;re a student or tech
                enthusiast, by providing accessible and impactful learning
                experiences.
            </p>
            <div className="relative w-full flex flex-col-reverse md:flex-row gap-4 mt-[3.75rem] justify-evenly">
                <div className="self-center">
                    <img src={MobileAppScreen} alt="" />
                </div>

                <div className="flex flex-col justify-evenly md:w-1/2 gap-y-4 md:gap-y-4 font-inter ">
                    {aboutAppData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="flex  py-6 gap-4 px-[1.25rem] rounded-[0.625rem] bg-white shadow-aboutAppCardsShadow"
                            >
                                <span className="mt-1 text-green">
                                    <FaCheckCircle />
                                </span>
                                <div className="flex flex-col gap-4">
                                    <h2 className="uppercase font-[600]">
                                        {item.heading}
                                    </h2>
                                    <p className="text-darkGrey text-xs md:text-[1rem]">
                                        {item.subHeading}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
