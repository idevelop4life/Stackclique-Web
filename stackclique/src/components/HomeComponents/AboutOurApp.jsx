import { FaCheckCircle } from "react-icons/fa";

import MobileAppScreen from "../../assets/svg/mobile-app-screen.svg";

const aboutAppData = [
    {
        id: 1,
        heading: "Creative design",
        subHeading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
    },
    {
        id: 2,
        heading: "easy to use",
        subHeading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
    },
    {
        id: 3,
        heading: "Best user experince",
        subHeading:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.",
    },
];

export default function AboutOurApp() {
    return (
        <section className="flex flex-col items-center mt-[5rem] px-4 md:px-[3rem]">
            <h2 className="text-center text-[1.5rem] md:text-[2.6rem] font-[800] font-poppins">
                About Our App
            </h2>
            <p className="text-center md:w-[60%] lg:w-[50%] text-[0.8rem] mx-auto text-darkGrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
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
                                <span className="text-green mt-1">
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
