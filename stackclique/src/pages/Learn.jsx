import { useState } from "react";
import { TopTabs, BottomContent } from "../components/LearnPage";
// import Courses from "../components/LearnPage/Courses";

export default function Learn() {
    const [tabIndex, setTabIndex] = useState(1);
    return (
        <section className="min-h-screen">
            <section className="bg-[url('../public/svg/learn-screen-header.svg')] min-h-[12rem] md:min-h-[13rem] w-full flex justify-center">
                <h2 className="text-lg font-bold text-white font-inter mt-auto mb-[2rem] text-[1.5rem] ">
                    Courses
                </h2>
            </section>
            <TopTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
            {/* <Courses /> */}
            <BottomContent />
        </section>
    );
}
