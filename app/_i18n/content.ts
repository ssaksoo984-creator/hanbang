import type { Locale } from "./LanguageContext";

export const brandName = {
  ko: "리브한의원",
  en: "Liv Hanbang Clinic",
};

export const eventBanner = {
  ko: "리브한의원 여름맞이 이벤트 · 다이어트 첫 상담 무료 진행 중",
  en: "Liv Hanbang Clinic Summer Event · Free First Diet Consultation",
};

export const nav = {
  ko: {
    home: "홈",
    events: "이벤트",
    about: "병원소개",
    doctors: "의료진 소개",
    location: "오시는 길",
    fees: "비급여 안내",
    treatments: "시술안내",
    consult: "상담 신청",
  },
  en: {
    home: "Home",
    events: "Events",
    about: "About Us",
    doctors: "Our Doctors",
    location: "Location",
    fees: "Pricing",
    treatments: "Treatments",
    consult: "Book a Consultation",
  },
};

export const categoryLabels = {
  ko: {
    diet: "다이어트 클리닉",
    beauty: "미용 클리닉",
    posture: "체형교정 클리닉",
    spine: "척추관절 클리닉",
    care: "보양 클리닉",
  },
  en: {
    diet: "Diet Clinic",
    beauty: "Beauty Clinic",
    posture: "Posture Clinic",
    spine: "Spine & Joint Clinic",
    care: "Wellness Clinic",
  },
};

export const heroSlides = {
  ko: [
    {
      sub: "LIV HANBANG CLINIC",
      title: "근본을 다스리는\n리브한의원",
      desc: "체질을 살펴 처방하는 정직한 한의학",
    },
    {
      sub: "20 YEARS OF EXPERIENCE",
      title: "20년 임상 경력\n한의사 직접 진료",
      desc: "처음 상담부터 치료 끝까지 원장이 함께합니다",
    },
    {
      sub: "CUSTOM DIET CLINIC",
      title: "체질을 알면 다이어트가 쉬워집니다",
      desc: "한약·침·상담이 함께하는 체질 맞춤 다이어트",
    },
  ],
  en: [
    {
      sub: "LIV HANBANG CLINIC",
      title: "Treating the Root Cause\nLiv Hanbang Clinic",
      desc: "Honest Korean medicine, prescribed to your constitution",
    },
    {
      sub: "20 YEARS OF EXPERIENCE",
      title: "20 Years of Clinical Experience\nTreated Directly by Our Doctor",
      desc: "From your first consultation to the last, our director sees you through",
    },
    {
      sub: "CUSTOM DIET CLINIC",
      title: "Know Your Constitution,\nSimplify Your Diet",
      desc: "Constitution-based diet care with herbal medicine, acupuncture, and consultation",
    },
  ],
} as const;

export const heroUi = {
  ko: { prev: "이전 슬라이드", next: "다음 슬라이드" },
  en: { prev: "Previous slide", next: "Next slide" },
};

export const treatments = {
  ko: [
    { keyword: "다이어트", label: "클리닉", en: "DIET", href: "/diet", desc: "체질 맞춤·산후·성장기 다이어트" },
    { keyword: "미용", label: "클리닉", en: "BEAUTY", href: "/beauty", desc: "한방 동안침·약침 리프팅" },
    { keyword: "체형교정", label: "클리닉", en: "POSTURE", href: "/posture", desc: "추나요법·거북목·성장판 검사" },
    { keyword: "척추관절", label: "클리닉", en: "SPINE & JOINT", href: "/spine", desc: "허리·목 디스크, 어깨·관절 통증" },
    { keyword: "교통사고", label: "클리닉", en: "ACCIDENT", href: "/spine/accident", desc: "자동차보험 처리·입원 치료 가능" },
    { keyword: "보양", label: "클리닉", en: "WELLNESS", href: "/care", desc: "공진단·경옥고, 체질 맞춤 보약" },
  ],
  en: [
    { keyword: "Diet", label: "Clinic", en: "DIET", href: "/diet", desc: "Custom, postpartum & teen growth diet care" },
    { keyword: "Beauty", label: "Clinic", en: "BEAUTY", href: "/beauty", desc: "Anti-aging acupuncture & pharmacopuncture lifting" },
    { keyword: "Posture", label: "Clinic", en: "POSTURE", href: "/posture", desc: "Chuna therapy, forward head posture, growth exams" },
    { keyword: "Spine & Joint", label: "Clinic", en: "SPINE & JOINT", href: "/spine", desc: "Back & neck disc issues, shoulder & joint pain" },
    { keyword: "Accident", label: "Clinic", en: "ACCIDENT", href: "/spine/accident", desc: "Auto insurance claims & inpatient care available" },
    { keyword: "Wellness", label: "Clinic", en: "WELLNESS", href: "/care", desc: "Gongjindan, Gyeongokgo & custom herbal tonics" },
  ],
} as const;

export const treatmentsUi = {
  ko: { heading: "진료분야", detail: "자세히", caption: "환자를 위한\n맞춤 치료 설계" },
  en: { heading: "Treatments", detail: "Details", caption: "Personalized Treatment\nDesigned for You" },
};

export const doctorIntro = {
  ko: {
    eyebrow: "OUR PROMISE",
    titleLine1: "환자를 최우선시 생각합니다.",
    titleLine2: "그리고 그들의 체질에 맞는 진단을 합니다.",
    quote: `몸이 아프면 마음도 함께 시들기 마련입니다.

저는 진료실에서 병을 보기 전에 사람을 먼저 봅니다. 어떤 하루를 보내오셨는지, 어디가 가장 힘드신지 천천히 여쭙는 이유입니다. 급하게 지나치지 않고, 당신의 체질과 삶의 리듬을 헤아려 가장 잘 맞는 길을 찾아드리고 싶습니다.

가족을 대하는 마음으로, 오늘도 진심을 담아 진료하겠습니다.`,
    doctorName: "김도현 대표원장",
  },
  en: {
    eyebrow: "OUR PROMISE",
    titleLine1: "We put patients first.",
    titleLine2: "And diagnose according to their constitution.",
    quote: `When the body suffers, the spirit tends to wither with it.

In the exam room, I look at the person before I look at the illness. That's why I take the time to ask about your day, and where it hurts the most. Without rushing, I want to understand your constitution and the rhythm of your life to find the path that truly fits you.

With the same care I'd give my own family, I see every patient with sincerity, today and always.`,
    doctorName: "Dr. Dohyun Kim, Director",
  },
};

export const galleryImages = {
  ko: [
    { src: "/images/gallery/1.jpg", alt: "병원 로비" },
    { src: "/images/gallery/2.jpg", alt: "상담실" },
    { src: "/images/gallery/3.jpg", alt: "진료실" },
    { src: "/images/gallery/4.jpg", alt: "대기실" },
    { src: "/images/gallery/5.jpg", alt: "한약 조제실" },
    { src: "/images/gallery/6.jpg", alt: "추나요법실" },
    { src: "/images/gallery/7.jpg", alt: "원장실" },
    { src: "/images/gallery/8.jpg", alt: "물리치료실" },
  ],
  en: [
    { src: "/images/gallery/1.jpg", alt: "Lobby" },
    { src: "/images/gallery/2.jpg", alt: "Consultation Room" },
    { src: "/images/gallery/3.jpg", alt: "Treatment Room" },
    { src: "/images/gallery/4.jpg", alt: "Waiting Room" },
    { src: "/images/gallery/5.jpg", alt: "Herbal Dispensary" },
    { src: "/images/gallery/6.jpg", alt: "Chuna Therapy Room" },
    { src: "/images/gallery/7.jpg", alt: "Director's Office" },
    { src: "/images/gallery/8.jpg", alt: "Physical Therapy Room" },
  ],
} as const;

export const galleryUi = {
  ko: {
    heading: "병원 갤러리",
    close: "닫기",
    more: "더보기",
    viewLarge: (alt: string) => `${alt} 크게 보기`,
    select: (alt: string) => `${alt} 선택`,
  },
  en: {
    heading: "Hospital Gallery",
    close: "Close",
    more: "See More",
    viewLarge: (alt: string) => `View ${alt} larger`,
    select: (alt: string) => `Select ${alt}`,
  },
};

export const location = {
  ko: {
    eyebrow: "LOCATION & CONTACT",
    title: "오시는 길",
    hospitalInfo: "HOSPITAL INFO",
    hours: "HOURS",
    clinicName: "리브한의원",
    address: "서울특별시 강남구 언주로98길 31-6",
    phone: "02-0000-0000",
    kakaoChat: "카카오톡 상담",
    bookOnline: "온라인 상담 신청",
    hoursTable: [
      { day: "평일", time: "09:00 — 19:00" },
      { day: "토요일", time: "09:00 — 14:00" },
      { day: "일/공휴일", time: "휴진" },
      { day: "점심시간", time: "13:00 — 14:00" },
    ],
  },
  en: {
    eyebrow: "LOCATION & CONTACT",
    title: "Location",
    hospitalInfo: "HOSPITAL INFO",
    hours: "HOURS",
    clinicName: "Liv Hanbang Clinic",
    address: "31-6 Eonju-ro 98-gil, Gangnam-gu, Seoul",
    phone: "02-0000-0000",
    kakaoChat: "KakaoTalk Chat",
    bookOnline: "Book Online",
    hoursTable: [
      { day: "Weekdays", time: "09:00 — 19:00" },
      { day: "Saturday", time: "09:00 — 14:00" },
      { day: "Sun / Holidays", time: "Closed" },
      { day: "Lunch Break", time: "13:00 — 14:00" },
    ],
  },
};

export const consultCta = {
  ko: {
    eyebrow: "CONSULTATION",
    title: "지금, 상담을 시작하세요",
    subtitle: "전문 한의사와의 1:1 무료 상담을 통해\n체질에 맞는 치료법을 찾아드립니다.",
    bookOnline: "온라인 상담 신청",
  },
  en: {
    eyebrow: "CONSULTATION",
    title: "Start Your Consultation Today",
    subtitle: "Get a free 1:1 consultation with a Korean medicine specialist\nand find the treatment that fits your constitution.",
    bookOnline: "Book Online",
  },
};

export const footer = {
  ko: {
    tagline: "몸과 마음의 균형,\n뿌리부터 다스리는 한의학",
    menu: "MENU",
    about: "병원소개",
    treatmentsLabel: "시술안내",
    contact: "CONTACT",
    terms: "이용약관",
    privacy: "개인정보처리방침",
    hours: ["평일 09:00 – 19:00", "토요일 09:00 – 14:00", "일요일·공휴일 휴진"],
  },
  en: {
    tagline: "Balance of body and mind,\nKorean medicine that treats the root cause",
    menu: "MENU",
    about: "About Us",
    treatmentsLabel: "Treatments",
    contact: "CONTACT",
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    hours: ["Weekdays 09:00 – 19:00", "Saturday 09:00 – 14:00", "Sun / Holidays Closed"],
  },
};

export const mobileMenu = {
  ko: { openMenu: "메뉴 열기", closeMenu: "메뉴 닫기" },
  en: { openMenu: "Open menu", closeMenu: "Close menu" },
};

export const sideIcons = {
  ko: { naver: "네이버 예약", kakao: "카카오톡 상담", call: "전화 상담", top: "맨 위로" },
  en: { naver: "Naver Booking", kakao: "KakaoTalk Chat", call: "Phone Consultation", top: "Back to top" },
};

export const languageSwitcher = {
  ko: { selectLanguage: "언어 선택" },
  en: { selectLanguage: "Select language" },
};

export function pick<T>(dict: { ko: T; en: T }, locale: Locale): T {
  return dict[locale];
}
