var ball;
var database;
var pos;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var startingPoint=database.ref("ball/position");
    startingPoint.on("value",refering_readupon,show_error)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
       position(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
       position(1,0);
    }
    else if(keyDown(UP_ARROW)){
       position(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
       position(0,+1);
    }
    drawSprites();
}

function position(x,y){

database.ref("ball/position").set({

x:ball.x+x,y:ball.y+y

})   

}
function refering_readupon(data){

pos=data.val();
ball.x=pos.x;
ball.y=pos.y;

}
function show_error(){

console.log("show_error");

}
