import { subTreatments } from "../../_data/subTreatments";

export const mainNav = [
  { label: "이벤트", href: "/event" },
] as const;

export const aboutNav = [
  { label: "병원소개", href: "/about" },
  { label: "의료진 소개", href: "/about/doctors" },
  { label: "오시는 길", href: "/about/location" },
  { label: "비급여 안내", href: "/about/fees" },
] as const;

interface TreatmentNavGroup {
  label: string;
  href: string;
  sub: { label: string; href: string }[];
}

const CATEGORY_LABELS: Record<string, string> = {
  diet: "다이어트 클리닉",
  beauty: "미용 클리닉",
  posture: "체형교정 클리닉",
  spine: "척추관절 클리닉",
  care: "보양 클리닉",
};

const CATEGORY_ORDER = ["diet", "beauty", "posture", "spine", "care"] as const;

export const treatmentNav: TreatmentNavGroup[] = CATEGORY_ORDER.map(
  (category) => {
    const items = subTreatments.filter((t) => t.category === category);
    const label = CATEGORY_LABELS[category];
    const href = items[0].categoryHref;
    return {
      label,
      href,
      sub: [
        { label, href },
        ...items.map((t) => ({
          label: t.title,
          href: `${t.categoryHref}/${t.slug}`,
        })),
      ],
    };
  }
);
