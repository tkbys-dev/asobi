import type p5Type from 'p5';

let x = 50;
let y = 50;

const canvasX = 1500;
const canvasY = 1000;

let mass: Array<number> = [];
let positionX: Array<number> = [];
let positionY: Array<number> = [];
let velocityX: Array<number> = [];
let velocityY: Array<number> = [];

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight, 'p2d').parent(
    canvasParentRef
  );
  p5.noStroke();
  //水玉の色
  p5.fill(64, 255, 255, 192);
};

export const draw = (p5: p5Type): void => {
  // p5.draw = () => {
  p5.background(32);

  for (let particleA = 0; particleA < mass.length; particleA++) {
    let accelerationX = 0;
    let accelerationY = 0;

    for (let particleB = 0; particleB < mass.length; particleB++) {
      if (particleA != particleB) {
        let distanceX = positionX[particleB] - positionX[particleA];
        let distanceY = positionY[particleB] - positionY[particleA];

        let distance = p5.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 1) {
          distance = 1;
        }

        let force = ((distance - 300) * mass[particleB]) / distance;

        accelerationX += force * distanceX;
        accelerationY += force * distanceY;
      }
    }

    velocityX[particleA] =
      velocityX[particleA] * 0.99 + accelerationX * mass[particleA];
    velocityY[particleA] =
      velocityY[particleA] * 0.99 + accelerationY * mass[particleA];
  }

  for (let particle = 0; particle < mass.length; particle++) {
    positionX[particle] += velocityX[particle];
    positionY[particle] += velocityY[particle];

    //水玉の幅と高さ
    p5.ellipse(
      positionX[particle],
      positionY[particle],
      mass[particle] * 1000,
      mass[particle] * 1000
    );
  }
  // };
};

export const mouseClicked = (p5: p5Type): void => {
  mass.push(p5.random(0.003, 0.03));
  positionX.push(p5.mouseX);
  positionY.push(p5.mouseY);
  velocityX.push(0);
  velocityY.push(0);
};

export const mouseDragged = (p5: p5Type): void => {
  mass.push(p5.random(0.003, 0.03));
  positionX.push(p5.mouseX);
  positionY.push(p5.mouseY);
  velocityX.push(0);
  velocityY.push(0);
};

export const windowResized = (p5: p5Type): void => {
  // コンポーネントのレスポンシブ化
  p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
};
