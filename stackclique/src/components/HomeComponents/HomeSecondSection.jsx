import { TbBulb } from "react-icons/tb";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { MdOutlineOutbox } from "react-icons/md";

const secondSectionSteps = [
    {
        id: 1,
        icon: <TbBulb />,
        title: "Unlimited Learning",
        body: "Explore any interest or trending topic, complete prerequisites, and enhance your skills",
    },
    {
        id: 2,
        icon: <LiaPencilRulerSolid />,
        title: "Flexibility",
        body: "Learn at your preferred pace, switch between multiple courses, and transition to different topics seamlessly",
    },
    {
        id: 3,
        icon: <MdOutlineOutbox />,
        title: "Endless Certificates",
        body: "Earn certificates for every completed learning program without extra charges",
    },
];

export default function HomeSecondSection() {
    return (
        <section className="relative flex flex-col px-4 pt-10 text-center md:px-8">
            <div>
                <h2 className="mb-5 text-2xl font-extrabold lg:text-4xl">
                    Invest in Your Learning Journey with StackClique
                </h2>
                <p className="mb-7 text-xs md:w-[37.75rem] text-darkGrey mx-auto lg:text-sm">
                    Unleash your potential with StackClique&apos;s vast line -
                    Up of courses, Projects, Specializations, and Professional
                    Certificates. Taught by top educators and industry experts,
                    our platform empowers your learning journey like never
                    before
                </p>
                <p className="px-2 py-3 mx-auto text-sm text-white rounded-lg bg-primary-500 w-fit md:px-12 lg:text-lg">
                    EXPLORE OUR OFFERS!
                </p>
            </div>
            <div className="flex bg-white lg:w-[80%] p-6 mx-auto justify-between font-inter flex-col md:flex-row  text-xs md:text-sm lg:text-lg text-left my-16 rounded-[1.5rem]">
                {secondSectionSteps.map(({ id, title, body, icon }) => (
                    <div className="relative px-3 py-2 isolate" key={id}>
                        <span className="absolute top-0 right-0 font-black text-9xl -z-10 text-lightGrey opacity-20">
                            {id}
                        </span>
                        <span className="text-2xl lg:text-4xl bg-[#E8F2FF] block w-max rounded-lg p-1 text-primary-500 mb-3">
                            {icon}
                        </span>
                        <h3 className="font-[800] mb-2 font-poppins">
                            {title}
                        </h3>
                        <p className="text-[0.875rem] leading-[1.5rem]">
                            {body}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
