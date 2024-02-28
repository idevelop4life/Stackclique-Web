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
import { inboxSchema, msgSchema, userAccounts } from "../utils/messageSchema";
import MetaTags from "../components/seo/MetaTags";
import { useOutletContext } from "react-router-dom";

function Message() {
    const [person] = useOutletContext();
    // const [showSidebar, setSidebar] = useState(true)
    const chatInbox = inboxSchema.filter((item) => {
        return item.isGroupChat === true ? false : true;
    });
    const [msgModel, setMsgModel] = useState(chatInbox);
    const [msgInbox, setMsgInbox] = useState(null);
    const userName = [
        ...new Set(
            msgInbox
                ?.filter((el) => {
                    return el.user.id !== person.id;
                })
                .map((el) => el.user.name),
        ),
    ];
    return (
        <>
            <MetaTags
                title={
                    !msgInbox
                        ? "Messages"
                        : `${
                              userName.length > 1
                                  ? `${userName[0]} and ${userName.length - 1}`
                                  : `${userName[0]}`
                          } - Messages`
                }
                desc="Connect with other great minds now on Stackclique"
            />
            <section className="flex relative flex-wrap">
                <div className="w-[100%] bg-[#b3b6bd] h-[7rem]"></div>
                <section className="flex relative w-[100%]">
                    <ConnectSideBar
                        customStyle={{
                            minWidth: 48 + "dvw",
                            backgroundColor: "#d9d9d9",
                            color: "#242424",
                            justifyContent: "center",
                        }}
                        showSidebar={msgInbox ? false : true}
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
