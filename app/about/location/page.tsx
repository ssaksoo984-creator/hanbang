import PageHero from "../../_components/ui/PageHero";
import LocationSection from "../../_components/home/LocationSection";
import TransitInfo from "../../_components/sub/TransitInfo";
import ConsultCTA from "../../_components/ui/ConsultCTA";

const transitItems = [
  {
    label: "지하철",
    description: "○○역 ○번 출구에서 도보 5분",
  },
  {
    label: "버스",
    description: "○○정류장 하차\n간선 000, 지선 000",
  },
  {
    label: "자가용",
    description: "건물 내 주차 1시간 무료\n발렛 파킹 가능",
  },
];

export default function LocationPage() {
  return (
    <>
      <PageHero
        en="LOCATION"
        title="언제든 편하게 찾아오세요"
        description="아래에서 오시는 길과 교통편을 확인하실 수 있습니다."
      />

      <LocationSection />

      <TransitInfo title="교통 안내" subtitle="TRANSIT" items={transitItems} />

      <ConsultCTA
        title="방문 전 상담이 궁금하신가요?"
        subtitle={"오시기 전 전화나 온라인으로\n간단히 상담받아보세요."}
      />
    </>
  );
}
