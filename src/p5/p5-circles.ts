import p5 from 'p5';

export const preload = (p: p5, canvasParentRef: Element): void => {};

export const setup = (p: p5, canvasParentRef: Element): void => {
  p.createCanvas(p.windowWidth, p.windowHeight, 'p2d').parent(canvasParentRef);
  p.noFill();
  p.stroke('#fff');
};

export const draw = (p: p5): void => {};

export const mouseDragged = (p: p5): void => {
  p.circle(p.mouseX, p.mouseY, 100);
};

export const mouseMoved = (p: p5): void => {
  p.circle(p.mouseX, p.mouseY, 100);
};

export const windowResized = (p: p5): void => {
  // コンポーネントのレスポンシブ化
  p.resizeCanvas(p.windowWidth, p.windowHeight);
};
