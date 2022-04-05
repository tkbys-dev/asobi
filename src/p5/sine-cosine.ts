import type p5 from 'p5';

export const sineCosine = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, 'p2d');
    p.noFill();
    p.stroke('#fff');
  };

  p.draw = () => {};

  p.mouseDragged = () => {
    p.circle(p.mouseX, p.mouseY, 100);
  };

  p.mouseMoved = () => {
    p.circle(p.mouseX, p.mouseY, 100);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};
