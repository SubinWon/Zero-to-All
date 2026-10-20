import "../vendor/anime.umd.min.js";

export function initCardsAnim() {
  anime.animate(".card", {
    opacity: [0, 1],
    translateY: [24, 0],
    delay: stagger(120),
    duration: 700,
    ease: "outBack",
  });
}