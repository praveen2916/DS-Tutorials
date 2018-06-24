var lineX=0;
var url = 'http://api.open-notify.org/iss-now.json';

var lat;
var long;

var issX; 
var issY;

var source = new Proj4js.Proj('EPSG:4326');    //source coordinates will be in Longitude/Latitude, WGS84
var dest = new Proj4js.Proj('EPSG:3785');     //destination coordinates in meters, global spherical mercators projection, see http://spatialreference.org/ref/epsg/3785/

function preload(){
    wmap = loadImage('world-map.gif');
    
}

function setup() {
	createCanvas(1200, 715);
	setInterval(askIss, 1000);
	
}

function askIss(){
	loadJSON(url,gotData,'jsonp');
}

function gotData(data){
	console.log(data.iss_position.latitude,data.iss_position.longitude)
	lat = data.iss_position.latitude;
	long = data.iss_position.longitude;
	
	var sin_y = sin(lat)*PI/180;
	sin_y = min(max(sin_y,-0.9999), 0.9999);

	issX=1200*(0.5+long/360),
	issY=715*(0.5-log((1+sin_y)/(1-sin_y))/(4*PI) );
	
	//issX = (width/2) +  width * cos() * cos(long);
	//issY =  (height/2)+height * cos(lat) * sin(long);
	console.log(1200-issX,issY)
}

	
function draw() {
	image(wmap,0,0);
	fill(255);
	ellipse(1200-issX,issY, 5,5);
	line(lineX,0,lineX,height);
	lineX = lineX+15;
	if(lineX>1200){
		lineX = 0;
	}
}

