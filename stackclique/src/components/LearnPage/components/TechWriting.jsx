import { CourseCard } from "../../ui";
import { data } from "./constants/data";
// import { techWritings } from "./constants/techwriting";
export default function TechnicalWritting() {
    const filteredTechWriting = data.filter((el) => {
        el.category === "technical-writting";
    });
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {filteredTechWriting.map((techwriting) => (
                    <CourseCard key={techwriting.title} {...techwriting} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {filteredTechWriting.slice(5).map((techwriting) => (
                    <CourseCard key={techwriting.title} {...techwriting} />
                ))}
            </section>
        </section>
    );
}
