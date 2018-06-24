/// <reference path="./libraries/p5.global-mode.d.ts" />

var mapimg;



var url1 = 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/'
var delim = ',';
var clat = '0';
var clong= '0';
var zoom = '1';
var angle = '0';
var unknown = '0';

var url2 = '?access_token=' 
var api_key = config.API_KEY;


function preload(){
	var w = windowWidth;
	var h = windowHeight;
	mapimg = loadImage(url1+clat+delim+clong+delim+zoom+delim+angle+delim+unknown+'/'+str(w)+'x'+str(h)+url2+api_key)
	console.log(url1+clat+delim+clong+delim+zoom+delim+angle+delim+unknown+'/'+str(w)+'x'+str(h)+url2+api_key)
}


function setup() {
	//createElement('h2','Earthquake Hotspots');
	createCanvas(windowWidth,windowHeight);
	image(mapimg,0,0);
}

