"use strict";

var x = getRandomInt(canvas.width);
var y = canvas.height - 30;
var fordx = [-2.2, 2.2];
var dx = fordx[Math.floor(Math.random() * 2)];
var dy = -2.2;
var radius = 14;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = 'rgb(91, 138, 114)';
  ctx.fill();
  ctx.closePath();
}

function moveBall() {
  if (y + dy < radius) {
    dy = -dy;
  }

  if (y + dy > canvas.height - radius) {
    if (x > px && x < px + pwidth) {
      dy = -dy;
    } else {
      document.location.reload(); // clearInterval(interval);
    }
  }

  if (x + dx < radius) {
    dx = -dx;
  } else if (x + dx > canvas.width - radius) {
    dx = -dx;
  }

  x += dx;
  y += dy;
}

function getRandomInt(max) {
  var foo = 1;

  while (15 > foo) {
    foo = Math.floor(Math.random() * max);

    if (foo > max - 16) {
      foo = 1;
    }
  }

  return foo;
}

function calDetect() {
  for (var c = 0; c < brikscol; c++) {
    for (var r = 0; r < briksrow; r++) {
      b = br[c][r];

      if (b.status == 1) {
        if (x > b.x && x < b.x + brikswid && y > b.y && y < b.y + brikshei) {
          dy = -dy;
          b.status = 0;
          score++;
          document.getElementById("sc").innerHTML = "Score: " + score;

          if (score == 30 * 0.9) {
            document.getElementById("title").innerHTML = 'You won!';
          }
        }
      }
    }
  }
}