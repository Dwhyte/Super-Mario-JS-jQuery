// // game variables
// var startingScore = 0;
// var continueAnimating = false;
// var score;
//
//
// // var mario = new Image();
// // mario.width = 50;
// // mario.height = 100;
// // // var width = 20;
// // // var height = 50;
// // var marioX = 420;
// // var marioY = 350;
// // var speed = 1; // make this number smaller to move faster
//
//
// // Mario
// var mario = new Image();
// mario.src = 'images/mario.png';
// var marioWidth=50;
// var marioHeight=100;
// var marioSpeed=50;
// var mario={
//     x:420,
//     y:350,
//     // y:canvas.height-blockHeight,
//     width:marioWidth,
//     height:marioHeight,
//     marioSpeed:marioSpeed
// };
//
// // block variables
// var blockWidth=30;
// var blockHeight=15;
// var blockSpeed=50;
// var block={
//     x:420,
//     y:350,
//     // y:canvas.height-blockHeight,
//     width:blockWidth,
//     height:blockHeight,
//     blockSpeed:blockSpeed
// };
//
//
//
// // coin variables
// var coinWidth=50;
// var coinHeight=50;
// var totalCoins = 10;
// var coins=[];
// for(var i=0;i<totalCoins;i++){
//     addCoin();
// }
//
// function addCoin(){
//     var coin={
//         width:coinWidth,
//         height:coinHeight
//     };
//     resetCoin(coin);
//     coins.push(coin);
// }
//
// // move the coin to a random position near the top-of-canvas
// // assign the coin a random speed
// function resetCoin(coin){
//     coin.x=Math.random()*(canvas.width-coinWidth);
//     coin.y=15+Math.random()*30;
//     coin.speed=0.9+Math.random()*0.5;
// }
//
//
//
// // document.onkeydown = function (event) {
// //     if (event.keyCode == 39) {
// //         mario.x += mario.blockSpeed;
// //         if (mario.x >= canvas.width - mario.width) {
// //             continueAnimating = false;
// //             alert("Completed with a score of " + score + "You Win!!!");
// //         }
// //     } else if (event.keyCode == 37) {
// //         mario.x -= mario.blockSpeed;
// //         if (mario.x <= 0) {
// //             mario.x = 0;
// //         }
// //     }
// //
// //     // else if (event.keyCode == 38){
// //     //   block.y += block.blockSpeed;
// //     //   if (block.y >= canvas.height - block.height){
// //     //     continueAnimating = false;
// //     //     alert("Completed with a score of " + score + "You Win!!!");
// //     //   }
// //     // }
// // };
//
// //left and right keypush event handlers
// document.onkeydown = function (event) {
//     if (event.keyCode == 39) {
//         block.x += block.blockSpeed;
//         if (block.x >= canvas.width - block.width) {
//             continueAnimating = false;
//             //alert("Completed with a score of " + score + "You Win!!!");
//         }
//     } else if (event.keyCode == 37) {
//         block.x -= block.blockSpeed;
//         if (block.x <= 0) {
//             block.x = 0;
//         }
//     }
//
//
// };
//
//
//
//
// function animate() {
//
//     // request another animation frame
//
//     if (continueAnimating) {
//         requestAnimationFrame(animate);
//     }
//
//     // for each coin
//     // (1) check for collisions
//     // (2) advance the coin
//     // (3) if the coin falls below the canvas, reset that coin
//
//     for (var i = 0; i < coins.length; i++) {
//
//         var coin = coins[i];
//
//         // test for coin-mario collision
//         if (isColliding(coin, block)) {
//             score += 1;
//             resetCoin(coin);
//         }
//
//         // advance the coins
//         coin.y += coin.speed;
//
//         // if the coin is below the canvas,
//         if (coin.y > canvas.height) {
//             resetCoin(coin);
//         }
//
//     }
//
//     // redraw everything
//     drawAll();
//
//
// }
//
// function isColliding(a, b) {
//     return !(
//     b.x > a.x + a.width || b.x + b.width < a.x || b.y > a.y + a.height || b.y + b.height < a.y);
// }
//
//
// function drawAll() {
//   // clear the canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // //draw the block
//     ctx.fillStyle = "red";
//     ctx.fillRect(block.x, block.y, block.width, block.height);
//     ctx.strokeStyle = "lightgray";
//     ctx.strokeRect(block.x, block.y, block.width, block.height);
//     //ctx.drawImage(mario,mario.x,mario.y,mario.width, mario.height);
//
//
//     // Draw Mario :)
//       // mario.onload = function() {
//       // ctx.imageSmoothingEnabled = false;
//       // ctx.drawImage(mario, mario.x, mario.y, marioWidth, marioHeight);
//       // };
//       // mario.src = 'images/mario.png';
//
//     // draw all coins
//     for (var i = 0; i < coins.length; i++) {
//         var coin = coins[i];
//         var coinsImg = new Image();
//         // optionally,
//         coinsImg.src = 'images/150x_coin_image.png';
//         ctx.drawImage(coinsImg,coin.x,coin.y,coin.width, coin.height);
//         // ctx.fillStyle = "gray";
//         // ctx.fillRect(coin.x, coin.y, coin.width, coin.height);
//     }
//
//     // draw the score
//     ctx.font = "14px Times New Roman";
//     ctx.fillStyle = "black";
//     ctx.fillText("Score: " + score, 10, 15);
//
//
// }
//
// // button to start the game
// $("#start").click(function () {
//     score = startingScore;
//     mario.x = 0;
//     for (var i = 0; i < coins.length; i++) {
//         resetCoin(coins[i]);
//     }
//     if (!continueAnimating) {
//         continueAnimating = true;
//         animate();
//     }
// });
