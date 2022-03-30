import type p5Type from 'p5';

let x = 50;
let y = 50;

const canvasX = 1500;
const canvasY = 1000;

let mass: number[] = [];
let positionX: number[] = [];
let positionY: number[] = [];
let velocityX: number[] = [];
let velocityY: number[] = [];

function addNewParticle(p5: p5Type): void {
  mass.push(p5.random(0.003, 0.03));
  positionX.push(p5.mouseX);
  positionY.push(p5.mouseY);
  velocityX.push(0);
  velocityY.push(0);
}

function mouseClicked() {
  addNewParticle(p5);
}

function mouseDragged() {
  addNewParticle(p5);
}

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight, 'webgl').parent(
    canvasParentRef
  );
  p5.noStroke();
  p5.fill(64, 255, 255, 192);
};

export const draw = (p5: p5Type): void => {
  p5.draw = () => {
    addNewParticle(p5);

    p5.background(32);

    for (var particleA = 0; particleA < mass.length; particleA++) {
      var accelerationX = 0,
        accelerationY = 0;

      for (var particleB = 0; particleB < mass.length; particleB++) {
        if (particleA != particleB) {
          var distanceX = positionX[particleB] - positionX[particleA];
          var distanceY = positionY[particleB] - positionY[particleA];

          var distance = p5.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (distance < 1) distance = 1;

          var force = ((distance - 320) * mass[particleB]) / distance;
          accelerationX += force * distanceX;
          accelerationY += force * distanceY;
        }
      }

      velocityX[particleA] =
        velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
      velocityY[particleA] =
        velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
    }

    for (var particle = 0; particle < mass.length; particle++) {
      positionX[particle] += velocityX[particle];
      positionY[particle] += velocityY[particle];

      p5.ellipse(
        positionX[particle],
        positionY[particle],
        mass[particle] * 1000,
        mass[particle] * 1000
      );
    }
  };
};
