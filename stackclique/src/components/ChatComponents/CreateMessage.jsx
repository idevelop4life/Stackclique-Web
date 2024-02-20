import "../../styles/css/app_root.css";

function CreateMessage({ click = null, customStyle = {} }) {
    return (
        <button
            type="button"
            className="msg_btn"
            onClick={click}
            style={customStyle}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.95 3.59985H3.6C3.04305 3.59985 2.5089 3.8211 2.11508 4.21493C1.72125 4.60876 1.5 5.1429 1.5 5.69985V20.3998C1.5 20.9568 1.72125 21.4909 2.11508 21.8848C2.5089 22.2786 3.04305 22.4998 3.6 22.4998H18.3C18.857 22.4998 19.3911 22.2786 19.7849 21.8848C20.1787 21.4909 20.4 20.9568 20.4 20.3998V13.0499"
                    stroke="#FDFDFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M18.825 2.02494C19.2428 1.60723 19.8093 1.37256 20.4 1.37256C20.9908 1.37256 21.5573 1.60723 21.975 2.02494C22.3928 2.44266 22.6274 3.00921 22.6274 3.59994C22.6274 4.19068 22.3928 4.75723 21.975 5.17494L12 15.1499L7.80005 16.1999L8.85005 11.9999L18.825 2.02494Z"
                    stroke="#FDFDFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}

export default CreateMessage;
