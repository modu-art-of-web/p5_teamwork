import p5 from 'p5';
import * as d3 from 'd3';
import ParticleSystem from './particle_system.js';
import * as fisheye from './fisheye.js';

async function getComponent() {
	var element = document.createElement('div');
	const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

getComponent().then(component => {
	console.log('start');
	document.body.appendChild(component);
	var ps;
	var p5canvas;
	var myfisheye = fisheye;
	var sketch = function(p) {

		var x = 100; 
		var y = 100;
		var allParticles = [];
		p.setup = function() {
			console.log('setup');
			p5canvas = p.createCanvas(p.windowWidth, p.windowHeight);
			// p.setFrameRate(60);
			// 
			p.allParticles = allParticles;
			ps = new ParticleSystem(p);
			var data = {
				context : p5canvas.drawingContext,
				enable : false,
				size : ps.getMemberCount(),
				slug : 'p5_test'
			};
			p5canvas.canvas.enableFisheye = fisheye.enableFisheye;
			p5canvas.canvas.enableFisheye(p, data, ps);
			

		};

		p.draw = function() {
			// p.background(51);
			ps.addParticle();
			ps.run();
		}
		// p.mousePressed = function() {
		// 	console.log('aaaa');
		// 	// p.background(0);
		// 	// p.fill(255);
		// 	// p.rect(x,y,50,50);
		// };
	};

	var myp5 = new p5(sketch);
})


