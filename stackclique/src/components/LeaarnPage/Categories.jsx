import { CourseCard } from "../ui";
import { categories } from "./coursesTestData";

export default function Categories() {
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {categories.map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {categories.slice(4).map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </section>
        </section>
    );
}
