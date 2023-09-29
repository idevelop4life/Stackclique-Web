
import { Hero, HomeSecondSection } from "../components/HomeComponents";
import {
    AboutOurApp,
    Hero,
    WhyJoinStackclique,
} from "../components/HomeComponents";

export default function Home() {
    return (
        <main>
            <Hero />
            <HomeSecondSection />
            <WhyJoinStackclique />
            <AboutOurApp />
        </main>
    );
}
