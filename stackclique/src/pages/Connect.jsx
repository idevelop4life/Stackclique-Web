import {
    ConnectPageHeader,
    ConnectSideBar,
    MessageContainer,
} from "../components/ConnectPage";

export default function Connect() {
    return (
        <section>
            <ConnectPageHeader />
            <section className="lg:min-h-[calc(100vh-228px)] flex min-h-[calc(100vh-180px)] max-h-[calc(100vh-180px)] md:min-h-[calc(100vh-170px)] md:max-h-[calc(100vh-170px)] lg:max-h-[calc(100vh-228px)]">
                <ConnectSideBar />
                <MessageContainer />
            </section>
        </section>
    );
}
