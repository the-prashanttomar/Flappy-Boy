

const canvas1 = document.getElementById("myCanvas");
const ctx1 = canvas1.getContext("2d");


// // const obsArr = [];
ctx1.fillRect(0,0,100,100);
ctx1.stroke();
// // const obstacle = {
//     top:  (Math.random()*canvas.height/3) +20,
//     bottom: (Math.random()*canvas.height/3) +20,
//     x: canvas.width,
//     y:canvas.height,
//     width: 10, 
// }

// function drawobs(){
    
//     ctx.fillRect(this.x,0,this.width,this.top);
//     ctx.fillRect(this.x,this.y-this.bottom,this.width,this.bottom);
//     ctx.stroke();
//     ctx.fillStyle='purple';
//     ctx.fill();
// }

// function update(){
// drawobs();
// }

// var myObstacles = [];
// var myGameArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.frameNo = 0;
//         this.interval = setInterval(updateGameArea, 20);
//         },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     },
//     stop : function() {
//         clearInterval(this.interval);
//     }
// }
// function updateGameArea() {
//     var x, height, gap, minHeight, maxHeight, minGap, maxGap;
//     for (i = 0; i < myObstacles.length; i += 1) {
//         if (myGamePiece.crashWith(myObstacles[i])) {
//             myGameArea.stop();
//             return;
//         } 
//     }
//     myGameArea.clear();
//     myGameArea.frameNo += 1;
//     if (myGameArea.frameNo == 1 || everyinterval(150)) {
//         x = myGameArea.canvas.width;
//         minHeight = 20;
//         maxHeight = 200;
//         height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
//         minGap = 50;
//         maxGap = 200;
//         gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
//         myObstacles.push(new component(10, height, "green", x, 0));
//         myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
//     }
//     for (i = 0; i < myObstacles.length; i += 1) {
//         myObstacles[i].speedX = -1;
//         myObstacles[i].newPos();
//         myObstacles[i].update();
//     }
  
// }