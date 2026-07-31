import PageHero from "../../_components/ui/PageHero";
import DoctorGrid from "../../_components/sub/DoctorGrid";
import ConsultCTA from "../../_components/ui/ConsultCTA";

const doctors = [
  {
    name: "김도현",
    title: "한의학박사 · 척추신경추나의학회 인증의",
    specialty: "대표원장 · 체형·통증 클리닉",
    image: "/images/doctors/doctor-01.jpg",
    intro:
      "겉으로 드러난 증상보다 몸이 무너진 이유를 먼저 살핍니다.\n한 분의 환자를 처음부터 끝까지 책임지고 본다는 원칙으로 진료해왔습니다.",
    career: [
      "경희대학교 한의과대학 한의학박사",
      "前 ○○한방병원 진료부장",
      "前 ○○한의원 대표원장",
    ],
    societies: [
      "척추신경추나의학회 정회원",
      "대한한방비만학회 정회원",
      "대한스포츠한의학회 정회원",
    ],
  },
  {
    name: "이서연",
    title: "한의사 · 대한한방비만학회 전문가과정 수료",
    specialty: "진료원장 · 다이어트·미용 클리닉",
    image: "/images/doctors/doctor-02.jpg",
    intro:
      "체질을 먼저 파악하고, 무리한 감량 대신 몸에 맞는 속도로\n건강하게 변화할 수 있도록 함께합니다.",
    career: [
      "○○대학교 한의학과 졸업",
      "前 ○○한의원 진료원장",
      "前 ○○한방병원 진료의",
    ],
    societies: ["대한한방비만학회 회원", "대한여성한의학회 회원"],
  },
];

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        en="MEDICAL TEAM"
        title="의료진 소개"
        description="원장이 처음 상담부터 치료까지 함께합니다."
      />

      <DoctorGrid title="리브한의원 의료진" subtitle="OUR DOCTORS" doctors={doctors} />

      <ConsultCTA
        title="믿을 수 있는 원장님께 진료받으세요"
        subtitle={"1:1 전문 상담을 통해\n나에게 맞는 치료 방향을 안내해 드립니다."}
      />
    </>
  );
}
