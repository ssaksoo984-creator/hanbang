export interface SubTreatment {
  category: "diet" | "beauty" | "posture" | "spine" | "care";
  categoryHref: string;
  title: string;
  slug: string;
}

export const subTreatments: SubTreatment[] = [
  {
    category: "diet",
    categoryHref: "/diet",
    title: "체질 맞춤 다이어트",
    slug: "custom",
  },
  {
    category: "diet",
    categoryHref: "/diet",
    title: "산후 다이어트",
    slug: "postpartum",
  },
  {
    category: "diet",
    categoryHref: "/diet",
    title: "청소년·성장기 다이어트",
    slug: "teen",
  },
  {
    category: "beauty",
    categoryHref: "/beauty",
    title: "한방 동안침",
    slug: "anti-aging-acupuncture",
  },
  {
    category: "beauty",
    categoryHref: "/beauty",
    title: "약침 리프팅",
    slug: "lifting",
  },
  {
    category: "posture",
    categoryHref: "/posture",
    title: "추나요법",
    slug: "chuna",
  },
  {
    category: "posture",
    categoryHref: "/posture",
    title: "청소년 성장·체형교정",
    slug: "growth",
  },
  {
    category: "posture",
    categoryHref: "/posture",
    title: "거북목·턱관절 교정",
    slug: "neck-jaw",
  },
  {
    category: "spine",
    categoryHref: "/spine",
    title: "허리·목 디스크",
    slug: "disc",
  },
  {
    category: "spine",
    categoryHref: "/spine",
    title: "어깨·관절 통증",
    slug: "joint",
  },
  {
    category: "spine",
    categoryHref: "/spine",
    title: "교통사고 후유증",
    slug: "accident",
  },
  {
    category: "care",
    categoryHref: "/care",
    title: "공진단·경옥고",
    slug: "gongjindan",
  },
  {
    category: "care",
    categoryHref: "/care",
    title: "체질 맞춤 보약",
    slug: "custom-tonic",
  },
];
