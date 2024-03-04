import { CourseCard } from "../components/ui";
import { courses } from "../components/LearnPage/coursesTestData";
export default function AppDevelopment() {
    let category = "app-development";

    const filteredAppDev = courses.filter((el) => el.category === category);

    // const params = useParams();

    // const url = title.split(" ").join("-").toLowerCase();

    // const path = appDevs.find(
    //     (el) => el.params === el.title.split(" ").join("-").toLowerCase(),
    // );

    console.log(filteredAppDev);
    return (
        <section className="px-4 lg:px-[7rem] flex flex-col gap-6">
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {filteredAppDev.map((webDev) => (
                    <CourseCard key={webDev.title} {...webDev} />
                ))}
            </section>

            <h3 className="text-lg font-bold">Recommendations For You</h3>
            <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4">
                {filteredAppDev.slice(5).map((webDev) => (
                    <CourseCard key={webDev.title} {...webDev} />
                ))}
            </section>
        </section>
    );
}
