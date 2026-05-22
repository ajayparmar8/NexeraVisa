import StudyCTA from "@/component/StudyVisa/StudyCTA";
import StudyDestinations from "@/component/StudyVisa/Studydestinations";
import Studylevels from "@/component/StudyVisa/Studylevels";
import StudyVisaHero from "@/component/StudyVisa/StudyVisaHero";
import StudyVisaRequirements from "@/component/StudyVisa/StudyVisaRequirements";
import StudyVisasection from "@/component/StudyVisa/Studyvisasection";
import StudyVisaServices from "@/component/StudyVisa/StudyVisaServices";
import WhyStudyAbroad from "@/component/StudyVisa/WhyStudyAbroad";
export default function studyvisa() {
    return (
        <>
        <StudyVisaHero />
        <StudyVisasection  />
        <Studylevels />
        <StudyDestinations />
        <WhyStudyAbroad />
        <StudyVisaServices  />
        <StudyVisaRequirements />
        <StudyCTA />
      
        </>
    )
}