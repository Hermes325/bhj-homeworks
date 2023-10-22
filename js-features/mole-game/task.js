const getHole = (index) => document.getElementById(`hole${index}`);
const dead = document.getElementById(`dead`);
const lost = document.getElementById(`lost`);

function restart() {
  dead.textContent = 0;
  lost.textContent = 0;
}
for (let i = 1; i <= 9; i++) {
  let hole = getHole(i);
  hole.onclick = function () {
    if (hole.className.includes("hole_has-mole")) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }
    if (dead.textContent == 5) {
      alert("Красава");
      restart();
    }
    if (lost.textContent == 3) {
      alert("Мазила");
      restart();
    }
    
  };
}
