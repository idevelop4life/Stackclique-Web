import { BsClock } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import Button from "./Button";
import { FaRegUser } from "react-icons/fa";

export default function CourseCard({
    title,
    img_url,
    modules,
    tutor,
    likes,
    reviews,
    duration_hours,
    students_enrolled,
}) {
    return (
        <div>
            {" "}
            <div className="flex flex-col gap-2 bg-white min-h-[25rem] pb-4 rounded-sm overflow-hidden lg:hover:shadow-2xl transition-shadow duration-200">
                <div className="h-[13rem] relative w-full">
                    <img
                        src={img_url}
                        alt=""
                        className="object-cover w-full h-full"
                    />
                </div>
                <h3 className="px-2 text-lg font-semibold">
                    {title} <span>({modules})</span>
                </h3>
                <p className="px-2">Instructor: {tutor}</p>
                <div className="flex gap-6 px-2 text-sm text-darkGrey">
                    <span className="flex items-center gap-2 text-sm">
                        <FiStar className="text-yellow-500" />
                        {likes}
                    </span>{" "}
                    <span className="flex items-center ">
                        ({reviews}k reviews)
                    </span>
                    <span className="flex items-center gap-2">
                        <BsClock className="text-sm" />
                        {duration_hours}h
                    </span>
                </div>
                <div className="flex items-center gap-4 px-2 text-sm text-darkGrey">
                    <FaRegUser /> <span>{students_enrolled}</span>{" "}
                    <span>Students Enrolled</span>
                </div>
                <Button
                    size={"medium"}
                    className="self-center h-[2.5rem] mt-auto"
                >
                    Enroll Course
                </Button>
            </div>
        </div>
    );
}
