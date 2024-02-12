import { CourseCard } from "../../ui";
import { techWritings } from "./constants/techwriting";
export default function TechnicalWritting() {
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {techWritings.map((techwriting) => (
                    <CourseCard key={techwriting.title} {...techwriting} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {techWritings.slice(5).map((techwriting) => (
                    <CourseCard key={techwriting.title} {...techwriting} />
                ))}
            </section>
        </section>
    );
}
