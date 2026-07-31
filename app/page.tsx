import HeroSlider from "./_components/home/HeroSlider";
import TreatmentCards from "./_components/home/TreatmentCards";
import ConstitutionQuiz from "./_components/home/ConstitutionQuiz";
import DoctorIntro from "./_components/home/DoctorIntro";
import HospitalGallery from "./_components/home/HospitalGallery";
import LocationSection from "./_components/home/LocationSection";
import ConsultCTA from "./_components/ui/ConsultCTA";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <TreatmentCards />
      <ConstitutionQuiz />
      <DoctorIntro />
      <HospitalGallery />
      <LocationSection />
      <ConsultCTA
        bgImage="/images/hero/hero_hanbang_01.png"
        bgImageMobile="/images/hero/hero_hanbang_01_mo.png"
      />
    </>
  );
}
