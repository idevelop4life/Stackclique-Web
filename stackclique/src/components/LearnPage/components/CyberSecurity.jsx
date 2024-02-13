import { CourseCard } from "../../ui";
import { cyberSec } from "./constants/cyberSecurity";
export default function CyberSecurity() {
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {cyberSec.map((cyberSecs) => (
                    <CourseCard key={cyberSecs.title} {...cyberSecs} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {cyberSec.slice(5).map((cyberSecs) => (
                    <CourseCard key={cyberSecs.title} {...cyberSecs} />
                ))}
            </section>
        </section>
    );
}
