import { useEffect, useState } from "react";
import styles from "../../styles/css/app.module.css";
import "../../styles/css/app_root.css";
import BubbleReply from "./BubbleReply";
import { getCurrentTimestamp, randomIdNumber } from "../../utils/utils";

function ChatInput({ reply, setReply, user, currentMsg, setNewMesg }) {
    const formInitial = {
        id: randomIdNumber(),
        user,
        reply: null,
        text: "",
        timestamp: getCurrentTimestamp(),
    };
    const [formData, setFormData] = useState(formInitial);


    return (
        <>
            <form
                className="form_chat_box"
                onSubmit={(e) => {
                    e.preventDefault();
                    // Just for test purposes
                    setNewMesg([...currentMsg, formData]);

                    // Clear values after submission
                    setReply(formInitial.reply);
                    setFormData(formInitial);
                }}
            >
                {reply ? (
                    <div className={styles.onreply}>
                        <span
                            className={styles.cancelBtn}
                            onClick={() => {
                                setReply(null);
                            }}
                        >
                            X
                        </span>
                        <div className={styles.onreply_box}>
                            <BubbleReply
                                profile={reply?.user}
                                text={reply?.text }
                                userInfo={user}
                            />
                        </div>
                    </div>
                ) : (
                    ""
                )}

                <div className="input_icon_group">
                    <input type="file" name="" id="" />
                    <button type="button">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_633_3295)">
                                <path
                                    d="M28 0H20C8.9543 0 0 8.9543 0 20V28C0 39.0457 8.9543 48 20 48H28C39.0457 48 48 39.0457 48 28V20C48 8.9543 39.0457 0 28 0Z"
                                    fill="white"
                                />
                                <path
                                    d="M29.4 16.8V30.6C29.4 33.2521 27.252 35.4 24.6 35.4C21.948 35.4 19.8 33.2521 19.8 30.6V15.6C19.8 14.8044 20.1161 14.0413 20.6787 13.4787C21.2413 12.9161 22.0044 12.6 22.8 12.6C23.5956 12.6 24.3587 12.9161 24.9213 13.4787C25.4839 14.0413 25.8 14.8044 25.8 15.6V28.2001C25.8 28.8601 25.26 29.4 24.6 29.4C23.94 29.4 23.4 28.8601 23.4 28.2001V16.8H21.6V28.2001C21.6 28.9957 21.9161 29.7588 22.4787 30.3214C23.0413 30.884 23.8044 31.2001 24.6 31.2001C25.3956 31.2001 26.1587 30.884 26.7213 30.3214C27.2839 29.7588 27.6 28.9957 27.6 28.2001V15.6C27.6 12.948 25.452 10.8 22.8 10.8C20.148 10.8 18 12.948 18 15.6V30.6C18 34.248 20.952 37.2001 24.6 37.2001C28.248 37.2001 31.2 34.248 31.2 30.6V16.8H29.4Z"
                                    fill="#020202"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_633_3295">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div className="input_icon_group">
                    <input type="file" name="" id="" />
                    <button type="button">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_633_3299)">
                                <path
                                    d="M28 0H20C8.9543 0 0 8.9543 0 20V28C0 39.0457 8.9543 48 20 48H28C39.0457 48 48 39.0457 48 28V20C48 8.9543 39.0457 0 28 0Z"
                                    fill="white"
                                />
                                <path
                                    d="M24.0001 27.6C25.9921 27.6 27.5881 25.992 27.5881 24L27.6001 16.8C27.6001 14.808 25.9921 13.2 24.0001 13.2C22.0081 13.2 20.4001 14.808 20.4001 16.8V24C20.4001 25.992 22.0081 27.6 24.0001 27.6ZM22.5601 16.68C22.5601 15.888 23.2081 15.24 24.0001 15.24C24.7921 15.24 25.4401 15.888 25.4401 16.68L25.4281 24.12C25.4281 24.912 24.7921 25.56 24.0001 25.56C23.2081 25.56 22.5601 24.912 22.5601 24.12V16.68ZM30.3601 24C30.3601 27.6 27.3121 30.12 24.0001 30.12C20.6881 30.12 17.6401 27.6 17.6401 24H15.6001C15.6001 28.092 18.8641 31.4759 22.8001 32.0639V36H25.2001V32.0639C29.1361 31.4879 32.4001 28.104 32.4001 24H30.3601Z"
                                    fill="#020202"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_633_3299">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>

                <textarea
                    name="msgText"
                    id="text"
                    value={formData.text}
                    placeholder="Type here..."
                    className="input_field"
                    onChange={(e) => {
                        setFormData((prevData) => ({
                            ...prevData,
                            [e.target.id]: e.target.value,
                            id: randomIdNumber(),
                            reply: reply?.id || null,
                            timestamp: getCurrentTimestamp(),
                        }));
                    }}
                    required
                ></textarea>

                <div className="input_icon_group submit_btn">
                    <button type="submit">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_633_3291)">
                                <path
                                    d="M28 0H20C8.9543 0 0 8.9543 0 20V28C0 39.0457 8.9543 48 20 48H28C39.0457 48 48 39.0457 48 28V20C48 8.9543 39.0457 0 28 0Z"
                                    fill="white"
                                />
                                <path
                                    d="M37.0243 10.9757C36.9416 10.8931 36.8366 10.8363 36.7221 10.8126C36.6076 10.7888 36.4887 10.799 36.3799 10.8419L10.5799 21.0419C10.47 21.0853 10.3753 21.1602 10.3077 21.2573C10.2402 21.3543 10.2028 21.4691 10.2003 21.5873C10.1978 21.7055 10.2303 21.8218 10.2937 21.9216C10.357 22.0214 10.4485 22.1003 10.5565 22.1483L19.5289 26.1365L27.0001 20.9999L21.8635 28.4711L25.8517 37.4435C25.8989 37.5496 25.9758 37.6398 26.0731 37.703C26.1704 37.7663 26.284 37.7999 26.4001 37.7999H26.4127C26.5309 37.7974 26.6458 37.76 26.7428 37.6924C26.8399 37.6249 26.9148 37.5301 26.9581 37.4201L37.1581 11.6201C37.201 11.5114 37.2112 11.3924 37.1875 11.2779C37.1637 11.1635 37.107 11.0584 37.0243 10.9757Z"
                                    fill="#020202"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_633_3291">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </form>
        </>
    );
}

export default ChatInput;
