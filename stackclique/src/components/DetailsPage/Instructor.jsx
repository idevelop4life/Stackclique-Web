import styles from "../../styles/css/app.module.css";
import { courses } from "../LearnPage/coursesTestData";
import { CourseCard } from "../ui";

function Instructor({ name, customStyle, recommendation = true }) {
    return (
        <section className={styles.course_instructor} style={customStyle}>
            <section>
                <h2>Instructor</h2>
                <h3>Agunwami Enterprise</h3>
                <div className={styles.course_instructor_detail}>
                    <div className={styles.instructor_profile}>
                        {false ? (
                            <img
                                src=""
                                alt=""
                                title=""
                                width={130}
                                height={130}
                            />
                        ) : (
                            <h3>AE</h3>
                        )}
                    </div>
                    <div>
                        <span>
                            <svg
                                width="24"
                                height="23"
                                viewBox="0 0 24 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 18.324L19.416 22.8L17.448 14.364L24 8.688L15.372 7.956L12 0L8.628 7.956L0 8.688L6.552 14.364L4.584 22.8L12 18.324Z"
                                    fill="#020202"
                                />
                            </svg>
                        </span>
                        <p>4.94 Instructor Rating</p>
                    </div>
                    <div>
                        <span>
                            <svg
                                width="20"
                                height="30"
                                viewBox="0 0 20 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.99961 18.5998C14.6388 18.5998 18.3996 14.839 18.3996 10.1998C18.3996 5.56061 14.6388 1.7998 9.99961 1.7998C5.36042 1.7998 1.59961 5.56061 1.59961 10.1998C1.59961 14.839 5.36042 18.5998 9.99961 18.5998Z"
                                    stroke="#020202"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M5.452 17.2679L4 28.1999L10 24.5999L16 28.1999L14.548 17.2559"
                                    stroke="#020202"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <p>2,000 Reviews</p>
                    </div>
                    <div>
                        <span>
                            <svg
                                width="28"
                                height="18"
                                viewBox="0 0 28 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.7998 7.8001C20.7918 7.8001 22.3878 6.1921 22.3878 4.2001C22.3878 2.2081 20.7918 0.600098 18.7998 0.600098C16.8078 0.600098 15.1998 2.2081 15.1998 4.2001C15.1998 6.1921 16.8078 7.8001 18.7998 7.8001ZM9.1998 7.8001C11.1918 7.8001 12.7878 6.1921 12.7878 4.2001C12.7878 2.2081 11.1918 0.600098 9.1998 0.600098C7.2078 0.600098 5.5998 2.2081 5.5998 4.2001C5.5998 6.1921 7.2078 7.8001 9.1998 7.8001ZM9.1998 10.2001C6.4038 10.2001 0.799805 11.6041 0.799805 14.4001V17.4001H17.5998V14.4001C17.5998 11.6041 11.9958 10.2001 9.1998 10.2001ZM18.7998 10.2001C18.4518 10.2001 18.0558 10.2241 17.6358 10.2601C19.0278 11.2681 19.9998 12.6241 19.9998 14.4001V17.4001H27.1998V14.4001C27.1998 11.6041 21.5958 10.2001 18.7998 10.2001Z"
                                    fill="#020202"
                                />
                            </svg>
                        </span>
                        <p>3,320 Students</p>
                    </div>
                    <div>
                        <span>
                            <svg
                                width="14"
                                height="18"
                                viewBox="0 0 14 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.200195 0.600098V17.4001L13.4002 9.0001L0.200195 0.600098Z"
                                    fill="#020202"
                                />
                            </svg>
                        </span>
                        <p>45 Courses</p>
                    </div>
                </div>
                <p className={styles.course_instructor_bio}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Iste laborum eius molestiae enim? Quas amet perferendis
                    repudiandae asperiores rem tenetur commodi eveniet. Possimus
                    quam consequatur sed eius inventore doloribus nisi sapiente
                    laudantium molestias placeat quos magni impedit, doloremque
                    suscipit pariatur.
                </p>
            </section>

            {recommendation ? (
                <>
                    <h2
                        className="text-lg font-bold text-[#7E0772] text-[1.5rem]
"
                    >
                        Recommendations For You
                    </h2>
                    <section className="grid gap-4 mt-4 grid-col-1 md:grid-cols-3 lg:grid-cols-4 ">
                        {courses
                            .slice(4)
                            .map((course, index) =>
                                index <= 3 ? (
                                    <CourseCard key={index} {...course} />
                                ) : (
                                    ""
                                ),
                            )}
                    </section>
                </>
            ) : (
                ""
            )}
        </section>
    );
}

export default Instructor;
