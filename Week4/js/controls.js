var keydown = document.addEventListener("keydown", keyDown);
var keyup = document.addEventListener("keyup", keyUp);

var w = false;
var a = false;
var s = false;
var d = false;

var up = false;
var down = false;
var left = false;
var right = false;

function keyDown(e){
    console.log("Pressed " + e.key);
    if(e.key == "w"){
        w = true;
    }
    if(e.key == "a"){
        a = true;
    }
    if(e.key == "s"){
        s = true;
    }
    if(e.key == "d"){
        d = true;
    }

    //Arrow Keys
    if(e.key == "ArrowUp"){
        up = true;
    }
    if(e.key == "ArrowDown"){
        down = true;
    }
    if(e.key == "ArrowLeft"){
        left = true;
    }
    if(e.key == "ArrowRight"){
        right = true;
    }
}

function keyUp(e){
    console.log("Released " + e.key);
    if(e.key == "w"){
        w = false;
    }
    if(e.key == "a"){
        a = false;
    }
    if(e.key == "s"){
        s = false;
    }
    if(e.key == "d"){
        d = false;
    }

    //Arrow Keys
    if(e.key == "ArrowUp"){
        up = false;
    }
    if(e.key == "ArrowDown"){
        down = false;
    }
    if(e.key == "ArrowLeft"){
        left = false;
    }
    if(e.key == "ArrowRight"){
        right = false;
    }
}