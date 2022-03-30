import type p5Type from 'p5';

let x = 50;
let y = 50;

const canvasX = 1000;
const canvasY = 500;

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(canvasX, canvasY, 'webgl').parent(canvasParentRef);
};

export const draw = (p5: p5Type): void => {
  // p5.setup = () => {
  //   p5.createCanvas(720, 400, "webgl");
  // };

  p5.draw = () => {
    p5.background(0);
    p5.rotateY(p5.frameCount * 0.01);

    for (let j = 0; j < 5; j++) {
      p5.push();
      for (let i = 0; i < 80; i++) {
        p5.translate(
          p5.sin(p5.frameCount * 0.001 + j) * 100,
          p5.sin(p5.frameCount * 0.001 + j) * 100,
          i * 0.1
        );
        p5.rotateZ(p5.frameCount * 0.002);
        p5.push();
        p5.sphere(8, 6, 4);
        p5.pop();
      }
      p5.pop();
    }
  };
};
