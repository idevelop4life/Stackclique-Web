import CourseDropdown from "./CourseDropdown";

function Playlist({ type = true, content }) {
    return (
        <>
            {!type ? (
                <h2
                    style={{
                        fontSize: 1.5 + "rem",
                        fontWeight: 600,
                        lineHeight: 20 + "px",
                        letterSpacing: 0.02 + "em",
                        textAlign: "left",
                    }}
                >
                    Course Content
                </h2>
            ) : (
                ""
            )}
            {content?.map((el, index) => {
                let isOpen;
                index <= content.length % 2
                    ? (isOpen = true)
                    : (isOpen = false);
                return (
                    <CourseDropdown
                        index={index}
                        type={type}
                        key={index}
                        state={isOpen}
                        header={el.header}
                    >
                        {el.content}
                    </CourseDropdown>
                );
            })}
        </>
    );
}

export default Playlist;
