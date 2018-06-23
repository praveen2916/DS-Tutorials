/// <reference path="./libraries/p5.global-mode.d.ts" />

var on = false;
var up = true;

let balls = [];
let flower;
let kitten;
let kittens=[];
let img;
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
    constructor(tempX, tempY, tempDia, kitten) {
        this.x = tempX;
        this.y = tempY;
        this.dia = tempDia;
        this.color = 0;
        this.kitten = kitten;
        this.flower = flower;
        
        //this.speed = tempSpeed;
    }

    show() {
        
        image(this.kitten, this.x, this.y, this.dia, this.dia);
        /* stroke(255, 255, 255);
        strokeWeight(2);
        fill(this.color, this.color, this.color, 75);
        ellipse(this.x, this.y, this.dia, this.dia); */
    }

    move() {

        this.x = this.x + random(-2, 2);
        this.y = this.y + random(-2, 2);

    }

    clicked(px, py) {
        let d = dist(px, py, this.x, this.y);

        if (d < this.dia) {
           
            return true;
        } else {
            false;
        }
    }

    changeImg(pic) {
        if (pic == flower){
        this.kitten = pic;
    }else{
        this.kitten = kitten;
    }
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return (d < this.dia / 2 + other.dia / 2);

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


function preload(){
    flower = loadImage('pics/flower.png');
    for (let i = 0; i < 5;i++ ){
        kittens[i] = loadImage('pics/kitten'+i+'.jpg');
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
            balls[i].show();
            balls[i].move();



            for (let j = 0; j < balls.length; j++) {
                if (i != j && balls[i].intersects(balls[j])) {
                    console.log("intersect")
                    //balls[i].changeColor(255);
                    //balls[j].changeColor(255);
                    balls[i].changeImg(flower);
                    balls[j].changeImg(flower);
                    
                } else {
                    balls[i].show();
                    balls[i].move();
                
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
            dia = random(50, 150);
            let kitten = random(kittens);
            console.log(kitten);
            let b = new Ball(mouseX, mouseY, dia, kitten);
            balls.push(b);
            console.log(balls.length)
            for (let i = 0; i<balls.length; i++){
                if(balls[i].clicked(mouseX,mouseY)){
                    //do something
                }
            }
            if (balls.length == 10) {
                up = false;
            }
        } /* else {
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

        } */


    }
}
