import CTA from "@/component/WorkVisa/CTA";
import WhyChooseUs from "@/component/WorkVisa/WhyChooseUs";
import WorkVisaDestinations from "@/component/WorkVisa/WorkVisaDestinations";
import WorkVisaHero from "@/component/WorkVisa/WorkVisaHero";
import WorkVisaProcess from "@/component/WorkVisa/WorkVisaProcess";
import WorkVisaRequirements from "@/component/WorkVisa/WorkVisaRequirements";
import WorkVisaSection from "@/component/WorkVisa/WorkVisaSection";

export default function workvisa() {
    return (
        <>
        <WorkVisaHero />
        <WorkVisaSection  />
        <WorkVisaDestinations />
        <WorkVisaRequirements/>
        <WhyChooseUs    />
        <WorkVisaProcess />
        <CTA />
        </>

    )
}