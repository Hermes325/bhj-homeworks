const reveal = document.querySelector(".reveal");

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
  console.log(visible(reveal));
}, 500);

window.addEventListener("scroll", visible);
