// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const right = parseInt(rightNumbers, 10);

  if (right <= 360) {
    dodger.style.left = `${right + 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
function moveDodgerUp() {
  const upNumbers = dodger.style.bottom.replace("px", "");
  const up = parseInt(upNumbers, 10);

  if (up <= 380) {
    dodger.style.bottom = `${up + 1}px`;
  }
  console.log("moved");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
});

function moveDodgerDown() {
  const downNumbers = dodger.style.bottom.replace("px", "");
  const down = parseInt(downNumbers, 10);

  if (down <= 380 && down >= 0) {
    dodger.style.bottom = `${down - 1}px`;
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});
