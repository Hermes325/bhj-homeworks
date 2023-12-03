document.querySelectorAll(".font-size").forEach((el) =>
  el.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(".font-size_active").classList.remove("font-size_active");
    document.querySelector(".book__content").classList.remove("font-size_small", "font-size_big");
    if (el.classList[1]) {
      document.querySelector(".book__content").classList.add(el.classList[1]);
    }
    el.classList.add("font-size_active");
  })
);

