// JavaScript Document
var main = function(){
	'use strict';
	console.log("<<<JAVASCRIPT RUNNING: SUCCESS>>>");
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	
	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	var XcircleCoor = [];
	var YcircleCoor = [];
	var circleRadius = 50;
	var circleNum = 5;
	
	for (var i = 0; i<circleNum; i++){
		var valid = 0;
		XcircleCoor.push(getRandomInt(circleRadius, 700-circleRadius));
		YcircleCoor.push(getRandomInt(circleRadius, 500-circleRadius));
		console.log("Coordinates: ", XcircleCoor[i], YcircleCoor[i]);
	}
	
	var mainCircle = { x: XcircleCoor, y: YcircleCoor, r: circleRadius };
	
	function drawCircle(data) {
		ctx.beginPath();
		ctx.arc(data.x, data.y, data.r, 0, Math.PI * 2); // 0 - 2pi is a full circle
		//ctx.fill();
		ctx.fillStyle="white";
	}
	
	for ( i = 0; i < XcircleCoor.length; i++){
		mainCircle = { x: XcircleCoor[i], y: YcircleCoor[i], r: circleRadius };
		drawCircle(mainCircle);
	}
	
};
$(document).ready(main);