"use strict";

var briksrow = 5;
var brikscol = 6;
var brikswid = 85;
var brikshei = 18;
var brikspad = 15;
var briksoftop = 28;
var briksofleft = 26;
var br = [];

for (var c = 0; c < brikscol; c++) {
  br[c] = [];

  for (var r = 0; r < briksrow; r++) {
    br[c][r] = {
      x: 0,
      y: 0,
      status: 1
    };
  }
}

function drawBriks() {
  for (var _c = 0; _c < brikscol; _c++) {
    for (var _r = 0; _r < briksrow; _r++) {
      if (br[_c][_r].status == 1) {
        var brikX = _c * (brikswid + brikspad) + briksofleft;
        var brikY = _r * (brikshei + brikspad) + briksoftop;
        br[_c][_r].x = brikX;
        br[_c][_r].y = brikY;
        ctx.beginPath();
        ctx.rect(br[_c][_r].x, br[_c][_r].y, brikswid, brikshei);
        ctx.fillStyle = 'rgb(91, 138, 114)';
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}