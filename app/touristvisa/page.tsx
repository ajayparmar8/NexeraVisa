import TouristCTA from "@/component/TouristVisa/TouristCTA";
import TouristDestinations from "@/component/TouristVisa/Touristdestinations";
import TouristFAQ from "@/component/TouristVisa/TouristFAQ";
import TouristProcess from "@/component/TouristVisa/TouristProcess";
import TouristVisaRequirements from "@/component/TouristVisa/TouristVisaRequirements";
import TouristVisaSection from "@/component/TouristVisa/Touristvisasection";
import TouristVisaServices from "@/component/TouristVisa/TouristVisaServices";
import TouristVisaTips from "@/component/TouristVisa/TouristVisaTips";
import TouristVisaTypes from "@/component/TouristVisa/TouristVisaTypes";
import TouristVisaHero from "@/component/TouristVisa/TourtistVisaHero";
    
export default function touristvisa() {
    return (
        <>
        <TouristVisaHero />
        <TouristVisaSection />  
        <TouristDestinations/>
        <TouristVisaTypes  />
        <TouristVisaRequirements />
        <TouristVisaTips />
        <TouristProcess />
        <TouristVisaServices />
        <TouristFAQ />
        <TouristCTA />
        </>
    )
}