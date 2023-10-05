import { Avatar, Button } from "../ui";

import Theresa from "../../assets/svg/theresa-web.svg";
import Robert from "../../assets/svg/robert.svg";
import Albert from "../../assets/svg/albert.svg";
import PythonTutor from "../../assets/svg/python-tutor.svg";
import Shield from "../../assets/svg/shield.svg";

import { BsFillCheckCircleFill } from "react-icons/bs";

const firstCardData = [
    {
        id: 1,
        name: "Theresa Webb",
        role: "Mentor of Web Design",
        img: Theresa,
        avatarBg: "#FA0",
    },
    {
        id: 2,
        name: "Albert Flores",
        role: "Mentor of Web Design",
        img: Albert,
        avatarBg: "#009E9D",
    },
    {
        id: 3,
        name: "Robert Fox",
        role: "Mentor of UI/UX",
        img: Robert,
        avatarBg: "#0091D0",
    },
];

const whyJoinData = [
    {
        id: 1,
        text: "Learn at your pace with flexible classes to suit your time.",
    },
    {
        id: 2,
        text: "Connect with a global community of learners, interact, share knowledge, and learn.",
    },
    { id: 3, text: "Gain knowledge from industry experts and get certified" },
    { id: 4, text: "Earn while you learn too." },
];

const FirstCard = () => {
    return (
        <div className="shadow-whyJoinCardBoxShadow relative flex flex-col bg-white w-full md:w-[23.125rem] mx-auto  rounded-[1.375rem] px-2 md:px-[2rem] py-[1.8rem]">
            <h2 className="font-poppins font-[700]">
                10000+ Tech Enthusiasts connected globally
            </h2>
            <div className="flex flex-col gap-6 mt-2">
                {firstCardData.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="flex items-center gap-6 font-manrope"
                        >
                            <Avatar
                                img={item.img}
                                bgColor={item.avatarBg}
                                size="small"
                            />
                            <div className="flex flex-col gap-2">
                                <h2 className="text-[1.12rem] font-[600]">
                                    {item.name}
                                </h2>
                                <p className="text-[0.75rem]">{item.role}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <span className="absolute -top-8 -right-6 ">
                <img src={Shield} height={50} width={50} alt="shield icon" />
            </span>
        </div>
    );
};

const SecondCard = () => {
    return (
        <div className="shadow-whyJoinCardBoxShadow bg-white flex w-full md:w-[23.125rem] mt-4 mx-auto flex-col lg:absolute lg:top-[10rem] lg:left-[16rem] z-10 gap-4 items-center rounded-[1.375rem] px-2 md:px-[2rem] py-[1.8rem]">
            <Avatar img={PythonTutor} />
            <h2 className="font-[800]">FUNDAMENTALS OF PYTHON</h2>
            <p className="-mt-4 text-sm text-darkGrey">
                Level 2 and above to enroll for free
            </p>
            <Button width="small" rounded="small">
                Enroll
            </Button>
        </div>
    );
};

export default function WhyJoinStackclique() {
    return (
        <section className="flex mt-[5rem] flex-col-reverse md:flex-row gap-4 justify-around">
            <div className="md:w-1/2 px-8 lg:px-[3rem] relative">
                <FirstCard />
                <SecondCard />
            </div>
            <div className="md:w-1/2 px-6 lg:px-[6rem]">
                <p className="text-primary">WHY JOIN STACKCLIQUE?</p>
                <h2 className="text-[2.5rem] md:text-[3.125rem] leading-[ 3.75rem] font-[800] font-manrope tracking-[-0.09375rem]">
                    Join Stackclique to Learn Digital Skills for Every Sphere
                </h2>
                <p className="text-darkGrey text-[0.875rem]">
                    There is always a place for advancement! Gain in-demand
                    digital skills to stay ahead with Stackclique.
                </p>
                {whyJoinData.map((item) => (
                    <p
                        key={item.id}
                        className="flex items-center gap-4 mt-4 text-darkGrey"
                    >
                        <span className="text-green">
                            <BsFillCheckCircleFill />
                        </span>
                        {item.text}
                    </p>
                ))}
            </div>
        </section>
    );
}
