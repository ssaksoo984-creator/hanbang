import PageHero from "../../_components/ui/PageHero";
import PriceTable from "../../_components/sub/PriceTable";
import ConsultCTA from "../../_components/ui/ConsultCTA";

const feeGroups = [
  {
    category: "다이어트 클리닉",
    items: [
      { name: "다이어트 상담·체성분 검사", price: "무료" },
      { name: "체질 맞춤 다이어트 한약 (1개월)", price: "300,000원~" },
      { name: "산후 다이어트 프로그램 (1개월)", price: "350,000원~" },
    ],
  },
  {
    category: "미용 클리닉",
    items: [
      { name: "한방 동안침 (1회)", price: "50,000원~" },
      { name: "산삼약침 리프팅 (1회)", price: "80,000원~" },
    ],
  },
  {
    category: "체형교정 클리닉",
    items: [
      { name: "체형 검사·자세 분석", price: "30,000원" },
      { name: "추나요법 (특수 추나, 1회)", price: "50,000원~" },
    ],
  },
  {
    category: "척추관절 클리닉",
    items: [
      { name: "약침 시술 (1회)", price: "30,000원~" },
      { name: "도수·재활 프로그램 (1회)", price: "50,000원~" },
    ],
  },
  {
    category: "보양 클리닉",
    items: [
      { name: "공진단 (1환)", price: "50,000원~" },
      { name: "체질 맞춤 보약 (1제)", price: "400,000원~" },
    ],
  },
  {
    category: "교통사고 클리닉",
    items: [
      {
        name: "자동차보험 진료",
        price: "본인부담금 없음",
        note: "대인접수 시 추나·약침 등 치료비 별도 부담 없이 진행됩니다.",
      },
    ],
  },
];

export default function FeesPage() {
  return (
    <>
      <PageHero
        en="NON-COVERED FEES"
        title="비급여 안내"
        description="치료 항목별 비급여 진료비를 안내해 드립니다."
      />

      <PriceTable
        title="진료비 안내"
        subtitle="PRICE"
        groups={feeGroups}
        footnote={
          "위 비용은 예시이며, 체질과 증상에 따라 달라질 수 있습니다.\n정확한 비용은 진료 상담 후 안내해 드립니다."
        }
      />

      <ConsultCTA
        title="비용이 궁금하신가요?"
        subtitle={"상담을 통해 나에게 필요한 치료와\n정확한 비용을 안내해 드립니다."}
      />
    </>
  );
}
