/// <reference path="./libraries/p5.global-mode.d.ts" />


var on = false;
var click = false;

var stopX = 0;
var stopY = 0;

function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(0);
	rectMode(CENTER);
	stroke(255);
	strokeWeight(2);
	fill(0, 255, 0);


	if (on && click) {
		//do something


		strokeWeight(3);
		stroke(255);

		for (var x = 50; x <= stopX; x += 50) {
			for (var y = 50; y <= stopY; y += 50) {
				fill(random(255), random(255), random(255));
				ellipse(x, y, 25, 25);

				fill(255, 0, 0);
				rect(400, 550, 50, 50);
			}
		}
	}else if (on){
		for (var x = 50; x <= mouseX && width; x += 50) {
			for (var y = 50; y <= mouseY && height; y += 50) {
				fill(random(255), random(255), random(255));
				ellipse(x, y, 25, 25);

				fill(255, 0, 0);
				rect(400, 550, 50, 50);
			}
		}

	}else if (!on && click){
		click = false
	}
	
	
	else {
	background(0);
}

rect(400, 550, 50, 50);


//console.log(mouseX, mouseY);
}

function mousePressed() {
	if (mouseX > 370 && mouseX < 425 && mouseY > 525 && mouseY < 575) {
		on = !on;
	} else {
		click = true
		stopX = mouseX;
		stopY = mouseY;
	}
}