import styles from "../../styles/css/app.module.css";
import bgImg from "../../assets/pics/thumb.jpg";

function CourseHero() {
    return (
        <section className={styles.course_hero}>
            <div className={styles.course_header}>
                <h1>Figma UI/UX Design Essentials</h1>
                <h2>Free course</h2>
                <p>
                    This course will be your personal guide for interface design
                    using Figma! Go from the basics to working professionally.
                </p>
                <p>
                    Rating:
                    <span
                        style={{
                            marginLeft: 1 + "rem",
                            marginRight: .25 + "rem",
                            width: 1.25 + "rem",
                            height: 1.25 + "rem",
                        }}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6.04024 7.772C3.58023 8.329 2.35024 8.607 2.05723 9.548C1.76523 10.488 2.60324 11.469 4.28024 13.43L4.71424 13.937C5.19024 14.494 5.42923 14.773 5.53623 15.117C5.64323 15.462 5.60723 15.834 5.53523 16.577L5.46923 17.254C5.21623 19.871 5.08924 21.179 5.85524 21.76C6.62124 22.342 7.77323 21.811 10.0752 20.751L10.6722 20.477C11.3262 20.175 11.6532 20.025 12.0002 20.025C12.3472 20.025 12.6742 20.175 13.3292 20.477L13.9242 20.751C16.2272 21.811 17.3792 22.341 18.1442 21.761C18.9112 21.179 18.7842 19.871 18.5312 17.254M19.7202 13.43C21.3972 11.47 22.2352 10.489 21.9432 9.548C21.6502 8.607 20.4202 8.328 17.9602 7.772L17.3242 7.628C16.6252 7.47 16.2762 7.391 15.9952 7.178C15.7152 6.965 15.5352 6.642 15.1752 5.996L14.8472 5.408C13.5802 3.136 12.9472 2 12.0002 2C11.0532 2 10.4202 3.136 9.15324 5.408"
                                stroke="#DEBB00"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                    4.3 (13.2k reviews)
                </p>
                <p>Created By : Agunwami Enterprise</p>
                <p>
                    <div>
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_537_1185)">
                                <path
                                    d="M28 0H20C8.9543 0 0 8.9543 0 20V28C0 39.0457 8.9543 48 20 48H28C39.0457 48 48 39.0457 48 28V20C48 8.9543 39.0457 0 28 0Z"
                                    fill="#333337"
                                />
                                <path
                                    d="M19.032 12H28.968L36 19.032V28.968L28.968 36H19.032L12 28.968V19.032L19.032 12Z"
                                    stroke="white"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M24 19.2V24"
                                    stroke="white"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M24 28.8H24.012"
                                    stroke="white"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_537_1185">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        Last updated 11/2023
                    </div>
                    <div>
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_537_1343)">
                                <path
                                    d="M28 0H20C8.9543 0 0 8.9543 0 20V28C0 39.0457 8.9543 48 20 48H28C39.0457 48 48 39.0457 48 28V20C48 8.9543 39.0457 0 28 0Z"
                                    fill="#333337"
                                />
                                <path
                                    d="M23.988 12C17.364 12 12 17.376 12 24C12 30.624 17.364 36 23.988 36C30.624 36 36 30.624 36 24C36 17.376 30.624 12 23.988 12ZM32.304 19.2H28.764C28.3884 17.7137 27.8323 16.2791 27.108 14.928C29.2969 15.6816 31.1414 17.1981 32.304 19.2ZM24 14.448C24.996 15.888 25.776 17.484 26.292 19.2H21.708C22.224 17.484 23.004 15.888 24 14.448ZM14.712 26.4C14.52 25.632 14.4 24.828 14.4 24C14.4 23.172 14.52 22.368 14.712 21.6H18.768C18.672 22.392 18.6 23.184 18.6 24C18.6 24.816 18.672 25.608 18.768 26.4H14.712ZM15.696 28.8H19.236C19.62 30.3 20.172 31.74 20.892 33.072C18.7008 32.3225 16.855 30.805 15.696 28.8ZM19.236 19.2H15.696C16.855 17.195 18.7008 15.6775 20.892 14.928C20.1677 16.2791 19.6116 17.7137 19.236 19.2ZM24 33.552C23.004 32.112 22.224 30.516 21.708 28.8H26.292C25.776 30.516 24.996 32.112 24 33.552ZM26.808 26.4H21.192C21.084 25.608 21 24.816 21 24C21 23.184 21.084 22.38 21.192 21.6H26.808C26.916 22.38 27 23.184 27 24C27 24.816 26.916 25.608 26.808 26.4ZM27.108 33.072C27.828 31.74 28.38 30.3 28.764 28.8H32.304C31.1414 30.8019 29.2969 32.3184 27.108 33.072ZM29.232 26.4C29.328 25.608 29.4 24.816 29.4 24C29.4 23.184 29.328 22.392 29.232 21.6H33.288C33.48 22.368 33.6 23.172 33.6 24C33.6 24.828 33.48 25.632 33.288 26.4H29.232Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_537_1343">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        English
                    </div>
                </p>
            </div>
            <div className={styles.course_hero_backdrop}></div>
            <img src={bgImg} alt="" />
        </section>
    );
}

export default CourseHero;
