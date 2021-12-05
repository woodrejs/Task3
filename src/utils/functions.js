import { resolutions } from "./media";

export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
export function getDevice() {
  const windowWidth = window.innerWidth;
  const { tablet, desktop } = resolutions;

  if (windowWidth >= desktop) return "desktop";
  if (windowWidth >= tablet) return "tablet";
  return "mobile";
}
