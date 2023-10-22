let backCount = function () {
  const timer_num = document.getElementById("timer");

  if (timer_num.textContent == 0) {
    alert("Вы победили в конкурсе!");
    timer_num.textContent = 59;
  } else {
    timer_num.textContent--;
  }
};
setInterval(backCount, 1000);
