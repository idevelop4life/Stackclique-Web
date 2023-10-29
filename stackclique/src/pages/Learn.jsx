import { useState } from "react";
import { TopTabs, Courses, BottomContent } from "../components/LeaarnPage";

export default function Learn() {
    const [tabIndex, setTabIndex] = useState(1);
    return (
        <section className="min-h-screen">
            <section className="bg-[url('../public/svg/learn-screen-header.svg')] min-h-[7rem] md:min-h-[10rem] w-full flex items-center justify-center">
                <h2 className="text-lg font-bold text-white font-inter">
                    Courses
                </h2>
            </section>
            <TopTabs tabIndex={tabIndex} setTabIndex={setTabIndex} />
            <Courses />
            <BottomContent />
        </section>
    );
}
