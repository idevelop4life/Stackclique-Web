import React from "react";
import { useLocation } from "react-router-dom";
import { data } from "../LearnPage/components/constants/data";

const CourseDetails = () => {
    const { pathname } = useLocation();

    const courseDetails = data.find(
        (el) => pathname === `/${el.title.split(" ").join("-").toLowerCase()}`,
    );

    if (!courseDetails) {
        return <div>Course not found</div>;
    }

    return (
        <div className="mt-96 min-h-screen">
            <h2 className="text-2xl font-bold">{courseDetails.title}</h2>
            <p>Tutor: {courseDetails.tutor}</p>
            <p>Modules: {courseDetails.modules}</p>
            <p>Likes: {courseDetails.likes}</p>
        </div>
    );
};

export default CourseDetails;
