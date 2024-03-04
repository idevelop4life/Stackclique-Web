import { useState } from "react";
import styles from "../../styles/css/app.module.css";
// import { courses } from "../LearnPage/coursesTestData";
// import { Button, CourseCard } from "../ui";
// import CourseDropdown from "./CourseDropdown";
import CourseInfo from "./CourseInfo";
import Instructor from "./Instructor";
import Playlist from "./Playlist";
import VideoPlayer from "./VideoPlayer";

function ViewCourse({ content }) {
    const [onTheatre, setTheatreMode] = useState(false);
    return (
        <>
            <section
                className={`${styles.course_outline} ${onTheatre ? styles.single : ""}`}
                style={{ paddingTop: 5 + "%" }}
            >
                <div>
                    <VideoPlayer setTheatreMode={setTheatreMode} />
                    <div className={styles.no_desktop}>
                        <Playlist type={false} content={content} />
                    </div>
                    <CourseInfo />
                    <Instructor
                        customStyle={{ marginTop: 3 + "rem" }}
                        recommendation={false}
                    />
                </div>
                <div
                    className={`${styles.no_mobile} ${onTheatre ? "hide_this" : ""}`}
                >
                    <Playlist type={false} content={content} />
                </div>
            </section>
        </>
    );
}

export default ViewCourse;
