"use strict";

var pheight = 12;
var pwidth = 100;
var px = (canvas.width - pwidth) / 2;
var Lpr = false;
var Rpr = false;

function drawP() {
  ctx.beginPath();
  ctx.rect(px, canvas.height - pheight, pwidth, pheight);
  ctx.fillStyle = 'rgb(91, 138, 114)';
  ctx.fill();
  ctx.closePath();
}

function startmove() {
  document.addEventListener('keydown', keyDownHandler); // document.addEventListener('keyup', keyUpHandler);

  document.addEventListener("mousemove", mouseMoveHandler); // document.addEventListener('touchand', handleTouchEnd);

  document.addEventListener('touchmove', handleTouchMove);
}

function handleTouchMove(e) {
  e.preventDefault(); // we don't want to scroll

  var touch = e.touches[0];
  var x = touch.clientX;
  var mousepos = x - canvas.offsetLeft - pwidth / 2;

  if (mousepos > 0 && mousepos + pwidth < canvas.width) {
    px = mousepos;
  }
} // function handleTouchMove(e)
// {
//     Tx = e.Touche.clientX - canvas.offsetLeft - pwidth/2;
//     if (Tx > 0 && Tx + pwidth < canvas.width)
//     {
//         px = Tx;
//     }    
// }


function mouseMoveHandler(e) {
  var mousepos = e.clientX - canvas.offsetLeft - pwidth / 2;

  if (mousepos > 0 && mousepos + pwidth < canvas.width) {
    px = mousepos;
  }
}

function keyDownHandler(e) {
  if (e.key == 'a' || e.key == 'A') {
    Lpr = true;
  } else if (e.key == 'd' || e.key == 'D') {
    Rpr = true;
  }
}

function keyUpHandler(e) {
  if (e.key == 'a' || e.key == 'A') {
    Lpr = false;
  } else if (e.key == 'd' || e.key == 'D') {
    Rpr = false;
  }
}

function Pmove() {
  // if (Lpr)
  // {
  //     px -= 7;  
  //     if (px < 0)
  //     {
  //         px = 0;
  //     }
  // }
  if (Rpr) {
    px += 7;

    if (px + pwidth > canvas.width) {
      px = canvas.width - pwidth;
    }
  }
}