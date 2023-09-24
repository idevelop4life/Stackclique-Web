import {
    AboutOurApp,
    Hero,
    WhyJoinStackclique,
} from "../components/HomeComponents";

export default function Home() {
    return (
        <main>
            <Hero />
            <WhyJoinStackclique />
            <AboutOurApp />
        </main>
    );
}
