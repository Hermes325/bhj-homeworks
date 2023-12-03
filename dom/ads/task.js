const rotator = Array.from(document.querySelectorAll(".rotator__case"));

setInterval(() => {
  i = rotator.findIndex((el) => el.className.includes("rotator__case_active"));
  rotator[i].classList.remove("rotator__case_active");
  i++;
  if (i === rotator.length) {
    i = 0;
  }
  rotator[i].classList.add("rotator__case_active");
}, 1000);

// console.log(rotator);

//for (let i = 0; i++; i < rotator.length) {
//     // rotator[i].classList.remove(rotator__case_active);
//     rotator[i].classList.add(rotator__case_active);
//   }
