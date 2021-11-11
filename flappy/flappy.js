const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// defineing player's info
const player = {
  w: 80,
  h: 70,
  x: 20,
  y: 450,
  speed: 3, //his speed
  dx: 0, //his change
  dy: 0, // his change
};

//onload function to load that image just after loading
window.onload = function () {
  drawme(); // called a draw me function to draw it
};

// drawing a player using image
function drawme() {
  var img = document.getElementById("scream");
  ctx.drawImage(img, player.x, player.y, player.w, player.h);
}

// function to update the position of the player
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawme(); //again calling drawme to draw it at every position
  move(); // again calling move to move it recursively
  requestAnimationFrame(update);
}
//called the update function
update();

// a move function to mave the player
function move() {
  player.x += player.dx;
  player.y += player.dy;

  //stoping at boundaries while moving

  //left wall
  if (player.x < 0) {
    player.x = 0;
  }
  //right wall
  if (player.x + player.w > canvas.width) {
    player.x = canvas.width - player.w;
  }
  //top wall
  if (player.y < 0) {
    player.y = 0;
  }
  //bottom wall
  if (player.y + player.h > canvas.height) {
    player.y = canvas.height - player.h;
  }
}


// dom is used to get the event from the keyboard
document.addEventListener("keydown", keydown); //key down is used during the key press
document.addEventListener("keyup", keyup); //keyup is the event used for key release
// key down function to work on the pressed keys
function keydown(e) {
  if (e.keyCode == "38") {
    // called the function according to the requirement
    moveup();
  } else if (e.keyCode == "40") {
    movedown();
  } else if (e.keyCode == "37") {
    moveleft();
  } else if (e.keyCode == "39") {
    moveright();
  }
}
// changes the value back to 0 so that the player stops while releasing the key
function keyup(e) {
  player.dx = 0;
  player.dy = 0;
}



//individual function to change the position according to key press
function moveup() {
  player.dy = -player.speed;
}

function movedown() {
  player.dy = player.speed;
}

function moveleft() {
  player.dx = -player.speed;
}

function moveright() {
  player.dx = player.speed;
}
