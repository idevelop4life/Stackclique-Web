import {
    AboutOurApp,
    Hero,
    WhyJoinStackclique,
    HomeSecondSection,
    BenefitsSection,
} from "../components/HomeComponents";
import MetaTags from "../components/seo/MetaTags";

export default function Home() {
    return (
        <section>
            <MetaTags 
            index={true} 
            follow={true} 
            />
            <Hero />
            <HomeSecondSection />
            <WhyJoinStackclique />
            <AboutOurApp />
            <BenefitsSection />
        </section>
    );
}
