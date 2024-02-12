import { ChannelList, ChatBox, Header } from "../components/ChatComponents";
import imgSample from "../assets/pics/4.jpg";

function Message() {
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
    return (
        <>
            <section className="flex relative flex-wrap">
                <div className="w-[100%] bg-[#b3b6bd] h-[7rem]"></div>
                <Header users={users} />
                <section className="w-[100%] h-[50dvh]">
                    <ChannelList />
                    <ChatBox />
                </section>
            </section>
        </>
    );
}

export default Message;
