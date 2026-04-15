var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var interval = 1000/60;
setInterval(game, interval);

function createBall() {
    var ball = {
        x: randomNumber(15, canvas.width-15),
        y: randomNumber(15, canvas.height-15),
        moveX:setRandomDirection(),
        moveY:setRandomDirection(),
        color: `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`,
        radius: 15,
        drawBall: function () {
            //draw the object;
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();

        }
    }

    return ball
}

function randomNumber(low,high){
    return Math.random() * (high - low) + low;
}

function setRandomDirection(){
    var dir = Math.random();
    if(dir > 0.5){
        return 2;
    }else{
        return -2;
    }
}

var myBall = createBall();
var myBalls = []

for(var i = 0; i<80; i++){
    myBalls[i] = createBall();
}

function game(){
    //clear the game screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //myBall.drawBall();

    for(var i = 0; i<myBalls.length; i++){
        myBalls[i].drawBall();

        if(myBalls[i].x > canvas.width - myBalls[i].radius){
            myBalls[i].moveX *= -1;
            myBalls[i].color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`;
        }
        if(myBalls[i].y > canvas.height - myBalls[i].radius){
            myBalls[i].moveY *= -1;
            myBalls[i].color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`;
        }
        if(myBalls[i].x <  myBalls[i].radius){
            myBalls[i].moveX *= -1;
            myBalls[i].color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`;
        }
        if(myBalls[i].y <  myBalls[i].radius){
            myBalls[i].moveY *= -1;
            myBalls[i].color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`;
        }
        //myBalls[i].color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`;
        myBalls[i].x += myBalls[i].moveX;
        myBalls[i].y += myBalls[i].moveY;
    }

}