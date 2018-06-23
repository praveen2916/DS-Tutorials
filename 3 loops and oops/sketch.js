/// <reference path="./libraries/p5.global-mode.d.ts" />

var x = 0;

var speed = 3;
var on = false;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);

	rectMode(CENTER);
	stroke(255);
	strokeWeight(2);
	noFill();

	console.log(mouseX, mouseY);

	if (on){
		//do something
		background(0, 255, 0);
			noStroke();
			fill(0, 0, 255);
			ellipse(x, 150, 50, 50);

			if (x > width || x < 0) {
				speed = speed * -1
			}

			x = x + speed;
	}else { 
		background(0);
	}

	rect(275, 275, 50, 50);

	}


function mousePressed(){
	if (mouseX > 250 && mouseX < 300 && mouseY > 250 && mouseY < 300){
		on = !on;
	}
}	