export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "상담 신청",
    description: "전화·온라인으로 편하게 상담을 신청해 주세요.",
  },
  {
    step: "02",
    title: "1:1 진단",
    description: "원장이 직접 문진하고 체질과 증상의 원인을 살핍니다.",
  },
  {
    step: "03",
    title: "정밀 검사",
    description: "체성분·자세 분석 등 객관적인 데이터로 상태를 확인합니다.",
  },
  {
    step: "04",
    title: "맞춤 처방",
    description: "증상과 체질에 맞는 치료·한약을 설계해 드립니다.",
  },
];
