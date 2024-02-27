import { ConnectSideBar, MessageContainer } from "../components/ConnectPage";
import { Header } from "../components/ChatComponents";
import imgSample from "../assets/pics/4.jpg";
import { useState } from "react";
import DirectMessage from "../components/ChatComponents/DirectMessage";
import ChannelBar from "../components/ChatComponents/ChannelBar";
import Search from "../components/ChatComponents/Search";
import { inboxSchema } from "../utils/messageSchema";

export default function Connect() {
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

    // const channelsList = [
    //     { id: 1, name: "Product Management" },
    //     { id: 2, name: "UI/UX Designers" },
    //     { id: 3, name: "Data Analysts" },
    //     { id: 4, name: "Photography" },
    //     { id: 5, name: "Cyber security" },
    //     { id: 6, name: "App Developers" },
    // ];

    const chatInbox = inboxSchema.filter((item) => {
        return !item.isGroupChat === true ? false : true;
    });
    const [msgModel, setMsgModel] = useState(chatInbox || null);
    const msgInbox = chatInbox[curChannel].data;
    return (
        <>
            <section className="flex relative flex-wrap">
                <div className="w-[100%] bg-[#b3b6bd] h-[5rem] "></div>
                <Header
                    users={users}
                    channelList={msgModel}
                    curChannel={curChannel}
                >
                    <Search type={"classic"} placeholder="Search messages" />
                </Header>

                <section className="flex relative w-[100%]">
                    <ConnectSideBar customStyle={{ minHeight: 70 + "dvh" }}>
                        <ChannelBar
                            channelList={chatInbox}
                            curChannel={curChannel}
                            setChannel={setChannel}
                        />
                        <DirectMessage
                            type="notify"
                            customStyles={{ minHeight: 60 + "dvh" }}
                            messages={msgModel}
                            // setMessage={setMsgInbox}
                        />
                    </ConnectSideBar>
                    <MessageContainer
                        msgModel={msgInbox}
                        setMsgModel={setMsgModel}
                    />
                </section>
            </section>
        </>
    );
}

{
    /* <section className="flex relative flex-wrap">
                <div className="w-[100%] bg-[#b3b6bd] h-[7rem]"></div>
                <Header users={users} />
                <section className="w-[100%] h-[50dvh]">
                    <ChannelList />
                    <ChatBox />
                </section>
            </section> */
}
