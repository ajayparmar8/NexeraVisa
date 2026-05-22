import StudyDestinations from "@/component/StudyVisa/Studydestinations";
import Studylevels from "@/component/StudyVisa/Studylevels";
import StudyVisaHero from "@/component/StudyVisa/StudyVisaHero";
import StudyVisasection from "@/component/StudyVisa/Studyvisasection";

export default function studyvisa() {
    return (
        <>
        <StudyVisaHero />
        <StudyVisasection  />
        <Studylevels />
        <StudyDestinations />
      
        </>
    )
}