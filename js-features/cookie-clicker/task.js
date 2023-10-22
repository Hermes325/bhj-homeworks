const image = document.getElementById("cookie");
const clickerСounter = document.getElementById("clicker__counter");

image.onclick = function changeSize() {
  clickerСounter.textContent++;
  if (clickerСounter.textContent % 2 == 1) {
    image.width += 20;
  } else {
    image.width -= 20;
  }
};
