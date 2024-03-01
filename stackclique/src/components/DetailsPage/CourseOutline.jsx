import styles from "../../styles/css/app.module.css";
import EnrollCourse from "./EnrollCourse";
import Instructor from "./Instructor";
import ViewCourse from "./ViewCourse";
function CourseOutline() {
    // Simulate if the user is logged and has enrolled for the course
    const hasEnrolled = true;
    const content = [
        {
            header: "Course Content",
            content: [
                { title: "Introduction", timestamp: "11:00" },
                { title: "User Research and User Needs", timestamp: "03:00" },
                { title: "Creating a Figma Account", timestamp: "06:20" },
                { title: "Creating a new figma file", timestamp: "10:00" },
                { title: "Mapping the user Journey", timestamp: "04:30" },
                { title: "Creation Of Wireframes", timestamp: "09:60" },
            ],
        },

        {
            header: "Drafting",
            content: [
                { title: "Function Of Tools", timestamp: "11:00" },
                { title: "Font Usage", timestamp: "03:00" },
                { title: "Layout Planning", timestamp: "06:20" },
                { title: "Framing, Layering and grouping", timestamp: "10:00" },
                { title: "Creating And Editing Shapes", timestamp: "04:30" },
                { title: "Images and masking", timestamp: "09:60" },
                { title: "Components and constraints", timestamp: "09:60" },
            ],
        },
    ];
    const output = hasEnrolled ? (
        <ViewCourse content={content} />
    ) : (
        <EnrollCourse content={content} />
    );
    return output;
}

export default CourseOutline;
