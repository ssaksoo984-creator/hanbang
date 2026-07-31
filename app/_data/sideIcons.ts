export interface SideIconItem {
  id: "naver" | "kakao" | "call";
  label: string;
  href: string;
}

export const sideIcons: SideIconItem[] = [
  {
    id: "naver",
    label: "네이버 예약",
    href: "https://booking.naver.com",
  },
  {
    id: "kakao",
    label: "카카오톡 상담",
    href: "https://pf.kakao.com",
  },
  {
    id: "call",
    label: "전화 상담",
    href: "tel:02-0000-0000",
  },
];
