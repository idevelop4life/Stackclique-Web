import { CourseCard } from "../../ui";
import { appDevs } from "./constants/appDevs";
export default function AppDevelopment() {
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {appDevs.map((webDev) => (
                    <CourseCard key={webDev.title} {...webDev} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {appDevs.slice(5).map((webDev) => (
                    <CourseCard key={webDev.title} {...webDev} />
                ))}
            </section>
        </section>
    );
}
