// import { Outline } from ".";
import styles from "../../styles/css/app.module.css";
// import { courses } from "../LearnPage/coursesTestData";
import { Button } from "../ui";
import CourseDropdown from "./CourseDropdown";
import CourseHero from "./CourseHero";
import Instructor from "./Instructor";

function EnrollCourse({ content }) {
    return (
        <>
            <section className={styles.course}>
                <CourseHero />
                <section className={styles.course_outline}>
                    <div>
                        <div>
                            <h2>What you’ll learn</h2>
                            <ul className={styles.checklist}>
                                <li>
                                    WHy the bnjjis Have the mire the merrier the
                                    en will fine dout Whre erevt trewve
                                    thhelwkmskop the womwn married a low life
                                </li>
                                <li>
                                    WHy the bnjjis Have the mire the merrier the
                                    en will fine dout Whre erevt trewve
                                    thhelwkmskop the womwn married a low life
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2>Description</h2>
                            <p>
                                A Description On this course More like A summary
                                of what students would expect to learn who the
                                course is for and why they should enroll to take
                                the course.A Description On this course More
                                like A summary of what students would expect to
                                learn who the course is for and why they should
                                enroll to take the courseA Description On this
                                course More like A summary of what students
                                would expect to learn who the course is for and
                                why they should enroll to take the courseA
                                Description On this course More like A summary
                                of what students would expect to learn who the
                                course is for and why they should enroll to take
                                the course
                            </p>
                        </div>

                        <div>
                            {content?.map((el, index) => {
                                let isOpen;
                                index <= content.length % 2
                                    ? (isOpen = true)
                                    : (isOpen = false);
                                return (
                                    <CourseDropdown
                                        key={index}
                                        state={isOpen}
                                        header={el.header}
                                    >
                                        {el.content}
                                    </CourseDropdown>
                                );
                            })}
                        </div>
                    </div>
                    <div>
                        <div className={styles.course_enroll_section}>
                            <div className={styles.course_enroll}>
                                <h3>Free</h3>
                                <p>This course includes :</p>
                                <ul>
                                    <li>
                                        <span>
                                            <svg
                                                width="18"
                                                height="22"
                                                viewBox="0 0 18 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M16.2002 20.6V8.60004"
                                                    stroke="#020202"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M9 20.6V1.40002"
                                                    stroke="#020202"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M1.7998 20.6V13.4"
                                                    stroke="#020202"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        Beginner
                                    </li>
                                    <li>
                                        <span>
                                            <svg
                                                width="28"
                                                height="22"
                                                viewBox="0 0 28 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M24.7998 0.199951H3.1998C1.8678 0.199951 0.799805 1.26795 0.799805 2.59995V17C0.799805 17.6365 1.05266 18.2469 1.50275 18.697C1.95284 19.1471 2.56328 19.4 3.1998 19.4H9.1998V21.8H18.7998V19.4H24.7998C26.1198 19.4 27.1878 18.32 27.1878 17L27.1998 2.59995C27.1998 1.96343 26.9469 1.35298 26.4969 0.902895C26.0468 0.452807 25.4363 0.199951 24.7998 0.199951ZM24.7998 17H3.1998V2.59995H24.7998V17ZM18.7998 9.79995L10.3998 14.6V4.99995L18.7998 9.79995Z"
                                                    fill="#020202"
                                                />
                                            </svg>
                                        </span>
                                        44 hours on-demand Video
                                    </li>
                                    <li>
                                        <span>
                                            <svg
                                                width="18"
                                                height="28"
                                                viewBox="0 0 18 28"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.3"
                                                    d="M3 4.40002H15V21.2H3V4.40002Z"
                                                    fill="white"
                                                />
                                                <path
                                                    d="M13.7996 0.800049H4.19961C2.20761 0.800049 0.599609 2.40805 0.599609 4.40005V23.6C0.599609 25.592 2.20761 27.2 4.19961 27.2H13.7996C15.7916 27.2 17.3996 25.592 17.3996 23.6V4.40005C17.3996 2.40805 15.7916 0.800049 13.7996 0.800049ZM11.3996 24.8H6.59961V23.6H11.3996V24.8ZM14.9996 21.2H2.99961V4.40005H14.9996V21.2Z"
                                                    fill="#020202"
                                                />
                                            </svg>
                                        </span>
                                        Access On mobile and Tv
                                    </li>
                                    <li>
                                        <span>
                                            <svg
                                                width="28"
                                                height="22"
                                                viewBox="0 0 28 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M13.9998 0.199951L0.799805 7.39995L5.5998 10.016V17.216L13.9998 21.8L22.3998 17.216V10.016L24.7998 8.70795V17H27.1998V7.39995L13.9998 0.199951ZM22.1838 7.39995L13.9998 11.864L5.8158 7.39995L13.9998 2.93595L22.1838 7.39995ZM19.9998 15.788L13.9998 19.064L7.9998 15.788V11.324L13.9998 14.6L19.9998 11.324V15.788Z"
                                                    fill="#020202"
                                                />
                                            </svg>
                                        </span>
                                        2,000 Students enrolled
                                    </li>
                                    <li>
                                        <span>
                                            <svg
                                                width="30"
                                                height="14"
                                                viewBox="0 0 30 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M22.9196 0.543973C21.1916 0.543973 19.5596 1.21597 18.3956 2.37997L9.95961 9.86797C9.19161 10.636 8.17161 11.056 7.07961 11.056C4.83561 11.056 3.01161 9.24397 3.01161 6.99997C3.01161 4.75597 4.83561 2.94397 7.07961 2.94397C8.17161 2.94397 9.19161 3.36397 10.0076 4.17997L11.3636 5.37997L13.1756 3.77197L11.6636 2.43997C11.0627 1.83677 10.3482 1.35863 9.56136 1.0332C8.77456 0.707768 7.93106 0.541489 7.07961 0.543973C3.50361 0.543973 0.599609 3.44797 0.599609 6.99997C0.599609 10.552 3.50361 13.456 7.07961 13.456C8.80761 13.456 10.4396 12.784 11.6036 11.62L20.0396 4.13197C20.8076 3.36397 21.8276 2.94397 22.9196 2.94397C25.1636 2.94397 26.9876 4.75597 26.9876 6.99997C26.9876 9.24397 25.1636 11.056 22.9196 11.056C21.8396 11.056 20.8076 10.636 19.9916 9.81997L18.6236 8.60797L16.8116 10.216L18.3356 11.56C18.9382 12.1602 19.6532 12.6355 20.4398 12.9588C21.2265 13.2821 22.0692 13.447 22.9196 13.444C26.4956 13.444 29.3996 10.552 29.3996 6.98797C29.3996 3.42397 26.4956 0.543973 22.9196 0.543973Z"
                                                    fill="#020202"
                                                />
                                            </svg>
                                        </span>
                                        Full Access
                                    </li>
                                    <li>
                                        <span>
                                            <svg
                                                width="20"
                                                height="30"
                                                viewBox="0 0 20 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9.99961 18.6C14.6388 18.6 18.3996 14.8392 18.3996 10.2C18.3996 5.56086 14.6388 1.80005 9.99961 1.80005C5.36042 1.80005 1.59961 5.56086 1.59961 10.2C1.59961 14.8392 5.36042 18.6 9.99961 18.6Z"
                                                    stroke="#020202"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M5.452 17.2681L4 28.2001L10 24.6001L16 28.2001L14.548 17.2561"
                                                    stroke="#020202"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>
                                        Certification Of Completion
                                    </li>
                                </ul>
                                <Button
                                    size={"medium"}
                                    className="self-center h-[2.5rem] mt-auto mx-auto btn btn-rect"
                                >
                                    Enroll Course
                                </Button>
                            </div>
                        </div>
                        <div className="bg-[#ffffff] px-[2rem] py-[2rem]">
                            <div>
                                <h2>Requirements</h2>
                                <ul className={styles.checklist}>
                                    <li>
                                        WHy the bnjjis Have the mire the merrier
                                        the en will fine dout Whre erevt trewve
                                        thhelwkmskop the womwn married a low
                                        life
                                    </li>
                                    <li>
                                        WHy the bnjjis Have the mire the merrier
                                        the en will fine dout Whre erevt trewve
                                        thhelwkmskop the womwn married a low
                                        life
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2>Materials</h2>
                                <ul className={styles.checklist}>
                                    <li>
                                        WHy the bnjjis Have the mire the merrier
                                        the en will fine dout Whre erevt trewve
                                        thhelwkmskop the womwn married a low
                                        life
                                    </li>
                                    <li>
                                        WHy the bnjjis Have the mire the merrier
                                        the en will fine dout Whre erevt trewve
                                        thhelwkmskop the womwn married a low
                                        life
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2>Audience</h2>
                                <ul className={styles.checklist}>
                                    <li>
                                        WHy the bnjjis Have the mire the merrier
                                        the en will fine dout Whre erevt trewve
                                        thhelwkmskop the womwn married a low
                                        life
                                    </li>
                                    <li>
                                        WHy the bnjjis Have the mire the merrier
                                        the en will fine dout Whre erevt trewve
                                        thhelwkmskop the womwn married a low
                                        life
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <Instructor customStyle={{ margin: "4rem 7.5%" }} />
            </section>
        </>
    );
}

export default EnrollCourse;
