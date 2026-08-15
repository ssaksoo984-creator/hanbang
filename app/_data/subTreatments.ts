export interface SubTreatment {
  category: "diet" | "beauty" | "posture" | "spine" | "care";
  categoryHref: string;
  title: string;
  titleEn: string;
  slug: string;
}

export const subTreatments: SubTreatment[] = [
  {
    category: "diet",
    categoryHref: "/diet",
    title: "체질 맞춤 다이어트",
    titleEn: "Custom Diet",
    slug: "custom",
  },
  {
    category: "diet",
    categoryHref: "/diet",
    title: "산후 다이어트",
    titleEn: "Postpartum Diet",
    slug: "postpartum",
  },
  {
    category: "diet",
    categoryHref: "/diet",
    title: "청소년·성장기 다이어트",
    titleEn: "Teen Growth Diet",
    slug: "teen",
  },
  {
    category: "beauty",
    categoryHref: "/beauty",
    title: "한방 동안침",
    titleEn: "Anti-Aging Acupuncture",
    slug: "anti-aging-acupuncture",
  },
  {
    category: "beauty",
    categoryHref: "/beauty",
    title: "약침 리프팅",
    titleEn: "Pharmacopuncture Lifting",
    slug: "lifting",
  },
  {
    category: "posture",
    categoryHref: "/posture",
    title: "추나요법",
    titleEn: "Chuna Therapy",
    slug: "chuna",
  },
  {
    category: "posture",
    categoryHref: "/posture",
    title: "청소년 성장·체형교정",
    titleEn: "Teen Growth & Posture Correction",
    slug: "growth",
  },
  {
    category: "posture",
    categoryHref: "/posture",
    title: "거북목·턱관절 교정",
    titleEn: "Forward Head & TMJ Correction",
    slug: "neck-jaw",
  },
  {
    category: "spine",
    categoryHref: "/spine",
    title: "허리·목 디스크",
    titleEn: "Back & Neck Disc",
    slug: "disc",
  },
  {
    category: "spine",
    categoryHref: "/spine",
    title: "어깨·관절 통증",
    titleEn: "Shoulder & Joint Pain",
    slug: "joint",
  },
  {
    category: "spine",
    categoryHref: "/spine",
    title: "교통사고 후유증",
    titleEn: "Auto Accident Aftercare",
    slug: "accident",
  },
  {
    category: "care",
    categoryHref: "/care",
    title: "공진단·경옥고",
    titleEn: "Gongjindan & Gyeongokgo",
    slug: "gongjindan",
  },
  {
    category: "care",
    categoryHref: "/care",
    title: "체질 맞춤 보약",
    titleEn: "Custom Herbal Tonic",
    slug: "custom-tonic",
  },
];
