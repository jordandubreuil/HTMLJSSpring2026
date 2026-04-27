var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var interval = 1000/60;
setInterval(game, interval);

function createGameObject() {
    var gameObject = {
        x: randomNumber(115, canvas.width-115),
        y: randomNumber(15, canvas.height-15),
        moveX:setRandomDirection(),
        moveY:setRandomDirection(),
        color: `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`,
        radius: 15,
        width:15,
        height:15,
        drawBall: function () {
            //draw the object;
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();

        },
        drawSquare:function (){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y, this.width, this.height);
        }
    }

    return gameObject;
}

//Helper Function
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
// This creates a single instance of the ball
var myBall = createGameObject();
var player = createGameObject();
player.x = canvas.width/2;
player.y = canvas.height/2;
player.width = 30;
player.height = 30;
player.color = "purple";

//This creates a collection of objects (balls)
var myBalls = []

for(var i = 0; i<80; i++){
    myBalls[i] = createGameObject();
    myBalls[i].moveY = 0;
    myBalls[i].y = -myBalls[i].y;
}

function game(){
    //clear the game screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);


    //Move the player
    if(w == true || up == true){
        player.y -= 2;
    }
    if(s == true  || down == true){
        player.y += 2;
    }

    if(a == true || left == true){
        player.x -= 2;
    }
    if(d == true  || right == true){
        player.x += 2;
    }

    //myBall.drawBall();
    player.drawSquare();

    for(var i = 0; i<myBalls.length; i++){
        myBalls[i].drawBall();

        //RightSide of Canvas
        if(myBalls[i].x > canvas.width - myBalls[i].radius - 100){
            myBalls[i].moveX *= -1;
            myBalls[i].color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`;
            myBalls[i].y += myBalls[i].radius*3;
        }
        //Bottom of Canvas
        if(myBalls[i].y > canvas.height + myBalls[i].radius){
            //myBalls[i].moveY *= -1;
            //myBalls[i].color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`;
            myBalls[i].y = -randomNumber(0, canvas.height);
         }
        //LeftSide of Canvas
        if(myBalls[i].x <  myBalls[i].radius + 100){
            myBalls[i].moveX *= -1;
            myBalls[i].color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`;
            myBalls[i].y += myBalls[i].radius*3;
        }
        //Top of Canvas
        // if(myBalls[i].y <  myBalls[i].radius){
        //     myBalls[i].moveY *= -1;
        //     myBalls[i].color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`;
        // }
        //myBalls[i].color = `rgb(${randomNumber(0, 255)}, ${randomNumber(0, 255)},${randomNumber(0, 255)})`;
        myBalls[i].x += myBalls[i].moveX;
        myBalls[i].y += myBalls[i].moveY;
    }

}