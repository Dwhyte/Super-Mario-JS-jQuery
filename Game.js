

    $("#StartButton").click(function () {
        $("#SplashScreen").hide();
        $("#canvas").show();
    });



// Mario's Movements
  $(document).keydown(function(e){
      switch (e.which){
      case 37:    //left arrow key
          if (marioX === 0){
            // Stop Moving Bro
          }else{
            marioX = marioX - 30;
            speed = 1;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(mario, marioX, marioY, mario.width, mario.height);
            mario.src = 'images/mario_flying_right.png';
        }
        break;

      case 38:    //up arrow key

              mario.width = 100;
              mario.height = 100;
              marioY = marioY - 30;

              ctx.clearRect(0, 0, c.width, c.height);
              ctx.drawImage(mario, marioX, marioY, mario.width, mario.height);
              mario.src = 'images/mario_flying_up.png';

          break;
      case 39:    //right arrow key
        console.log(marioX);
            if (marioX > 28372398472893742983){
              //Do nada
            } else {
            marioX = marioX + 30;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(mario, marioX, marioY, mario.width, mario.height);
            mario.src = 'images/mario_flying_left.png';
          }
          break;
      case 40:    //bottom arrow key
            // mario.width = 60;
            // mario.height = 75;
            marioY = marioY + 30;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(mario, marioX, marioY, mario.width, mario.height);
            mario.src = 'images/mario_dropping_down.png';
          break;
      default:
            mario.width = 50;
            mario.height = 100;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(mario, marioX, marioY, mario.width, mario.height);
            mario.src = 'images/mario.png';
      }
  });



var keys = {};
window.addEventListener("keydown",
    function(e){
        keys[e.keyCode] = true;
        switch(e.keyCode){
            case 37: case 39: case 38:  case 40: // Arrow keys
            case 32: e.preventDefault(); break; // Space
            default: break; // do not block other keys
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keys[e.keyCode] = false;
    },
false);












  // game variables
var startingScore = 0;
var continueAnimating = false;
var score;

// block variables
var blockWidth = 30;
var blockHeight = 15;
var blockSpeed = 100;
var block = {
    x: 0,
    y: canvas.height - blockHeight,
    width: blockWidth,
    height: blockHeight,
    blockSpeed: blockSpeed
};


// rock variables
var rockWidth = 40;
var rockHeight = 40;
var totalRocks = 10;
var rocks = [];
for (var i = 0; i < totalRocks; i++) {
    addRock();
}

function addRock() {
    var rock = {
        width: rockWidth,
        height: rockHeight
    };
    resetRock(rock);
    rocks.push(rock);
}


// move the rock to a random position near the top-of-canvas
// assign the rock a random speed
function resetRock(rock) {
    rock.x = Math.random() * (canvas.width - rockWidth);
    rock.y = 15 + Math.random() * 30;
    rock.speed = 0.2 + Math.random() * 0.5;
}



function animate() {

    // request another animation frame

    if (continueAnimating) {
        requestAnimationFrame(animate);
    }

    // for each rock
    // (1) check for collisions
    // (2) advance the rock
    // (3) if the rock falls below the canvas, reset that rock

    for (var i = 0; i < rocks.length; i++) {

        var rock = rocks[i];

        // test for rock-block collision
        if (isColliding(rock, block)) {
            score -= 10;
            resetRock(rock);
        }

        // advance the rocks
        rock.y += rock.speed;

        // if the rock is below the canvas,
        if (rock.y > canvas.height) {
            resetRock(rock);
        }

    }

    // redraw everything
    drawAll();

}

function isColliding(a, b) {
    return !(
    b.x > a.x + a.width || b.x + b.width < a.x || b.y > a.y + a.height || b.y + b.height < a.y);
}

function drawAll() {

    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // // draw the background
    // // (optionally drawImage an image)
    // ctx.fillStyle = "ivory";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    //draw mario


    // draw the block
    // ctx.fillStyle = "skyblue";
    // ctx.fillRect(block.x, block.y, block.width, block.height);
    // ctx.strokeStyle = "lightgray";
    // ctx.strokeRect(block.x, block.y, block.width, block.height);

    ctx.drawImage(mario, marioX, marioY, mario.width, mario.height);
    mario.src = 'images/mario.png';

    // draw all rocks
    for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        var rocksImg = new Image();
        //optionally,
        rocksImg.src = 'images/150x_coin_image.png';
        ctx.drawImage(rocksImg,rock.x,rock.y,rock.width, rock.height);
        // ctx.fillStyle = "gray";
        // ctx.fillRect(rock.x, rock.y, rock.width, rock.height);
    }

    // draw the score
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 10, 15);
    $('span').text('Score: ' + score, 10, 15);
}


// button to start the game
$("#start").click(function () {
    score = startingScore;
    block.x = 0;
    for (var i = 0; i < rocks.length; i++) {
        resetRock(rocks[i]);
    }
    if (!continueAnimating) {
        continueAnimating = true;
        animate();
    }
});
