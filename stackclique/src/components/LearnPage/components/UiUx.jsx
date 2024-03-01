import { CourseCard } from "../../ui";
import { courses } from "../coursesTestData";
// import { uiUx } from "./constants/ux";
export default function UiUx() {
    const filteredUiUx = courses.filter((el) => {
        el.category === "ui-ux";
    });
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {filteredUiUx.map((ui) => (
                    <CourseCard key={ui.title} {...ui} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {filteredUiUx.slice(5).map((ui) => (
                    <CourseCard key={ui.title} {...ui} />
                ))}
            </section>
        </section>
    );
}
