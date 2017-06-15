    //Create the canvas
      var c = document.getElementById('canvas');
      var ctx = c.getContext('2d');
      var mario = new Image();
      mario.width = 50;
      mario.height = 100;
      // var width = 20;
      // var height = 50;
      var marioX = 420;
      var marioY = 350;
      var speed = 1; // make this number smaller to move faster
      var leftPointer, rightPointer, upPointer, downPointer;


      // Draw Mario :)
      mario.onload = function() {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(mario, marioX, marioY, mario.width, mario.height);
      };
      mario.src = 'images/mario.png';




function move() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(mario, marioX, marioY, mario.width, mario.height);
    if (marioX < canvas.width - 10) marioX++;  /// 10 being an arbitrary value
    if (marioY < canvas.height - 10) marioY++;
}




// // init bunch of sounds
// ion.sound({
//     sounds: [
//         {name: "beer_can_opening"},
//         {name: "bell_ring"},
//         {name: "branch_break"},
//         {name: "button_click"}
//     ],
//
//     // main config
//
//     // Path to the folder where the sounds files are
//     path: "ion.sound-3.0.7/sounds/",
//
//     // Starts loading sound files even before you use them
//     preload: true,
//
//     // Multiple sounds at once
//     multiplay: true,
//
//     // volume set at 90%
//     volume: 0.9
// });
//
// $(document).ready(function(){
//   $('#open-beer').click(function(){
//     ion.sound.play('beer_can_opening');
//   });
// });
