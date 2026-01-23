import FAQSection from "../../components/faq";
import Hero from "../../components/hero";
import TalentSection from "../../components/talentCard";

export default function HomePage() {
    return (
        <div className="flex flex-col">
            <Hero/>
            <TalentSection/>
            <FAQSection/>

        </div>

    )
}