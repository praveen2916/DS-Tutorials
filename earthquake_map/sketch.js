/// <reference path="./libraries/p5.global-mode.d.ts" />

var mapimg;



var url1 = 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/'
var delim = ',';
var clat = '0';
var clong= '0';
var zoom = '1';
var angle = '0';
var unknown = '0';

var url2 = '?access_token=pk.eyJ1IjoicHJhdmVlbjI5MTYiLCJhIjoiY2ppdGVkemZiMjZ4dTNxcDh3NnFzaDk4aiJ9.fBuoUA870JciPc93YicPTQ' 



function preload(){
	var w = windowWidth;
	var h = windowHeight;
	mapimg = loadImage(url1+clat+delim+clong+delim+zoom+delim+angle+delim+unknown+'/'+str(w)+'x'+str(h)+url2)
	console.log(url1+clat+delim+clong+delim+zoom+delim+angle+delim+unknown+'/'+str(w)+'x'+str(h)+url2)
}


function setup() {
	//createElement('h2','Earthquake Hotspots');
	createCanvas(windowWidth,windowHeight);
	image(mapimg,0,0);
}

