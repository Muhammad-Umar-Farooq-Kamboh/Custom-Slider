let img = document.querySelectorAll(".images");
let radioBtn = document.querySelectorAll(".radio");
let hover = document.querySelector(".radio");
let i = 0;

let slide = (val) => {
  i += val;
  if (i == img.length) {
    i = 0;
  } else if (i < 0) {
    i = img.length - 1;
  }
  move(i);
};
let move = (x) => {
  for (const y of img) {
    y.style.display = "none";
  }
  for (const y of radioBtn) {
    y.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  }
  radioBtn.forEach((y) => {
    y.addEventListener("mouseover", () => {
      y.style.backgroundColor = "white";
      // console.log("Mouse is entered");
    });
    y.addEventListener("mouseleave", () => {
      y.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
      // console.log("Mouse is entered");
    });
  });
  img[x].style.display = "block";
  radioBtn[x].style.backgroundColor = "black";
  radioBtn[x].addEventListener("mouseleave", () => {
    radioBtn[x].style.backgroundColor = "black";
  });
};
move(i);
setInterval(() => {
  slide(1);
}, 5000);
