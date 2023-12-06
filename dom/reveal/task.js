const reveal = document.querySelectorAll(".reveal");

console.log(reveal);

function visible(el) {
  const { top, bottom } = el.getBoundingClientRect();
  if (bottom < 0 || top > window.innerHeight) {
    el.classList.remove("reveal_active");
    return false;
  }
  el.classList.add("reveal_active");
  return true;
}

setInterval(() => {
  console.log(visible(reveal[0])) || console.log(visible(reveal[1]));
}, 1000);

window.addEventListener("scroll", visible);
