let img;

function preload() {
	img = loadImage('boatrace.png');
}


function setup() {
	createCanvas(2400, 2400);
	angleMode(DEGREES);
	background(240);

	let centerX = width / 2;
	let centerY = height / 2;
	let numPetals = 13;
	let numPetals2 = 26;
	let petalLength = 150;
	let petalWidth = 80;

	let ORANGE = "#e88002";
	let LIGHT_ORANGE = "#ff9e64";
	let RED = "#B31B1B";
	let GREEN = "#66B032";
	let YELLOW = "#e5b739";
	let WHITE = "#e0e0e0";
	let BROWN = "#7a3723";

	translate(centerX, centerY);

	noStroke();
	fill("#66303b");
	circle(0, 0, 1200);

	noStroke();
	fill(GREEN);
	for (let i = 0; i < numPetals2; i++) {
		let angle = 360 / numPetals2 * i;
		push();
		rotate(angle);
		drawPetal3(0, 0, 550, 550);
		pop();
	}


	noStroke();
	fill("#8c4351");
	drawSteppedGradientCircle(0, 0, 550, color(RED), color("#0c0c0c"), 11);


	stroke(BROWN);
	fill(ORANGE);
	strokeWeight(2);

	for (let i = 0; i < numPetals; i++) {
		let angle = 360 / numPetals * i;
		push();
		rotate(angle);
		drawPetal(0, 0, 500, 300);
		pop();
	}


	noStroke();
	fill(YELLOW);
	circle(0, 0, 700);

	noStroke();
	fill(BROWN);
	strokeWeight(2);

	for (let i = 0; i < numPetals; i++) {
		let angle = 360 / numPetals * i;
		push();
		rotate(angle);
		drawPetal2(0, 0, 300, 150);
		pop();
	}

	stroke(BROWN);
	fill(ORANGE);
	strokeWeight(2);

	for (let i = 0; i < numPetals; i++) {
		let angle = 360 / numPetals * i;
		push();
		rotate(angle);
		drawPetal2(0, 0, petalLength, petalWidth);
		pop();
	}


	noStroke();
	fill(YELLOW);
	circle(0, 0, 170);

	image(img, -65, -65, 140, 140);

}

function drawPetal(x, y, len, width) {
	beginShape();

	curveVertex(x, y);
	curveVertex(x, y);
	curveVertex(x + len / 2, y - width / 2);
	curveVertex(x + len, y);
	curveVertex(x + len, y);

	curveVertex(x + len / 2, y + width / 2);
	curveVertex(x, y);
	curveVertex(x, y);

	endShape(CLOSE);
}

function drawPetal2(x, y, len, width) {
	beginShape();

	curveVertex(x, y);
	curveVertex(x, y);
	curveVertex(x + len / 2, y - width / 2);
	curveVertex(x + len, y);

	curveVertex(x + len / 2, y + width / 2);
	curveVertex(x, y);
	curveVertex(x, y);

	endShape(CLOSE);
}

function drawPetal3(x, y, len, width) {
	beginShape();

	curveVertex(x, y);
	curveVertex(x, y);
	curveVertex(x + len / 2, y - width / 2);
	curveVertex(x + len, y);
	curveVertex(x + len, y);

	curveVertex(x + len / 2, y + width / 2);
	curveVertex(x, y);
	curveVertex(x, y);

	endShape(CLOSE);
}

function drawSteppedGradientCircle(x, y, radius, colorOuter, colorInner, steps) {
	noStroke();
	for (let i = steps; i > 0; i--) {
		const currentRadius = radius * (i / steps);
		const amount = map(i, steps, 1, 0, 1);
		const currentColor = lerpColor(colorOuter, colorInner, amount);
		fill(currentColor);
		circle(x, y, currentRadius * 2);
	}
}



function draw() {
}
