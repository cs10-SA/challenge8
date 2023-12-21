//platform challenge
// setupcanvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;
// global variables

let player = {
  x: 280,
  y: 300,
  w: 70,
  h: 70,
  speed: 5,
  color: "blue",
  gravity: 0.05,
  gravitySpeed: 0,
};
let block = {
  x: 150,
  y: 370,
  w: 300,
  h: 50,
};
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// drawFunct
window.addEventListener("load", draw);

function draw() {
  if (rightPressed) {
    player.x += player.speed;
  } else if (leftPressed) {
    player.x += -player.speed;
  } else if (upPressed) {
    player.y += -player.speed;
  } else if (downPressed) {
    player.y += player.speed;
  }

  // if (
  //   (player.x < 150 && player.y === 320) ||
  //   (player.x > 450 && player.y === 320)
  // ) {
  //   player.y += 5;
  // }
  if (
    player.x >= block.h &&
    player.x <= block.x + block.w &&
    player.y > block.w &&
    player.y <= block.x + block.w
  ) {
    player.x > 430 && player.x < 450;
    player.y = 320;
  }
  if (player.y > 600) {
    player.y = 530;
  }

  //   Draw a background
  ctx.fillStyle = "white ";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  // draw a square
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);
  // draw rectangkle
  ctx.fillStyle = "grey";
  ctx.fillRect(block.x, block.y, block.w, block.h);
  // loop
  requestAnimationFrame(draw);
}
// event stufff(controlling how square moves)

document.addEventListener("keyup", keywHandler);
document.addEventListener("keydown", keysHandler);
// press mouse  and square moves

function keysHandler(event) {
  if (event.code === "ArrowLeft") {
    leftPressed = true;
  } else if (event.code === "ArrowRight") {
    rightPressed = true;
  } else if (event.code === "ArrowUp") {
    upPressed = true;
  } else if (event.code === "ArrowDown") {
    downPressed = true;
  }
}
function keywHandler(event) {
  if (event.code === "ArrowLeft") {
    leftPressed = false;
  } else if (event.code === "ArrowRight") {
    rightPressed = false;
  } else if (event.code === "ArrowUp") {
    upPressed = false;
  } else if (event.code === "ArrowDown") {
    downPressed = false;
  }
}
