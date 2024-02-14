import imgSample from "../assets/pics/4.jpg";
import { useState } from "react";
import { ConnectSideBar, MessageContainer } from "../components/ConnectPage";
import {
    ChannelList,
    ChatBox,
    Header,
    ChannelBar,
    DirectMessage,
    Search,
    CreateMessage,
} from "../components/ChatComponents";

function Message() {
    const [curChannel, setChannel] = useState(0);

    const users = [
        {
            name: "Samson Peter",
            img: imgSample,
        },
        {
            name: "Peter Mapal",
            img: imgSample,
        },
        {
            name: "Sharon Connel",
            img: imgSample,
        },
        {
            name: "Aaron Walter",
            img: imgSample,
        },
    ];

    const channelsList = [
        { id: 1, name: "Product Management" },
        { id: 2, name: "UI/UX Designers" },
        { id: 3, name: "Data Analysts" },
        { id: 4, name: "Photography" },
        { id: 5, name: "Cyber security" },
        { id: 6, name: "App Developers" },
    ];

    const [msgModel, setMsgModel] = useState([
        {
            id: 1,
            user: {
                id: 1,
                name: "Unnamed Dev",
            },
            reply: null,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque ratione!",
            timestamp: "2022-08-05T02:09:44.597Z",
        },
        {
            id: 2,
            user: {
                id: 2,
                name: "Agunwami",
            },
            reply: 1,
            text: "Lorem ipsum dolor sit amet.",
            timestamp: "2022-08-08T15:09:44.597Z",
        },
        {
            id: 3,
            user: {
                id: 1,
                name: "Unnamed Dev",
            },
            reply: null,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
            timestamp: "2022-08-11T07:09:44.597Z",
        },
        {
            id: 4,
            user: {
                id: 2,
                name: "Agunwami",
            },
            reply: null,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias.",
            timestamp: "2024-01-30T10:09:44.597Z",
        },
        {
            id: 5,
            user: {
                id: 1,
                name: "Unnamed Dev",
            },
            reply: null,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias in itaque ratione! Anu",
            timestamp: "2024-02-09T11:08:48.597Z",
        },
    ]);
    return (
        <>
            <section className="flex relative flex-wrap">
                <div className="w-[100%] bg-[#b3b6bd] h-[7rem]"></div>
                <section className="flex relative w-[100%]">
                    <ConnectSideBar
                        customStyle={{
                            width: 48 + "dvw",
                            backgroundColor: "#d9d9d9",
                            color: "#242424",
                            justifyContent: "center", 
                        }}
                    >
                        <div className="flex relative gap-6 items-center mb-[1rem]">
                            <Search
                                type={"classic"}
                                placeholder="Search messages"
                                customStyle={{
                                    borderRadius: 16 + "px",
                                    height: 3.15 + "rem",
                                }}
                            />
                            <CreateMessage
                                customStyle={{ marginLeft: 1 + "rem" }}
                            />
                        </div>
                        <DirectMessage
                            customStyles={{ minHeight: 60 + "dvh" }}
                            type=""
                            messages={msgModel}
                        />
                    </ConnectSideBar>
                    <MessageContainer
                        // msgModel={msgModel}
                        setMsgModel={setMsgModel}
                    />
                </section>
            </section>
        </>
    );
}

export default Message;
