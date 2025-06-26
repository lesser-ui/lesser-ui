import {
  faBook,
  faBrush,
  faCircleDot,
  faCircleInfo,
  faFile,
  faKeyboard,
  faSpinner,
  faSquareCaretRight,
  faSquareCheck,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";

/** XSS 방지를 위한 DOMPurify 옵션 */
export const SANITIZE_OPTIONS = {
  // ALLOWED_ATTR: ["class", "href", "src", "alt", "title", "style"], // 허용할 옵션
  FORBID_TAGS: ["script", "iframe", "object", "embed"], // 제거할 태그
  FORBID_ATTR: ["onerror", "onclick", "onload"], // 이벤트 핸들러
};

/** menu nav item */
export const menuItems = [
  { icon: faBook, label: "전체", link: null },
  { icon: faSquareCaretRight, label: "버튼", link: "buttons" },
  { icon: faSquareCheck, label: "체크박스", link: "check-boxes" },
  { icon: faToggleOn, label: "스위치", link: "toggle-switches" },
  { icon: faFile, label: "카드", link: "card" },
  { icon: faSpinner, label: "로딩 스피너", link: "loaders" },
  { icon: faKeyboard, label: "인풋", link: "inputs" },
  { icon: faCircleDot, label: "라디오 버튼", link: "radio-buttons" },
  { icon: faCircleInfo, label: "툴팁", link: "tooltips" },
] as const;

/** tag item과 icon */
export const tagItems = [
  { icon: faSquareCaretRight, tag: "buttons" },
  { icon: faSquareCheck, tag: "check-boxes" },
  { icon: faToggleOn, tag: "toggle-switches" },
  { icon: faFile, tag: "card" },
  { icon: faSpinner, tag: "loaders" },
  { icon: faKeyboard, tag: "inputs" },
  { icon: faCircleDot, tag: "radio-buttons" },
  { icon: faCircleInfo, tag: "tooltips" },
] as const;

/** tag set */
export const tagSet: Set<string> = new Set(tagItems.map((item) => item.tag));

export const userBackground: {
  name: string;
  label: string;
  description: string;
  tags: string[];
}[] = [
  {
    name: "clovers",
    label: "네잎 클로버",
    description: "행운이 가득한 느낌",
    tags: ["기본"],
  },
  {
    name: "draw",
    label: "푸른색 물감",
    description: "눈의 피로를 줄이는 푸른색",
    tags: ["기본"],
  },
  {
    name: "glassy",
    label: "유리 너머 세계",
    description: "투명한 감성",
    tags: ["기본"],
  },
  {
    name: "glow",
    label: "빛나는 배경",
    description: "반짝반짝",
    tags: ["기본"],
  },
  {
    name: "jquery",
    label: "올드 스쿨 코드 감성",
    description: "코딩은 역시 제이쿼리",
    tags: ["기본"],
  },
  {
    name: "metalic",
    label: "크롬 느낌",
    description: "세련되고 차가운 금속",
    tags: ["기본"],
  },
  {
    name: "peace",
    label: "평화로운 마음가짐",
    description: "이너피스",
    tags: ["기본"],
  },
  {
    name: "super-css",
    label: "눈부신 스타일",
    description: "CSS로 세상을 구하는 중",
    tags: ["기본"],
  },
] as const;

export const bgSet = new Set<string>(userBackground.map((bg) => bg.name));
