import { subTreatments } from "../../_data/subTreatments";
import { nav as navText, categoryLabels } from "../../_i18n/content";
import type { Locale } from "../../_i18n/LanguageContext";

export interface NavItem {
  label: string;
  href: string;
}

export function getMainNav(locale: Locale): NavItem[] {
  return [{ label: navText[locale].events, href: "/event" }];
}

export function getAboutNav(locale: Locale): NavItem[] {
  const t = navText[locale];
  return [
    { label: t.about, href: "/about" },
    { label: t.doctors, href: "/about/doctors" },
    { label: t.location, href: "/about/location" },
    { label: t.fees, href: "/about/fees" },
  ];
}

interface TreatmentNavGroup {
  label: string;
  href: string;
  sub: NavItem[];
}

const CATEGORY_ORDER = ["diet", "beauty", "posture", "spine", "care"] as const;

export function getTreatmentNav(locale: Locale): TreatmentNavGroup[] {
  const labels = categoryLabels[locale];
  return CATEGORY_ORDER.map((category) => {
    const items = subTreatments.filter((t) => t.category === category);
    const label = labels[category];
    const href = items[0].categoryHref;
    return {
      label,
      href,
      sub: [
        { label, href },
        ...items.map((t) => ({
          label: locale === "en" ? t.titleEn : t.title,
          href: `${t.categoryHref}/${t.slug}`,
        })),
      ],
    };
  });
}
