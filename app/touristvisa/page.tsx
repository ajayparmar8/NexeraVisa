import TouristDestinations from "@/component/TouristVisa/Touristdestinations";
import TouristVisaSection from "@/component/TouristVisa/Touristvisasection";
import TouristVisaHero from "@/component/TouristVisa/TourtistVisaHero";
    
export default function touristvisa() {
    return (
        <>
        <TouristVisaHero />
        <TouristVisaSection />  
        <TouristDestinations/>
        </>
    )
}