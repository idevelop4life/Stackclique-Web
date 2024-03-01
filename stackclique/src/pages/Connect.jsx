import { ConnectSideBar, MessageContainer } from "../components/ConnectPage";
import { Header } from "../components/ChatComponents";
import imgSample from "../assets/pics/4.jpg";
import { useState } from "react";
import DirectMessage from "../components/ChatComponents/DirectMessage";
import ChannelBar from "../components/ChatComponents/ChannelBar";
import Search from "../components/ChatComponents/Search";
import { inboxSchema } from "../utils/messageSchema";
import styles from "../styles/css/app.module.css";
import MetaTags from "../components/seo/MetaTags";

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

    const chatInbox = inboxSchema.filter((item) => {
        return !item.isGroupChat === true ? false : true;
    });
    const [msgModel, setMsgModel] = useState(chatInbox || null);
    const [showSidebar, setShowSideBar] = useState(true);
    const msgInbox = chatInbox[curChannel].data;
    return (
        <>
            <MetaTags
                title={`${chatInbox[curChannel].name} - Connect`}
                desc="Connect with other great minds now on Stackclique"
            />
            <section className="flex relative flex-wrap">
                <div className="w-[100%] bg-[#b3b6bd] h-[5rem] "></div>
                <Header
                    users={users}
                    channelList={msgModel}
                    curChannel={curChannel}
                >
                    <Search type={"classic"} placeholder="Search messages" />
                </Header>

                <section className="flex relative w-[100%] overflow-hidden">
                    <div
                        className={`${styles.sidebar_backdrop} ${
                            !showSidebar ? `${styles.hide}` : ""
                        }`}
                        onClick={() => {
                            console.log("Backdrop CLicked!");
                            setShowSideBar(!showSidebar);
                        }}
                    ></div>
                    <ConnectSideBar
                        customStyle={{ minHeight: 70 + "dvh" }}
                        showSidebar={showSidebar}
                    >
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
