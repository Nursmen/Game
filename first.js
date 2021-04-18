function draw ()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawP();

    moveBall();
    Pmove();

    drawBriks();
    calDetect();

    requestAnimationFrame(draw);
}

startmove();

draw();
// var interval = setInterval(draw, 10);