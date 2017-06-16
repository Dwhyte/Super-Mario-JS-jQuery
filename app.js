    //Create the canvas
      var c = document.getElementById('canvas');
      var ctx = c.getContext('2d');

      // Draw Mario :)
      mario.onload = function() {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(mario, xMario, yMario, marioWidth, marioHeight);
      };
      mario.src = 'images/mario.png';





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
