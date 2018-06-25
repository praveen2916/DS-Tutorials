/// <reference path="./libraries/p5.global-mode.d.ts" />

let searchUrl ='https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles='


let userInput;

function setup() {
	noCanvas()
	createElement('h2', 'Wikipedia API Example')
	input=createInput();
	input.changed(goWiki);
	goWiki()

	function goWiki(){
		let term = input.value();
		let url = searchUrl+term;
		loadJSON(url,gotSearch,'jsonp');
		console.log(url);
	}
	function gotSearch(data){
		console.log(data);
		let len = data[1].length;
		let index = floor(random(0,len));
		let title = data[1][index];
		title = title.replace(/\s+/g,'_')
		console.log('Querying :'+ title);	
		let url_c = contentUrl+title;
		loadJSON(url_c,gotContent,'jsonp')
		console.log(url_c)
	}
	function gotContent(data){
		console.log(data)
	}

}

