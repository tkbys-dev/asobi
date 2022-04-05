import p5Type from 'p5';

let locationX: number;
let locationY: number;
let velocityX: number;
let velocityY: number;

//10秒間 (1秒=1000)
const setTime = 10000;

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
  const currentTime = p5.millis();
  console.log(currentTime);

  locationX = locationX + velocityX;
  locationY = locationY + velocityY;
  p5.stroke('#fff');

  if (currentTime < setTime) {
    p5.line(p5.random(locationX), p5.random(locationY), locationX, locationY);
    if (locationX < 0 || locationX > p5.width) {
      velocityX = velocityX * -1;
    }
    if (locationY < 0 || locationY > p5.height) {
      velocityY = velocityY * -1;
    }
  }
};

export const windowResized = (p5: p5Type): void => {
  // コンポーネントのレスポンシブ化
  p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
};
