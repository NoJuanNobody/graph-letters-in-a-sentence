// in order to make this application we need
// an input that will take a statement. 
// a "black box"
	/* this black box will go through each character, and analayze which character it is then it will add to a counter to create data for each alphanumeric.*/
// a canvas to visualize the data
	/*this canvas will help to visualize the data. */
var array;
var charCountArray=[];
var charCount;
var characters =[0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function count(char,message){
// go through each character and test if it has the corresponding character
for (var i=0;i<text.length;i++){
	if (array[i] == char ){
		charCount++;
	}
}
charCountArray.push(charCount);
charCount = 0;
}
function parse(message){
	array = message.split("");
	text = array;
}
var text = prompt("what would you like to analyze?");

parse(text);
// count("a",text);
for(var j = 0;j<characters.length; j++){
	count(characters[j],text);
}
charCountArray.shift();
characters.shift();
result = [[characters],[charCountArray]];
console.log(result);
console.log(charCountArray);

var animate = window.requestAnimationFrame||
	window.webkitRequestAnimationFrame||
	window.MozRequestAnimationFrame||
	function(callback){window.setTimeout(callback, 1000,60);};

var canvas = document.createElement('canvas');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

window.onload = function() {
	document.body.appendChild(canvas);
	animate(step);
};

var step = function(){
	// update();
	render();
	animate(step);
};

// var update = function(){

// };

var render = function() {
	context.fillStyle = "#22313F";
	context.fillRect(0,0,width,height);
	for(var i=0; i<characters.length;i++){
	dataArray[i].render();
	context.font="bold 32px sans-serif";
	context.fillStyle = "#E87E04";
	context.fillText(dataArray[i].letter,(canvas.width*dataArray[i].key)/characters.length+3,(canvas.height-10));
	}
};

function DataPoint(letter,key,count){
	this.letter = letter;
	this.count = -count;
	this.key = key;
}

DataPoint.prototype.render = function(){
	context.fillStyle = "#FFFFFF";
	context.fillRect(((canvas.width*this.key)/characters.length),canvas.height,(canvas.width-100)/characters.length,2*this.count);

};

var dataArray=[];
for(var i=0; i<characters.length;i++){
	dataArray.push(new DataPoint(characters[i],i,charCountArray[i]));
}
