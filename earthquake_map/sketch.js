/// <reference path="./libraries/p5.global-mode.d.ts" />

var w = 0;
var h = 0;

var mapimg;
//17.6868° N, 83.2185° E
//27.9506° N, 82.4572° W
var lat = 27.9506;
var long = -82.4572;

var url1 = 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/'
var delim = ',';
var clat = '0';
var clong = '0';
var zoom = '1';
var angle = '0';
var unknown = '0';

var url2 = '?access_token='
var api_key = config.API_KEY;

var earthquakes;


function preload() {
	var w = 1024;
	var h = 512;
	mapimg = loadImage(url1 + clat + delim + clong + delim + zoom + delim + angle + delim + unknown + '/' + str(w) + 'x' + str(h) + url2 + api_key)
	earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
	console.log(url1 + clat + delim + clong + delim + zoom + delim + angle + delim + unknown + '/' + str(w) + 'x' + str(h) + url2 + api_key)
}

function mercX(long) {
	long = radians(long);
	var a = (256 / PI) * pow(2, int(zoom));
	var b = long + PI;
	return a * b;
}

function mercY(lat) {
	lat = radians(lat);
	var a = (256 / PI) * pow(2, int(zoom));
	var b = tan(PI / 4 + lat / 2);
	var c = PI - log(b);
	return a * c;
}


function setup() {
	//createElement('h2','Earthquake Hotspots');
	createCanvas(1024, 512);
	translate(width / 2, height / 2);
	imageMode(CENTER);
	image(mapimg, 0, 0);

	var cx = mercX(int(clong));
	var cy = mercY(int(clat));

	for (var i = 0; i < earthquakes.length; i++) {
		var data = earthquakes[i].split(/,/);  // this split is regular expression
		//console.log(data, data[1], data[2]);
		var lat = int(data[1]);
		var long = int(data[2]);

		var x = mercX(long) - cx;
		var y = mercY(lat) - cy;

		fill(255, 0, 255, 200);
		ellipse(x, y, 5, 5);

	}

}

