import { BsClock } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import Button from "./Button";
import { FaRegUser } from "react-icons/fa";
import styles from "../../styles/css/app.module.css";
import { useNavigate } from "react-router-dom";

export default function CourseCard({
    _id,
    title,
    img_url,
    modules,
    tutor,
    likes,
    reviews,
    duration_hours,
    students_enrolled,
}) {
    const navigate = useNavigate();

    return (
        <div>
            <div
                className={`${styles.course_card} rounded-sm lg:hover:shadow-2xl transition-shadow duration-200`}
            >
                <div className="h-[13rem] relative w-full">
                    <img
                        src={img_url}
                        alt={title}
                        title={title}
                        loading="lazy"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="relative">
                    <div className={styles.bookmark}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_333_2546)">
                                <path
                                    d="M14 0H10C4.47715 0 0 4.47715 0 10V14C0 19.5228 4.47715 24 10 24H14C19.5228 24 24 19.5228 24 14V10C24 4.47715 19.5228 0 14 0Z"
                                    fill="white"
                                />
                                <path
                                    d="M6.6001 18.5999L12.0001 14.9999L17.4001 18.5999V6.5999C17.4001 6.28164 17.2737 5.97642 17.0486 5.75137C16.8236 5.52633 16.5184 5.3999 16.2001 5.3999H7.8001C7.48184 5.3999 7.17661 5.52633 6.95157 5.75137C6.72653 5.97642 6.6001 6.28164 6.6001 6.5999V18.5999Z"
                                    stroke="#020202"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_333_2546">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h3 className="px-4 pt-6 text-xl font-semibold">
                        {title} <span>({modules})</span>
                    </h3>
                    <p className="px-4 py-2 text-[#8E8C8C]">
                        Instructor: {tutor}
                    </p>
                    <div className="flex gap-2 px-4 text-[12px] text-darkGrey">
                        <span className="flex items-center gap-2 text-[12px]">
                            <FiStar className="text-yellow-500" />
                            {likes}
                        </span>{" "}
                        <span className="flex items-center text-[12px]">
                            ({reviews}k reviews)
                        </span>
                        <span className="flex items-center gap-2 text-[12px]">
                            <BsClock className="text-sm" />
                            {duration_hours}h
                        </span>
                    </div>
                    <div className="flex items-center pt-1 pb-6 gap-1 px-4 text-[12px] text-darkGrey">
                        <FaRegUser />{" "}
                        <span className="text-[12px]">{students_enrolled}</span>{" "}
                        <span className="text-[12px]">Students Enrolled</span>
                    </div>
                </div>
                <Button
                    size={"medium"}
                    className="self-center h-[2.5rem] mt-auto btn btn-rect"
                    onClick={() => {
                        navigate(`/course/${_id}`);
                    }}
                >
                    Enroll Course
                </Button>
            </div>
        </div>
    );
}
