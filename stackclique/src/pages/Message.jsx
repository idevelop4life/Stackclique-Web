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
import { inboxSchema, msgSchema } from "../utils/messageSchema";

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

    const chatInbox = inboxSchema.filter((item) => {
        return item.isGroupChat === true ? false : true;
    });

    const [msgModel, setMsgModel] = useState(chatInbox);
    const [msgInbox, setMsgInbox] = useState(null)

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
                            type="preview"
                            messages={msgModel}
                            setMessage={setMsgInbox}
                        />
                    </ConnectSideBar>
                    <MessageContainer
                        msgModel={msgInbox}
                        setMsgModel={setMsgInbox}
                    />
                </section>
            </section>
        </>
    );
}

export default Message;
