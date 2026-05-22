import TouristDestinations from "@/component/TouristVisa/Touristdestinations";
import TouristVisaSection from "@/component/TouristVisa/Touristvisasection";
import TouristVisaTypes from "@/component/TouristVisa/TouristVisaTypes";
import TouristVisaHero from "@/component/TouristVisa/TourtistVisaHero";
    
export default function touristvisa() {
    return (
        <>
        <TouristVisaHero />
        <TouristVisaSection />  
        <TouristDestinations/>
        <TouristVisaTypes  />
        </>
    )
}