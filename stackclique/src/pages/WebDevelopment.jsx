import { CourseCard } from "../components/ui";
import { courses } from "../components/LearnPage/coursesTestData";

export default function WebDevelopment() {
    let category = "web-development";

    const filteredWebDev = courses.filter((el) => el.category === category);

    console.log(filteredWebDev);

    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {filteredWebDev.map((webDev) => (
                    <CourseCard key={webDev.title} {...webDev} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {filteredWebDev.slice(5).map((webDev) => (
                    <CourseCard key={webDev.title} {...webDev} />
                ))}
            </section>
        </section>
    );
}
