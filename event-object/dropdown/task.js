const dropDownActive = document.querySelector(".dropdown__list");
const dropButton = document.querySelector(".dropdown__value");

function open() {
  if (dropDownActive.classList.contains("dropdown__list_active")) {
    dropDownActive.classList.remove("dropdown__list_active");
  } else {
    dropDownActive.classList.add("dropdown__list_active");
  }
}

function chooseIteam(event) {
  let target = event.target;
  dropButton.textContent = target.textContent;
  event.preventDefault();
  dropDownActive.classList.remove("dropdown__list_active");
}

dropButton.addEventListener("click", open);
dropDownActive.addEventListener("click", chooseIteam);
