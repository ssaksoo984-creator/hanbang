export type ConstitutionType = "taeyang" | "taeeum" | "soyang" | "soeum";

export interface QuizOption {
  label: string;
  type: ConstitutionType;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
}

// 문항 순서 : 태양 · 태음 · 소양 · 소음
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "나의 체형은?",
    options: [
      { label: "상체가 발달하고 어깨가 넓다", type: "taeyang" },
      { label: "골격이 굵고 살집이 있다", type: "taeeum" },
      { label: "가슴은 발달하고 하체는 약하다", type: "soyang" },
      { label: "마르고 왜소한 편이다", type: "soeum" },
    ],
  },
  {
    id: 2,
    text: "소화력은?",
    options: [
      { label: "보통이다", type: "taeyang" },
      { label: "잘 먹고 소화도 잘된다", type: "taeeum" },
      { label: "빨리 먹고 급하다", type: "soyang" },
      { label: "조금만 먹어도 더부룩하다", type: "soeum" },
    ],
  },
  {
    id: 3,
    text: "더위·추위 중 힘든 쪽은?",
    options: [
      { label: "둘 다 무난하다", type: "taeyang" },
      { label: "더위에 약하다", type: "taeeum" },
      { label: "더위·열이 많다", type: "soyang" },
      { label: "추위를 많이 탄다", type: "soeum" },
    ],
  },
  {
    id: 4,
    text: "땀은 어떤가?",
    options: [
      { label: "적당히 난다", type: "taeyang" },
      { label: "땀이 많고 나면 개운하다", type: "taeeum" },
      { label: "열나면 잘 난다", type: "soyang" },
      { label: "땀이 적고 나면 지친다", type: "soeum" },
    ],
  },
  {
    id: 5,
    text: "성격에 가까운 것은?",
    options: [
      { label: "과감하고 독창적이다", type: "taeyang" },
      { label: "느긋하고 묵직하다", type: "taeeum" },
      { label: "활발하고 급하다", type: "soyang" },
      { label: "꼼꼼하고 내향적이다", type: "soeum" },
    ],
  },
  {
    id: 6,
    text: "즐겨 찾는 음식은?",
    options: [
      { label: "담백한 것", type: "taeyang" },
      { label: "육류·기름진 것", type: "taeeum" },
      { label: "시원한 것·해산물", type: "soyang" },
      { label: "따뜻하고 소화 쉬운 것", type: "soeum" },
    ],
  },
  {
    id: 7,
    text: "물은 얼마나 마시나?",
    options: [
      { label: "보통이다", type: "taeyang" },
      { label: "많이 마신다", type: "taeeum" },
      { label: "갈증이 잦다", type: "soyang" },
      { label: "별로 안 마신다", type: "soeum" },
    ],
  },
  {
    id: 8,
    text: "수면·컨디션은?",
    options: [
      { label: "잠은 잘 잔다", type: "taeyang" },
      { label: "자도 개운함이 덜하다", type: "taeeum" },
      { label: "잠들기 어렵고 얕다", type: "soyang" },
      { label: "예민하고 잘 깬다", type: "soeum" },
    ],
  },
  {
    id: 9,
    text: "스트레스 받으면?",
    options: [
      { label: "밖으로 표출한다", type: "taeyang" },
      { label: "안으로 담아둔다", type: "taeeum" },
      { label: "화가 잘 난다", type: "soyang" },
      { label: "소화가 먼저 안 된다", type: "soeum" },
    ],
  },
  {
    id: 10,
    text: "평소 대변·소화 리듬은?",
    options: [
      { label: "규칙적이다", type: "taeyang" },
      { label: "원활한 편이다", type: "taeeum" },
      { label: "변비·설사를 오간다", type: "soyang" },
      { label: "무르거나 예민하다", type: "soeum" },
    ],
  },
];

export interface QuizResult {
  type: ConstitutionType;
  title: string;
  tagline: string;
  summary: string;
  features: string[];
  clinic: { label: string; href: string };
}

export const quizResults: Record<ConstitutionType, QuizResult> = {
  taeyang: {
    type: "taeyang",
    title: "태양인",
    tagline: "상체가 발달한 드문 체질",
    summary:
      "폐 기운이 강해 상체가 발달하고 기상이 곧은, 한의학에서도 드물게 보는 체질입니다.",
    features: [
      "어깨·가슴 등 상체가 발달한 체형",
      "과감하고 독창적인 진취적 성격",
      "하체가 약해 다리·허리 관리가 중요",
    ],
    clinic: { label: "체질 맞춤 보약", href: "/care/custom-tonic" },
  },
  taeeum: {
    type: "taeeum",
    title: "태음인",
    tagline: "살이 잘 찌는 체질",
    summary:
      "체격이 크고 흡수력이 좋아 살이 잘 찌는 체질로, 꾸준한 관리가 핵심입니다.",
    features: [
      "골격이 굵고 살집이 있는 체형",
      "느긋하고 묵직한 성격, 인내심이 강함",
      "땀을 충분히 내야 컨디션이 개운해짐",
    ],
    clinic: { label: "체질 맞춤 다이어트", href: "/diet/custom" },
  },
  soyang: {
    type: "soyang",
    title: "소양인",
    tagline: "열이 많고 급한 편",
    summary:
      "비 기운이 발달해 반응이 빠르고 열이 많아, 몸의 열을 다스리는 관리가 필요한 체질입니다.",
    features: [
      "가슴은 발달하고 하체는 약한 체형",
      "활발하고 급한 성격, 순발력이 좋음",
      "체내 열이 많아 갈증·수면 관리가 필요",
    ],
    clinic: { label: "공진단·경옥고", href: "/care/gongjindan" },
  },
  soeum: {
    type: "soeum",
    title: "소음인",
    tagline: "소화가 약하고 몸이 냉한 편",
    summary:
      "소화 기능이 약하고 몸이 냉해 조금만 무리해도 예민해지는, 세심한 관리가 필요한 체질입니다.",
    features: [
      "마르고 왜소한 편의 체형",
      "꼼꼼하고 내향적인 성격",
      "속이 냉해 따뜻한 음식과 휴식이 중요",
    ],
    clinic: { label: "산후 다이어트", href: "/diet/postpartum" },
  },
};

// 동점 시 우선순위: 태음 > 소양 > 소음 > 태양
export const RESULT_PRIORITY: ConstitutionType[] = [
  "taeeum",
  "soyang",
  "soeum",
  "taeyang",
];

export const QUIZ_DISCLAIMER =
  "본 진단은 참고용 간이 테스트이며, 정확한 체질 판별과 처방은 반드시 한의사의 대면 진료가 필요합니다.";
