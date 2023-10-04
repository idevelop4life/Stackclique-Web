import {
    AboutOurApp,
    Hero,
    WhyJoinStackclique,
    HomeSecondSection,
    BenefitsSection,
} from "../components/HomeComponents";

export default function Home() {
    return (
        <section>
            <Hero />
            <HomeSecondSection />
            <WhyJoinStackclique />
            <AboutOurApp />
            <BenefitsSection />
        </section>
    );
}
