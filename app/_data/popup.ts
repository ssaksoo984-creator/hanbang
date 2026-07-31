export interface PopupItem {
  id: string;
  enabled: boolean;
  link: string;
  image: string;
  alt: string;
}

// 노출할 팝업이 생기면 enabled: true로 바꾸고 항목을 추가하세요.
export const popups: PopupItem[] = [];
