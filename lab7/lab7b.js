// jshint esversion: 6
// jshint browser: true

let surface2=document.getElementById("drawingArea2");
let ctx2=surface2.getContext("2d");


let bottleHeight = 15;
let bottleWidth = 45;

let bottle1_Size=3;
let bottle2_Size=3;

let bottle1_Full_Size=3;
let bottle2_Full_Size=5;


let changeSize1 = function(){
    let size = document.getElementById("bottle1Input");
    if (Number(size.value) < bottle1_Full_Size);
        bottle1_Size = Number(size.value);
    updateBottle();
};

let changeSize2 = function(){
    let size = document.getElementById("bottle2Input");
    if (Number(size.value) < bottle2_Full_Size);
        bottle2_Size = Number(size.value);
    updateBottle();
};

let emptyBottle1 = function(){
    bottle1_Size = 0;
    updateBottle();
};

let emptyBottle2 = function(){
    bottle2_Size = 0;
    updateBottle();
};

let fillBottle1 = function(){
    bottle1_Size = bottle1_Full_Size;
    updateBottle();
};

let fillBottle2 = function(){
    bottle2_Size = bottle2_Full_Size;
    updateBottle();
};

let TransBottle1 = function(){
    let extra = bottle1_Size + bottle2_Size - bottle2_Full_Size;
    
    if (extra <0){
        bottle1_Size = 0 ;
        bottle2_Size = bottle2_Full_Size + extra;
        console.log("b2 size : "+bottle2_Size );
    }else{
        bottle1_Size = extra;
        bottle2_Size = bottle2_Full_Size;
    }

    updateBottle();
};


let TransBottle2 = function(){
    let extra = bottle1_Size + bottle2_Size - bottle1_Full_Size;
    
    if (extra <0){
        bottle2_Size = 0 ;
        bottle1_Size = bottle1_Full_Size + extra;
        console.log("b1 size : "+bottle1_Size );
    }else{
        bottle2_Size = extra;
        bottle1_Size = bottle1_Full_Size;
    }

    updateBottle();
};


let updateBottle = function(){
   ctx2.clearRect(0, 0, surface.width, surface.height);
   drawBottle1(bottle1_Size, bottle1_Full_Size, 100, 360);
   drawBottle1(bottle2_Size, bottle2_Full_Size, 250, 360);
};

/**
* draw a bottle based on the water size, the bottle size, and where the bottle is.
*/
let drawBottle1 = function(size,bottle1FullSize,cor_x,cor_y){
    
    ctx2.save();
    ctx2.translate(cor_x,cor_y);
    
    for (let waterCount = 0; waterCount < size; waterCount++){
        drawFullSquare(waterCount);
    }
    
    for (let emptyCount = size; emptyCount < bottle1FullSize; emptyCount++){
        drawEmptySquare(emptyCount);
        console.log("empty: " + emptyCount);
        console.log("FullSize: " + bottle1FullSize);
    }
    
    drawBottleHead(bottle1FullSize);
    
    ctx2.restore();    
};

/**
*   draw a full bottole blue section based on coordinate size
*   the origion of the drawing is at (0,0)
*/
let drawFullSquare = function(size){
	ctx2.fillStyle="blue";
	ctx2.strokeStyle="black";
	ctx2.fillRect(0,-bottleHeight - size * bottleHeight, bottleWidth, bottleHeight);
	ctx2.strokeRect(0,-bottleHeight - size * bottleHeight, bottleWidth, bottleHeight);
};

/**
*   draw a full bottole empty section based on coordinate size
*   the origion of the drawing is at (0,0)
*/
let drawEmptySquare = function(size){
	ctx2.strokeStyle="black";
	ctx2.strokeRect(0,-bottleHeight - size * bottleHeight,bottleWidth,bottleHeight);
};

/**
*   draw a full bottole empty head section based on coordinate size
*   the origion of the drawing is at (0,0)
*/
let drawBottleHead = function(size){
    ctx2.save();
    ctx2.translate(0,-1 * size * bottleHeight);
    
	ctx2.strokeStyle="black";
	ctx2.beginPath();
	ctx2.moveTo(0,0);
	ctx2.lineTo(bottleWidth,0);
	ctx2.lineTo(bottleWidth*0.75,-1*bottleHeight);
    ctx2.lineTo(bottleWidth*0.25,-1*bottleHeight);
    ctx2.lineTo(0,0);
    ctx2.stroke();
    
    ctx2.strokeRect(bottleWidth*0.25,-2*bottleHeight,0.5*bottleWidth,bottleHeight);
    
    ctx2.restore();
};

updateBottle();

//drawBottle1(2,3,100,360);
//drawBottle1(4,5,200,360);

