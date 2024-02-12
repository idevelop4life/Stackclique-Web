import { useEffect, useState } from "react";
import styles from "../../styles/css/app.module.css";
import Search from "./Search";
import { filterSearch } from "../../utils/utils";
function ChannelTab({ pins, users, channelList, curChannel, updateChannel }) {
    const [optionModal, setOptionModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const category = channelList[curChannel];

    return (
        <>
            <div className={styles.channel_tab}>
                <div className={styles.dropdown_menu}>
                    <div
                        className={styles.menu_header}
                        onClick={() => setOptionModal(!optionModal)}
                    >
                        {category.name || "category name"}
                        <span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_383_2549)">
                                    <path
                                        d="M14 0H10C4.47715 0 0 4.47715 0 10V14C0 19.5228 4.47715 24 10 24H14C19.5228 24 24 19.5228 24 14V10C24 4.47715 19.5228 0 14 0Z"
                                        fill="#F7F7F7"
                                    />
                                    <path
                                        d="M8.3999 10.2L11.9999 13.8L15.5999 10.2"
                                        stroke="#020202"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_383_2549">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                    </div>
                    <ul
                        className={`${styles.menu_list} ${
                            optionModal ? "show" : ""
                        } modal_box`}
                    >
                        <li
                            onClick={() => {
                                setOptionModal(!optionModal);
                                setEditModal(!editModal);
                            }}
                        >
                            Channel Description
                        </li>
                        <li>Exit Channel</li>
                    </ul>
                </div>
                <ul className={styles.tab_option}>
                    <li>
                        <span>
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_633_3425)">
                                    <path
                                        d="M28 0H20C8.9543 0 0 8.9543 0 20V28C0 39.0457 8.9543 48 20 48H28C39.0457 48 48 39.0457 48 28V20C48 8.9543 39.0457 0 28 0Z"
                                        fill="#F7F7F7"
                                    />
                                    <path
                                        d="M26.3996 14.4V20.4C26.3996 21.744 26.8436 22.992 27.5996 24H20.3996C21.1796 22.968 21.5996 21.72 21.5996 20.4V14.4H26.3996ZM29.9996 12H17.9996C17.3396 12 16.7996 12.54 16.7996 13.2C16.7996 13.86 17.3396 14.4 17.9996 14.4H19.1996V20.4C19.1996 22.392 17.5916 24 15.5996 24V26.4H22.7636V34.8L23.9636 36L25.1636 34.8V26.4H32.3996V24C30.4076 24 28.7996 22.392 28.7996 20.4V14.4H29.9996C30.6596 14.4 31.1996 13.86 31.1996 13.2C31.1996 12.54 30.6596 12 29.9996 12Z"
                                        fill="#020202"
                                        fillOpacity="0.8"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_633_3425">
                                        <rect
                                            width="48"
                                            height="48"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <i>{pins || 0}</i> pinned
                    </li>
                    <li>
                        <span>
                            <svg
                                width="48"
                                height="48"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_633_3431)">
                                    <path
                                        d="M28 0H20C8.9543 0 0 8.9543 0 20V28C0 39.0457 8.9543 48 20 48H28C39.0457 48 48 39.0457 48 28V20C48 8.9543 39.0457 0 28 0Z"
                                        fill="#F7F7F7"
                                    />
                                    <path
                                        d="M23.9996 24.9C25.9556 24.9 27.6836 25.368 29.0876 25.98C30.3836 26.556 31.1996 27.852 31.1996 29.256V31.2H16.7996V29.268C16.7996 27.852 17.6156 26.556 18.9116 25.992C20.3156 25.368 22.0436 24.9 23.9996 24.9ZM14.3996 25.2C15.7196 25.2 16.7996 24.12 16.7996 22.8C16.7996 21.48 15.7196 20.4 14.3996 20.4C13.0796 20.4 11.9996 21.48 11.9996 22.8C11.9996 24.12 13.0796 25.2 14.3996 25.2ZM15.7556 26.52C15.3116 26.448 14.8676 26.4 14.3996 26.4C13.2116 26.4 12.0836 26.652 11.0636 27.096C10.6289 27.2819 10.2583 27.5914 9.99803 27.9861C9.73774 28.3808 9.5992 28.8433 9.59961 29.316V31.2H14.9996V29.268C14.9996 28.272 15.2756 27.336 15.7556 26.52ZM33.5996 25.2C34.9196 25.2 35.9996 24.12 35.9996 22.8C35.9996 21.48 34.9196 20.4 33.5996 20.4C32.2796 20.4 31.1996 21.48 31.1996 22.8C31.1996 24.12 32.2796 25.2 33.5996 25.2ZM38.3996 29.316C38.3996 28.344 37.8236 27.48 36.9356 27.096C35.8834 26.6369 34.7477 26.4 33.5996 26.4C33.1316 26.4 32.6876 26.448 32.2436 26.52C32.7236 27.336 32.9996 28.272 32.9996 29.268V31.2H38.3996V29.316ZM23.9996 16.8C25.9916 16.8 27.5996 18.408 27.5996 20.4C27.5996 22.392 25.9916 24 23.9996 24C22.0076 24 20.3996 22.392 20.3996 20.4C20.3996 18.408 22.0076 16.8 23.9996 16.8Z"
                                        fill="#020202"
                                        fillOpacity="0.8"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_633_3431">
                                        <rect
                                            width="48"
                                            height="48"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <i>{users?.length || 0}</i> members
                    </li>
                </ul>
            </div>

            {editModal ? (
                <DropdownModal
                    editModal={editModal}
                    setModal={setEditModal}
                    categoryName={category.name}
                    users={users}
                />
            ) : (
                ""
            )}
        </>
    );
}

function DropdownModal({ editModal, setModal, categoryName, users }) {
    const [modalDisplay, setModalDisplay] = useState(true);
    const { active } = styles;
    const [activeOption, setActiveOption] = useState(0);
    const modalOption = [
        {
            title: <>Channel Description</>,
        },
        {
            title: (
                <>
                    Members <span>{users?.length || 0}</span>
                </>
            ),
        },
        {
            title: <>Files</>,
        },
    ];
    return (
        <>
            <div
                className={`${styles.setting_modal} ${
                    editModal ? "show" : ""
                } modal_box`}
            >
                <div className={styles.setting_modal_header}>
                    {categoryName || "category name"}
                </div>
                <ul className={styles.setting_modal_option}>
                    {modalOption.map((value, key) => {
                        return (
                            <li
                                key={key}
                                className={activeOption === key ? active : ""}
                                onClick={() => {
                                    setActiveOption(key);
                                }}
                            >
                                {value.title}
                            </li>
                        );
                    })}
                </ul>
                <section className={styles.setting_modal_body}>
                    <SettingModal
                        categoryName={categoryName}
                        activeItem={activeOption}
                        users={users}
                    />
                </section>
            </div>
            <div
                className={`modal_backdrop ${!modalDisplay ? "hidden" : ""}`}
                onClick={() => {
                    setModal(!editModal);
                    setModalDisplay(!modalDisplay);
                }}
            ></div>
        </>
    );
}

function SettingModal({ activeItem, categoryName, users }) {
    switch (activeItem) {
        case 0:
            return <Channel categoryName={categoryName} />;
        case 1:
            return <Members users={users} />;
        case 2:
            return <Files />;
    }
}

function Channel({ categoryName }) {
    return (
        <>
            <div className={`${styles.body_info} w-[80%]`}>
                This group was created for {categoryName || "channel category"}{" "}
                beginners
            </div>
            <div className={styles.body_content}>
                <h2 className="flex-[100%]">Settings</h2>
                <div className="mt-[1.5rem]">
                    <h5>Media visibility</h5>
                    <ul className="mt-[0.75rem]">
                        <li>
                            <input
                                type="radio"
                                name="visibility_btn"
                                id="visibility_yes"
                            />
                            <span className="checkmark"></span>
                            <label htmlFor="visibility_yes">Yes</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="visibility_btn"
                                id="visibility_no"
                            />
                            <span className="checkmark"></span>
                            <label htmlFor="visibility_yes">No</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="visibility_btn"
                                id="visibility_default"
                                defaultChecked
                            />
                            <span className="checkmark"></span>
                            <label htmlFor="visibility_yes">Default</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.body_content}>
                <h2 className="w-[40%]">Mute Notification</h2>
                <div className={styles.input_group}>
                    <div className="toggle_group">
                        <div className="toggle_btn_circle"></div>
                        <input
                            type="checkbox"
                            className="toggle_btn"
                            name=""
                            id=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

function Members({ users }) {
    const [userSearch, setUserSearch] = useState(users);
    const [membersOutput, setMembersOutput] = useState(userSearch || users);
    useEffect(() => {
        setMembersOutput(userSearch || users);
    }, [membersOutput, userSearch, users]);

    return (
        <>
            <div className={styles.body_content}>
                <Search
                    type={"minimalistic"}
                    placeholder={"Find members"}
                    classCustom={"w-[80%]"}
                    onChangeFun={(e) => {
                        setUserSearch(filterSearch(e.target.value, users));
                    }}
                />
            </div>
            <div className={styles.body_content}>
                <ul>
                    {membersOutput?.map((el, key) => {
                        return (
                            <li key={key} className={styles.member_item}>
                                <span>
                                    <img src={el.img} alt={`${el.name}`} />
                                </span>
                                {el.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

function Files({ media }) {
    // const [userSearch, setUserSearch] = useState(users);
    // const [membersOutput, setMembersOutput] = useState(userSearch || users);
    // useEffect(() => {
    //     setMembersOutput(userSearch || users);
    // }, [membersOutput, userSearch, users]);
    return (
        <>
            <div className={styles.body_content}>
                <Search
                    type={"minimalistic"}
                    placeholder={"Search file"}
                    classCustom={"w-[80%]"}
                    onChangeFun={(e) => {
                        // setUserSearch(filterSearch(e.target.value, users));
                    }}
                />
                <div className={styles.body_content}>
                    {!media ? (
                        <p>There aren’t any files to see here right now.</p>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
}

export default ChannelTab;
