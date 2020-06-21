"use strict";

const boxes = document.querySelector(".boxes");
const box = document.querySelector(".box");
const boxAll = document.querySelectorAll(".box");

function snakify() {
  var marginLeft = Number(
    window.getComputedStyle(box).marginLeft.replace("px", "")
  );
  var marginRight = Number(
    window.getComputedStyle(box).marginRight.replace("px", "")
  );

  const itemsPerRow = Math.floor(
    boxes.offsetWidth / (box.offsetWidth + marginLeft + marginRight)
  );

  var left = true;

  for (var i = 0; i < boxAll.length; i++) {
    if (left) {
      boxAll[i].classList.remove("right");
      boxAll[i].classList.add("left");
    } else {
      boxAll[i].classList.remove("left");
      boxAll[i].classList.add("right");
    }
    if ((i + 1) % itemsPerRow == 0 && i < boxAll.length - 1) {
      left = !left;
    }
    boxAll[i].classList.remove("withLine");
  }
  for (var i = 0; i < boxAll.length; i++) {
    if (itemsPerRow < 1) {
      boxAll[i].classList.remove("right");
      boxAll[i].classList.remove("left");
      boxAll[i].classList.add("single");
    } else {
      boxAll[i].classList.remove("single");
      if ((i + 1) % itemsPerRow == 0 && i < boxAll.length - 1) {
        boxAll[i + 1].classList.add("withLine");
      }
    }
  }
}

window.onload = snakify;
window.onresize = snakify;

var ro = new ResizeObserver((entry) => snakify());
ro.observe(document.querySelector(".wrapper"));
