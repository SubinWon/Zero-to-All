import { animate, stagger } from "../vendor/anime.esm.min.js";

export function initCardsAnim() {
  animate(".card", {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: stagger(120),
    duration: 700,
    ease: "outBack",
  });
}
