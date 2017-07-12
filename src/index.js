// import _ from 'lodash';
// import printMe from './print.js';

// function component() {
//     var element = document.createElement('div');
// 	var btn = document.createElement('button');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

// 	btn.innerHTML = 'Click me and check the console!';
// 	btn.onclick = printMe;
	
// 	element.appendChild(btn);

//     return element;
// }

// document.body.appendChild(component());



// function getComponent() {
// 	return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
// 			var element = document.createElement('div');

// 			element.innerHTML = _.join(['Hello', 'webpack'], ' ');

// 			return element;

// 	}).catch(error => 'An error occurred while loading the component');
// }


import p5 from 'p5';
import ParticleSystem from './particle_system.js';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
var modules = requireAll(require.context("./members", true, /^\.\/.*\.js$/));

async function getComponent() {
	var element = document.createElement('div');
	const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

getComponent().then(component => {
	document.body.appendChild(component);

	console.log('start');
	// function p5tw(name){  
	// 	this.modules = modules;
	// }
	// p5tw.prototype = p5.prototype;
	// window.p5tw = new p5tw();

	var ps;
	var sketch = function( p ) {

		var x = 100; 
		var y = 100;
		var allParticles = [];
		p.setup = function() {
			console.log('setup');
			p.createCanvas(700, 410);
			p.setFrameRate(60);
			// p.modules = modules;
			p.allParticles = allParticles;
			ps = new ParticleSystem(p.createVector(p.width/2, 50), p);
		};

		p.draw = function() {
			// p.background(0);
			// p.fill(255);
			// p.rect(x,y,50,50);

			// console.log('draw');
			// p.background(51);
			 
			
			// p.modules.forEach(function(m, i){
			// 	// console.log('p : ' + p);
			// 	// console.log('ps : ' + ps);
		 //      // var minX = p.width/p.modules.length * (i);
		 //      // var maxX = p.width/p.modules.length * (i+1);
		 //      // if(minX < that.position.x  && maxX > that.position.x){
		 //      //     that.ownerId = i;
		 //      // }
		 //      try{
			//       m.draw(p, ps);
		 //      }catch(e){
		 //      	console.log('e : ' + e);
		 //      }
		 //    });


			// p.background(51);
			// // Apply gravity force to all Particles
			// var gravity = p.createVector(0, 0.1);
			// var wind = p.createVector(p.random(-1, 1), 0);
			// // ps.applyForce(wind);

			p.background(51);
			ps.addParticle();
			ps.run();

			// console.log('ps  : ' + ps);

		}
		// p.background = function(){
		// 	// return;
		// }
		p.mousePressed = function() {
			console.log('aaaa');
			// p.background(0);
			// p.fill(255);
			// p.rect(x,y,50,50);
		};
		p.abced = function(){

		}
	};

	var myp5 = new p5(sketch);
	
	// console.log(myp5);

	// class mymyp5 extends p5 {
	// 	constructor(sketch) {
	// 		super(sketch);
	// 	}
	// 	// set width(w){
	// 	// 	console.log('super : ' + super);
	// 	// 	super.width = w;
	// 	// 	super.height = w;
	// 	// }

	// 	// set height(h){
	// 	// 	super.height = h;
	// 	// 	super.width = h;
	// 	// }
	// }
	// var myp5Extends = new mymyp5(sketch);
	// var p6 = p5;
	// var p7 = new p5();
	// var p8 = new mymyp5();
	// console.log('p5 : ' + p5);
	// console.log('myp5 : ' + myp5);
})


