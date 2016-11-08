// jshint esversion: 6
// jshint browser: true

let surface=document.getElementById("drawingArea1");
let ctx=surface.getContext("2d");
let cor_x;
let cor_y;

/** reflection function on a vertical axis
	* give coordinates of a point, and reflection axis
	* return new coordinates after reflection.
	*/
function mirror_y(x, y, reflect_x) {
    var new_x = 2 * reflect_x - x;
    var new_y = y;
    var new_coordinate = [new_x, new_y];
    
    return new_coordinate;
}

/** draw a cat 
	*	input the coordinates x and y for the center of the cat
	*	does not return, output the drawing only.
	*/
let drawCat = function (x, y) {

		ctx.save();
		ctx.translate(x, y);

		//draw ears

		//ear pionts on the left
		ctx.beginPath();
		ctx.fillStyle = "black";
		var points3 = [[0, -15],
					[-50*Math.cos(60*Math.PI/180), -50*Math.sin(60*Math.PI/180)],
					[-50*Math.cos(30*Math.PI/180), -50*Math.sin(30*Math.PI/180)],
					[-15, 0]];

		//left side ear
		for (var i = 0; i < points3.length; i++){
		ctx.lineTo(points3[i][0],points3[i][1]);
			console.log(points3[i][0]);
			console.log(points3[i][1]);
		}
		ctx.fill();

		// reflection on the right
		ctx.beginPath();
		ctx.fillStyle="black";
		for(i=0;i<points3.length;i++){
			var reflextion_x= mirror_y(points3[i][0],points3[i][1],0)[0];
			var reflextion_y= mirror_y(points3[i][0],points3[i][1],0)[1];
			ctx.lineTo(reflextion_x,reflextion_y);
		}
		ctx.fill();	
	
		// cat face
		ctx.beginPath();
		ctx.fillStyle = "grey";
		ctx.arc(0, 0, 40, 0, 2*Math.PI);
		ctx.fill();

		// draw eyes
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.arc(-15,-20,3, 0, 2*Math.PI);
		ctx.arc(15,-20,3, 0, 2*Math.PI);
		ctx.fill();

		// draw nose
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.arc(0, 10, 3, 0, 2 * Math.PI);
		ctx.fill();

		//draw catbear
		ctx.moveTo(-50, 0);
		ctx.lineTo(50, 20);
		ctx.moveTo(-50, 10);
		ctx.lineTo(50, 10);
		ctx.moveTo(-50, 20);
		ctx.lineTo(50, 0);
		ctx.stroke();

		ctx.restore();

		};

let updateCoordinate = function(x_increment,y_increment){
        console.log("before:" + cor_x + "/" + cor_y);
        cor_x += 10 * x_increment;
        cor_y += 10 * y_increment;
        console.log("updated:" + cor_x + "/" + cor_y);
};

let moveUp = function (){
    updateCoordinate(0,-1);
    console.log(cor_x + "/" + cor_y );
    ctx.clearRect(0,0,surface.width,surface.height);
    drawCat(cor_x,cor_y);
};


let moveLeft = function (){
    updateCoordinate(-1,0);
    console.log( cor_x + "/" + cor_y );
    ctx.clearRect(0,0,surface.width,surface.height);
    drawCat(cor_x,cor_y);  
};

let moveRight = function (){
    updateCoordinate(1,0);
    console.log( cor_x + "/" + cor_y );
    ctx.clearRect(0,0,surface.width,surface.height);
    drawCat(cor_x,cor_y);   
};

let moveDown = function (){
    updateCoordinate(0,1);
    console.log(cor_x + "/" + cor_y );
    ctx.clearRect(0,0,surface.width,surface.height);
    drawCat(cor_x,cor_y);  
};

let reset =  function(){
	cor_x=surface.width/2.0;
	cor_y=surface.height/2.0;
    console.log(cor_x + "/" + cor_y );
    ctx.clearRect(0,0,surface.width,surface.height);
    drawCat(cor_x,cor_y); 
};