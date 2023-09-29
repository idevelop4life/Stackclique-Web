import { RiShieldCheckFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import Avatar from "../ui/Avatar";
import { Link } from "react-router-dom";
import pythonFundamentals from "../../assets/pics/python-fundamentals.svg";
import Button from "../ui/Button";
import { TbBulb } from "react-icons/tb";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { MdOutlineOutbox } from "react-icons/md";
import theresaWebb from "../../assets/pics/theresa-webb.svg";
import albertFlores from "../../assets/pics/albert-flores.svg";
import robertFox from "../../assets/pics/robert-fox.svg";
import { HiCheckCircle } from "react-icons/hi";

export default function HomeSecondSection() {
    const secondSectionSteps = [
        {
            id: 1,
            icon: <TbBulb />,
            title: "Led Ask Possible Mistress",
            body: "Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.",
        },
        {
            id: 2,
            icon: <LiaPencilRulerSolid />,
            title: "Elegance Eat Likewise",
            body: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded incommode.",
        },
        {
            id: 3,
            icon: <MdOutlineOutbox />,
            title: "Message Oram Nothing",
            body: "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
        },
    ];

    const mentors = [
        {
            pic: theresaWebb,
            name: "Theresa Webb",
            title: "Mentor of Web Design",
        },
        {
            pic: albertFlores,
            name: "Albert Flores",
            title: "Mentor of Web Design",
        },
        {
            pic: robertFox,
            name: "Robert Fox",
            title: "Mentor of UI/UX Design",
        },
    ];

    return (
        <section className="pt-10 px-4 md:px-8 text-center">
            <h2 className="text-2xl lg:text-4xl font-extrabold mb-5">
                Title and text for this title and text
            </h2>
            <p className="mb-7 lg:text-lg">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
            </p>
            <p className="bg-primary text-white py-3 px-2 md:px-12 w-max mx-auto rounded-lg lg:text-lg">
                We so opinion friends me message as delight.
            </p>
            <div className="flex justify-between gap-8 text-xs md:text-sm lg:text-lg text-left my-16">
                {secondSectionSteps.map(({ id, title, body, icon }) => (
                    <div className="relative isolate" key={id}>
                        <span className="absolute top-0 right-0 font-black text-9xl -z-10 text-lightGrey opacity-20">
                            {id}
                        </span>
                        <span className="text-2xl lg:text-4xl bg-white block w-max rounded-lg p-1 text-primary mb-3">
                            {icon}
                        </span>
                        <h3 className="font-bold mb-2">{title}</h3>
                        <p>{body}</p>
                    </div>
                ))}
            </div>
            <div className="lg:flex lg:justify-between lg:items-center lg:gap-12">
                <div className="flex relative lg:w-1/2 lg:text-xl">
                    <div className="w-2/3 bg-white rounded-2xl relative p-5 text-left">
                        <span className="text-white bg-green block absolute p-4 text-3xl rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2">
                            <RiShieldCheckFill />
                        </span>
                        <h3 className="font-bold mb-5">
                            10000+ Tech Enthusiasts connected globally
                        </h3>
                        <div>
                            {mentors.map(({ pic, name, title }, index) => (
                                <div key={index}>
                                    <div className="flex gap-4 mb-4">
                                        <Avatar img={pic} size="small" />
                                        <div>
                                            <h4 className="font-semibold">
                                                {name}
                                            </h4>
                                            <p className="text-xs">{title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <Link
                                to=""
                                className="flex items-center gap-2 text-red hover:opacity-50 transition duration-500 lg:text-lg"
                            >
                                <span>See More</span>
                                <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="w-2/3 absolute bg-white p-5 shadow-sm shadow-black rounded-2xl top-2/3 left-1/3">
                        <div className="w-max mx-auto mb-3">
                            <Avatar img={pythonFundamentals} size="large" />
                        </div>
                        <h3 className="font-bold mb-2">
                            FUNDAMENTALS OF PYTHON
                        </h3>
                        <p className="text-sm mb-5">
                            Level 2 and above to enroll for free
                        </p>
                        <Link to="">
                            <Button>Enroll now</Button>
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:block w-1/2 text-left">
                    <h4 className="text-primaryDark font-semibold">
                        WHY JOIN STACKCLIQUE?
                    </h4>
                    <h3 className="font-bold text-5xl my-4">
                        A good header text as to why they should join?
                    </h3>
                    <p>
                        Why kept very ever home mrs. Considered sympathize ten
                        uncommonly occasional assistance sufficient not. Letter
                        of on become he tended active enable to.
                    </p>
                    <ul className="mt-4">
                        <li className="flex gap-3 items-center mt-3 text-lg">
                            <HiCheckCircle className="text-2xl text-green" />
                            <span>Get Overview at a glance</span>
                        </li>
                        <li className="flex gap-3 items-center mt-3 text-lg">
                            <HiCheckCircle className="text-2xl text-green" />
                            <span>Earn like never before etc...</span>
                        </li>
                        <li className="flex gap-3 items-center mt-3 text-lg">
                            <HiCheckCircle className="text-2xl text-green" />
                            <span>Get Live Support</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
