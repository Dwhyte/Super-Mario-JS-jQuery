//Create the canvas
  var c = document.getElementById('canvas');
  var ctx = c.getContext('2d');


    $("#StartButton").click(function () {
        $("#SplashScreen").hide();
        $("#canvas").show();
    });

    // game variables
    var startingScore = 0;
    var continueAnimating = false;
    var score;

    var mario = new Image();
    mario.src = 'images/mario.png';
    var marioWidth = 50;
    var marioHeight = 100;
    var xMario = 420;
    var yMario = 350;


    // coin variables
    var coinWidth=50;
    var coinHeight=50;
    var totalCoins = 10;
    var coins=[];
    for(var i=0;i<totalCoins;i++){
        addCoin();
    }

    // Add Coin
    function addCoin(){
        var coin={
            width:coinWidth,
            height:coinHeight
        };
        resetCoin(coin);
        coins.push(coin);
    }

    // move the coin to a random position near the top-of-canvas
    // assign the coin a random speed
    function resetCoin(coin){
        coin.x=Math.random()*(canvas.width-coinWidth);
        coin.y=15+Math.random()*30;
        coin.speed=0.9+Math.random()*0.5;
    }


      // init bunch of sounds
      ion.sound({
          sounds: [
              {name: "beer_can_opening"},
              {name: "bell_ring"},
              {name: "branch_break"},
              {name: "button_click"},
              {name: "coin_sound"}
          ],

          // main config

          // Path to the folder where the sounds files are
          path: "ion.sound-3.0.7/sounds/",

          // Starts loading sound files even before you use them
          preload: true,

          // Multiple sounds at once
          multiplay: true,

          // volume set at 90%
          volume: 0.9
      });





    function animate() {
        // request another animation frame

        if (continueAnimating) {
            requestAnimationFrame(animate);
        }

        // for each coin
        // (1) check for collisions
        // (2) advance the coin
        // (3) if the coin falls below the canvas, reset that coin

        for (var i = 0; i < coins.length; i++) {

            var coin = coins[i];

            // test for coin-mario collision
            if (isColliding(coin, mario)) {
                ion.sound.play('coin_sound');
                score += 1;
                resetCoin(coin);
            }
            // advance the coins
            coin.y += coin.speed;

            // if the coin is below the canvas,
            if (coin.y > canvas.height) {
                resetCoin(coin);
            }
        }
        // redraw everything
        drawAll();
    }

    function isColliding(a, b) {
         return !(
        xMario > a.x + coinWidth || xMario + marioWidth < a.x || yMario > a.y + coinHeight || yMario + marioHeight < a.y);
    }

mario.onload = function() {
  mario.isLoaded = true;
  ctx.imageSmoothingEnabled = false;
  // var marioImg = new Image();
  ctx.drawImage(mario, xMario, yMario, marioWidth, marioHeight);
  // ctx.drawImage(mario, marioX, marioY, mario.width, mario.height);
};

function drawAll(){
    // clear the canvas
ctx.clearRect(0, 0, c.width, c.height);

//ctx.drawImage(mario, marioX, marioY, marioWidth, marioWeight);

    // draw all coins
    for (var i = 0; i < coins.length; i++) {
        var coin = coins[i];
        var coinsImg = new Image();
        coinsImg.src = 'images/150x_coin_image.png';
        ctx.drawImage(coinsImg,coin.x,coin.y,coin.width, coin.height);

    }
    //
    // Draw Mario :)
    if (mario.isLoaded) {
      ctx.drawImage(mario, xMario, yMario, marioWidth, marioHeight);
    }

    // draw the score
    // ctx.font = "20px Times New Roman";
    // ctx.fillStyle = "black";
    // ctx.fillText("Score: " + score, 10, 15);

    $('.current-coins').text('Coins Collected: ' + score, 10, 15);

}

  // Score Board Info
 // if($('.current-coins').text() === 'undefined'){
 //   $('.current-coins').text('0');
 // }else{
 //   $('.current-coins').text('Coins Collected: ' + score, 10, 15);
 // }

ctx.clearRect(0, 0, c.width, c.height);

// Mario's Movements
  $(document).keydown(function(e){
      switch (e.which){
      case 37:    //left arrow key
          if (xMario === 0){
            // Stop Moving Bro
          }else{
            marioWidth = 100;
            marioHeight = 100;
            xMario = xMario - 60;
            speed = 1;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(mario, xMario, yMario, marioWidth, marioHeight);
            mario.src = 'images/mario_flying_right.png';
        }
        break;

      case 38:    //up arrow key
              if (yMario < 0){
                // Stop Moving Bro
              }else{
              marioWidth = 100;
              marioHeight = 100;
              yMario = yMario - 60;

              ctx.clearRect(0, 0, c.width, c.height);
              ctx.drawImage(mario, xMario, yMario, marioWidth, marioHeight);
              mario.src = 'images/mario_flying_up.png';
            }
            console.log(xMario);
          break;
      case 39:    //right arrow key

            if (xMario > 800){
              //Do nada
            } else {
            marioWidth = 100;
            marioHeight = 100;
            xMario = xMario + 60;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(mario, xMario, yMario, marioWidth, marioHeight);
            mario.src = 'images/mario_flying_left.png';
          }
          console.log(xMario);
          break;
      case 40:    //bottom arrow key
          if (yMario >= 440){
            // Stop Moving Bro
          }else{
            marioWidth = 100;
            marioHeight = 100;
            yMario = yMario + 60;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(mario, xMario, yMario, marioWidth, marioHeight);
            mario.src = 'images/mario_dropping_down.png';
          }
          console.log(yMario);
          break;
      default:
            marioWidth = 50;
            marioHeight = 100;
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.drawImage(mario, xMario, yMario, marioWidth, marioHeight);
            mario.src = 'images/mario.png';
      }
  });



  // button to start the game
  $("#StartButton").click(function () {
      score = startingScore;
      xMario = 420;
      mario.src = 'images/mario.png';
      ctx.drawImage(mario, xMario, yMario, marioWidth, marioHeight);
      for (var i = 0; i < coins.length; i++) {
          resetCoin(coins[i]);
      }
      if (!continueAnimating) {
          continueAnimating = true;
          animate();
      }

      // var startTime = new Date().getTime();
      // var interval = setInterval(function(){
      //     if(new Date().getTime() - startTime > 30000){
      //         clearInterval(interval);
      //
      //         return alert('Time has run out...You Lost');
      //
      //
      //     }
      //     //do whatever here..
      //
      //
      // }, 1000);

      var seconds_left = 30;
var interval = setInterval(function() {
    document.getElementById('timer').innerHTML = 'Time left: ' + --seconds_left;

    if (seconds_left <= 0)
    {
        document.getElementById('timer').innerHTML = 'Refresh page to play again';
        clearInterval(interval);
        ctx.clearRect(0, 0, c.width, c.height);

        return alert('Time has run out...You Lost');
    }
}, 1000);


  });
