import { Button } from "../components/ui";
import AboutUsImg1 from "../assets/pics/about-us-1.webp";
import AboutUsImg2 from "../assets/pics/about-us-2.webp";
import AboutUsImg3 from "../assets/pics/about-us-3.webp";
// import MergeGit from "../assets/svg/merge-git.svg";
// import { ReactComponent as Idea } from "../assets/svg/idea.svg";
// import PersonalGrowth from "../assets/svg/personal-growth.svg";
import Faq from "../components/FaqComponent/Faq";

const aboutUsDataWithAvatar = [
    {
        id: 1,
        subtitle: "About Us",
        title: "Title For this Text",
        body: "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.",
        image: AboutUsImg1,
    },
    {
        id: 2,
        subtitle: "Our Mission",
        title: "Title For this Text",
        body: "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.",
        image: AboutUsImg2,
    },
    {
        id: 3,
        subtitle: "Our Values",
        title: "Title For this Text",
        body: "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.",
        image: AboutUsImg3,
    },
];

// const aboutUsDataWithIcons = [
//     {
//         id: 1,
//         title: "Title For this Text",
//         body: "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. ",
//         icon: MergeGit,
//     },
//     {
//         id: 2,
//         title: "Title For this Text",
//         body: "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. ",
//         icon: Idea,
//     },
//     {
//         id: 3,
//         title: "Title For this Text",
//         body: "Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. ",
//         icon: PersonalGrowth,
//     },
// ];

export default function AboutUs() {
    return (
        <section className="px-4 lg:px-[7.6rem] py-8">
            <div className="flex flex-col gap-[7rem]">
                {aboutUsDataWithAvatar.map((item) => {
                    return (
                        <article
                            key={item.id}
                            className={`flex  flex-col gap-2 ${
                                item.id % 2 == 0
                                    ? "md:flex-row-reverse items-center"
                                    : "md:flex-row items-center"
                            } `}
                        >
                            <div className="px-4 md:w-1/2">
                                <h3 className="text-xs md:text-sm font-[600] font-poppins">
                                    {item.subtitle}
                                </h3>
                                <h2 className="text-lg md:text-xl font-[600] font-poppins">
                                    {item.title}
                                </h2>
                                <p className="text-sm md:text-md font-inter">
                                    {item.body}
                                </p>
                            </div>
                            <div className="relative flex items-center justify-center md:w-1/2 ">
                                <img
                                    src={item.image}
                                    className="h-[15rem] w-[15rem] md:h-[20rem] md:w-[20rem] rounded-full object-cover"
                                    alt=""
                                />
                            </div>
                        </article>
                    );
                })}

                {/* <section>
                    <h3 className="text-center font-poppins text-lg md:text-xl font-[600]">
                        Title For this Text And Title for this text
                    </h3>
                    <div className="flex flex-col gap-6 mt-4 md:flex-row">
                        {aboutUsDataWithIcons.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="flex flex-col items-center gap-4 bg-white p-[1.5rem]"
                                >
                                    <h2 className="w-full text-primary-500 font-[600]">
                                        {item.title}
                                    </h2>
                                    <img src={item.icon} alt="" />
                                    <p className="text-sm text-darkGrey">
                                        {item.body}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section> */}

                <section className="flex flex-col gap-6">
                    <h2 className="text-lg md:text-2xl font-[600] font-poppins">
                        Work With Us to contribute to the Community
                    </h2>
                    <p className="md:w-[24.35rem] text-sm text-darkGrey">
                        Why kept very ever home mrs. Considered sympathize ten
                        uncommonly occasional assistance sufficient not. Letter
                        of on become he tended active enable to.Why kept very
                        ever home mrs. Considered sympathize ten uncommonly
                        occasional assistance sufficient not.{" "}
                    </p>

                    <Button width="small" rounded="small">
                        <a href="/contact">CONTACT US </a>
                    </Button>
                </section>
                <Faq />
            </div>
        </section>
    );
}
