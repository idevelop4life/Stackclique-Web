import { courses } from "./coursesTestData";

import { CourseCard } from "../ui";

export default function Courses() {
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {courses.map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {courses.slice(4).map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </section>
        </section>
    );
}
