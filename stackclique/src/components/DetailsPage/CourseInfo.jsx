import styles from "../../styles/css/app.module.css";

function CourseInfo() {
    return (
        <section>
            <CourseOverview />
        </section>
    );
}

function CourseOverview() {
    return (
        <>
            <div>
                <h2>About Course</h2>
                <p>
                    A Description On this course More like A summary of what
                    students would expect to learn who the course is for and why
                    they should enroll to take the course.A Description On this
                    course More like A summary of what students would expect to
                    learn who the course is for and why they should enroll to
                    take the courseA Description On this course More like A
                    summary of what students would expect to learn who the
                    course is for and why they should enroll to take the courseA
                    Description On this course More like A summary of what
                    students would expect to learn who the course is for and why
                    they should enroll to take the course
                </p>
            </div>

            <div>
                <h2>What you’ll learn</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Asperiores harum accusamus alias id deserunt nobis illo,
                    enim animi iure reprehenderit accusantium voluptate
                    voluptatum expedita, eaque aliquid rerum dolorem odit nisi
                    quo. Harum, doloribus. Quas, iusto excepturi enim ratione
                    inventore vero, aspernatur veniam delectus reiciendis non
                    saepe neque omnis optio quisquam nesciunt maiores officia
                    doloribus? Qui laboriosam cumque voluptates doloribus
                    deleniti tempore dolores, maiores assumenda perspiciatis non
                    laborum atque blanditiis magni.
                </p>
            </div>

            <div>
                <h2>Audience</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Natus maiores vero hic magni quam libero nisi inventore
                    nostrum optio, ea facere voluptatem necessitatibus delectus
                    porro labore animi. Consequatur, delectus doloribus!
                </p>
            </div>

            <div>
                <h4>Are there any course requirements or prerequisites?</h4>
                <ul className={styles.checklist}>
                    <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repudiandae iusto nobis error fugiat vitae magni
                        omnis aut minima id similique.
                    </li>
                    <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repudiandae iusto nobis error fugiat vitae magni
                        omnis aut minima id similique.
                    </li>
                    <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Repudiandae iusto nobis error fugiat vitae magni
                        omnis aut minima id similique.
                    </li>
                </ul>
            </div>

            <div className="relative flex">
                <h2 style={{ marginRight: 1 + "rem" }}>Features:</h2>
                <div className={styles.feature_list}>
                    <p>Language : English</p>
                    <p>Lectures : 35</p>
                    <p>Captions : Yes</p>
                    <p>Video : 11 total Hours</p>
                </div>
            </div>

            <div className="relative flex">
                <h2 style={{ marginRight: 1 + "rem" }}>Certificate:</h2>
                <p style={{ marginTop: 0.5 + "rem" }}>
                    A Stackclique Certificate would be given upon completion of
                    this course
                </p>
            </div>

            <div>
                <h2>
                    Available On <a href="#">iOS</a> and <a href="#">Android</a>
                </h2>
            </div>
        </>
    );
}

export default CourseInfo;
