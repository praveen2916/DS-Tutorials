var lineX = 0;
var url = 'http://api.open-notify.org/iss-now.json';

var lat;
var long;

var issX;
var issY;

function preload() {
	wmap = loadImage('world-map.gif');

}

function setup() {
	createCanvas(1200, 715);
	setInterval(askIss, 1000);
	translate(width / 2, height / 2);
	imageMode(CENTER);

	image(wmap, 0, 0);
}

function askIss() {
	loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
	//console.log(data.iss_position.latitude, data.iss_position.longitude)
	lat = data.iss_position.latitude;
	long = data.iss_position.longitude;

	var sin_y = sin(lat) * PI / 180;
	sin_y = min(max(sin_y, -0.9999), 0.9999);

	issX = 1200 * (0.5 + long / 360),
		issY = 715 * (0.5 - log((1 + sin_y) / (1 - sin_y)) / (4 * PI));

	//issX = (width/2) +  width * cos() * cos(long);
	//issY =  (height/2)+height * cos(lat) * sin(long);
	//console.log(issX, issY)
}


function draw() {

	fill(255);
	ellipse(issX, issY, 10, 10);
	line(lineX,0,lineX,height);
	lineX = lineX+15;
	if(lineX>1200){
		lineX = 0;
	}
}


