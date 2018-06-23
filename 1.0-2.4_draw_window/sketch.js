/// <reference path="./libraries/p5.global-mode.d.ts" />

var r = 0;
var b = 255;
/* setup happens once */
function setup() {
	createCanvas(600,400);
	
	/* background(250,250,100); */  /* **This sets up the background only once so all the draw is 
									overlapping on each other  */ 

}

/* Draw loops until user closes the window */
function draw() {
	r = map(mouseX,0,600,0,255);  /* maps mouseX 0 to 600 :: r 0 to 255 */
	b = map(mouseX,0,600,255,0);  /* maps mouseX 0 to 600 :: r 255 to 0 */
	background(r,0,b);

	line(mouseX,0,mouseX,400);
	stroke(r,255,0);
	strokeWeight(10);	
	console.log(mouseX,mouseY)
	
}

/* function mousePressed(){
	background(250,250,100);
	
} */


