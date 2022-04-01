import p5Type from 'p5';

let locationX: number;
let locationY: number;
let velocityX: number;
let velocityY: number;

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight, 'p2d').parent(
    canvasParentRef
  );
  p5.frameRate(60);
  p5.background(0);
  locationX = 0;
  locationY = 0;
  velocityX = 20;
  velocityY = 20;
};

export const draw = (p5: p5Type): void => {
  let diameter = p5.random(100);
  locationX = locationX + velocityX;
  locationY = locationY + velocityY;
  p5.stroke('#fff');
  // p5.fill(p5.random(255), p5.random(255), p5.random(255));
  // p5.ellipse(p5.random(p5.width), p5.random(p5.height), diameter, diameter);
  // console.log(locationX);
  p5.line(p5.random(locationX), p5.random(locationY), locationX, locationY);
  if (locationX < 0 || locationX > p5.width) {
    velocityX = velocityX * -1;
  }
  if (locationY < 0 || locationY > p5.height) {
    velocityY = velocityY * -1;
  }
};

export const windowResized = (p5: p5Type): void => {
  // コンポーネントのレスポンシブ化
  p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
};
