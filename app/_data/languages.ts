export interface LanguageOption {
  code: "ko" | "en";
  label: string;
}

export const languages: LanguageOption[] = [
  { code: "ko", label: "KOR" },
  { code: "en", label: "ENG" },
];
