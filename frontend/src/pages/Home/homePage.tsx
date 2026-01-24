import FAQSection from "../../components/faq";
import Hero from "../../components/hero";
import TalentSection from "../../components/talentCard";
import Testimonial from "../../components/testimonial";
import WhyChooseUs from "../../components/why-choose-us";

export default function HomePage() {
    return (
        <div className="flex flex-col gap-4">
            <Hero/>
            <TalentSection/>
            <WhyChooseUs/>
            <Testimonial/>
            <FAQSection/>

        </div>

    )
}