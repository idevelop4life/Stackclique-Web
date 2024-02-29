// CourseDetails.js
import React from "react";

const CourseDetails = ({ course }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold">{course.title}</h2>
            <p>Tutor: {course.tutor}</p>
            <p>Modules: {course.modules}</p>
            <p>Likes: {course.likes}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default CourseDetails;
