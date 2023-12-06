let img = document.querySelectorAll(".images");
let radioBtn = document.querySelectorAll(".radio");
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
  img[x].style.display = "block";
  radioBtn[x].style.backgroundColor = "black";
};
move(i);
