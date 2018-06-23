/// <reference path="./libraries/p5.global-mode.d.ts" />

var on = false;
var cir_on = false;
var up = true;
var cx = 0;
var cy = 0;

let balls = [];
let ball;
/* 
Here we define the Classes ie ball and box.
These classes will have properties ie. we "construct" a ball and a box
(like a template, they take in arguements and pass on to... )
Once we know the properties we define what all we can do with the classes 
eg. ball can "move", we can "show" the ball.  These are called the "methods".
This whole package is called encapsulation.

Once we have done that, we can access the object like this
ball.move() will move the ball as per what is defined in the move method of the class ball
ball.show() will show the ball as defined in the show() method of the class ball.

I have two classes 
1 -> ball 
	 (i)-> show
	(ii)-> move
2 -> rectangle
	 (i)-> show
	(ii)-> click
*/

class Ball {
	constructor(tempX, tempY, tempDia) {
		this.x = tempX;
		this.y = tempY;
		this.dia = tempDia;
		this.color = 0
		//this.speed = tempSpeed;
	}

	show() {
		stroke(255, 255, 255);
		strokeWeight(2);
		fill(this.color,this.color,this.color, 75);
		ellipse(this.x, this.y, this.dia, this.dia);
	}

	move() {
		
		this.x = this.x + random(-2, 2);
		this.y = this.y + random(-2, 2);

	}

	rollover(px, py) {
		let d = dist(px, py, this.x, this.y);

		if (d < this.dia) {
			cx = mouseX;
			cy = mouseY;
			return true;
		} else {
			false;
		}
	}

	changeColor(col) {
		this.color = col;
	}

	intersects(other) {
		let d = dist(this.x, this.y, other.x, other.y);
		return (d < this.dia/2 + other.dia/2);

	}

}

class ClickBox {
	constructor() {
		this.x = 275;
		this.y = 275;
		this.width = 50;
		this.height = 50;
	}

	show(r, g, b) {
		rectMode(CENTER);
		stroke(255);
		strokeWeight(2);
		fill(r, g, b);
		rect(this.x, this.y, this.width, this.height);
	}

	onoff(x, y) {

		if (x > 250 && x < 300 && y > 250 && y < 300) {
			if (on) {
				up = true;
			}
			return on = !on;
		}

	}
}



function setup() {
	createCanvas(600, 400);

	clickbox = new ClickBox();


}



function draw() {
	background(0);

		if (on) {
		background(0);


		for (let i = 0; i < balls.length; i++) {
			if (balls[i].rollover(mouseX, mouseY)) {
				balls[i].changeColor(255);
			}



			
		}
		


		for (let i = 0; i < balls.length; i++) {
			balls[i].show();
			balls[i].move();
			


			for (let j = 0; j < balls.length; j++) {
				if (i!=j && balls[i].intersects(balls[j])) {
					console.log("intersect")
					balls[i].changeColor(255);
					balls[j].changeColor(255);
				}else{
					balls[i].changeColor(0);
					//console.log("doesn't intersect");
				} 
			}


		
		}

		clickbox.show(255, 0, 0);
	}
	else {
		background(0);
		clickbox.show(0, 255, 0);
		balls = []

	}
}



function mousePressed() {
	clickbox.onoff(mouseX, mouseY);

	if (!(mouseX > 250 && mouseX < 300 && mouseY > 250 && mouseY < 300)) {
		
		if (up == true && balls.length < 10) {
			dia = random(20, 60);
			let b = new Ball(mouseX, mouseY, dia);
			balls.push(b);
			console.log(balls.length)
			if (balls.length == 10) {
				up = false;
			}
		} else {
			up = false;
			for (let i = balls.length - 1; i >= 0; i--) {
				if (balls[i].rollover(mouseX, mouseY)) {
					balls.splice(i, 1);
					console.log(i);
				}
				if (balls.length == 0) {
					up = true;
				}
			}

		}
		

	}
}
