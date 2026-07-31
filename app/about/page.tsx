import PageHero from "../_components/ui/PageHero";
import ProcessSection from "../_components/sub/ProcessSection";
import KnowhowSection from "../_components/sub/KnowhowSection";
import HospitalGallery from "../_components/home/HospitalGallery";
import ConsultCTA from "../_components/ui/ConsultCTA";
import type { ProcessStep } from "../_data/process";

const diagnosisSteps: ProcessStep[] = [
  {
    step: "01",
    title: "1:1 한의사 전문 진단",
    description:
      "원장이 직접 문진부터 진단까지 함께하며 체질과 증상의 원인을 살핍니다.",
  },
  {
    step: "02",
    title: "체계적인 검사",
    description:
      "체성분 분석, 자세·체형 측정 등 객관적인 데이터로 현재 상태를 확인합니다.",
  },
  {
    step: "03",
    title: "환자 맞춤형 치료",
    description:
      "추나요법·약침·한약 처방을 증상과 체질에 맞게 조합해 설계합니다.",
  },
];

const knowhowItems = [
  {
    icon: "藥",
    title: "엄선된 한약재",
    description:
      "GMP 인증을 받은 한약재만 사용하며, 환경호르몬 걱정 없는 파우치에 담아 안전하게 조제합니다.",
  },
  {
    icon: "湯",
    title: "믿을 수 있는 원내탕전",
    description:
      "리브한의원은 원내에서 직접 조제하여, 안심하고 드실 수 있는 한약을 처방합니다.",
  },
  {
    icon: "診",
    title: "원장 직접 진료",
    description: "상담부터 치료까지 대진 없이 원장이 처음부터 끝까지 함께합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        en="ABOUT LIV HANBANG"
        title="근본을 살피는 진료, 리브한의원"
        description="안녕하세요, 리브한의원입니다. 환자분 한 분 한 분께 진심과 정성을 다해 진료하겠습니다."
      />

      <ProcessSection
        title="진단 및 관리 프로세스"
        subtitle="PROCESS"
        steps={diagnosisSteps}
      />

      <KnowhowSection
        title="믿을 수 있는 한약"
        subtitle="OUR PROMISE"
        items={knowhowItems}
      />

      <HospitalGallery />

      <ConsultCTA
        title="리브한의원이 함께하겠습니다"
        subtitle={"몸의 근본을 살피는 정직한 진료,\n지금 상담을 통해 확인해보세요."}
      />
    </>
  );
}
