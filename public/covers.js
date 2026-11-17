// Faced-out covers widen on hover or keyboard focus. Without this script the first cover stays open.
const covers = [...document.querySelectorAll('.cover')];
const open = (c) => covers.forEach((x) => x.classList.toggle('on', x === c));
covers.forEach((c) => {
  c.addEventListener('mouseenter', () => open(c));
  c.addEventListener('focusin', () => open(c));
});
