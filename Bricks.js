let briksrow = 5;
let brikscol = 6;
var brikswid = 85;
var brikshei = 18;
let brikspad = 15;
let briksoftop = 28;
let briksofleft = 26;

var br = [];

for (let c = 0; c < brikscol; c++) {
    br[c] = [];
    for (let r = 0; r < briksrow; r++) {
        br[c][r] = {x: 0, y: 0, status: 1};   
    }
}

function drawBriks()
{
    for (let c = 0; c < brikscol; c++) {
        for (let r = 0; r < briksrow; r++) {
            if (br[c][r].status == 1)
            {
                let brikX = (c*(brikswid + brikspad)) + briksofleft;
                let brikY = (r*(brikshei + brikspad)) + briksoftop;
                br[c][r].x = brikX;
                br[c][r].y = brikY;
                ctx.beginPath();
                ctx.rect(br[c][r].x, br[c][r].y, brikswid, brikshei);
                ctx.fillStyle = 'rgb(91, 138, 114)';
                ctx.fill();
                ctx.closePath();                
            }
    
        }
    }
}