import { useParams } from "react-router-dom";
import { courses } from "../components/LearnPage/coursesTestData";
import { Outline } from "../components/DetailsPage";
import styles from "../styles/css/app.module.css";

function LearnCourse() {
    const { courseId } = useParams();

    const course = courses.filter((el) => {
        return el.title === courseId;
    });

    if (!course) {
        return <div>No record found</div>;
    }

    return (
        <>
            <section className={styles.course}>
                {/* <Hero /> */}
                <Outline courses={courses} />
            </section>
        </>
    );
}

export default LearnCourse;
