import p5Type from 'p5';

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight, 'p2d').parent(
    canvasParentRef
  );
  p5.noFill();
  p5.stroke('#fff');
};

export const draw = (p5: p5Type): void => {};

export const mouseDragged = (p5: p5Type): void => {
  p5.circle(p5.mouseX, p5.mouseY, 100);
};

export const mouseMoved = (p5: p5Type): void => {
  p5.circle(p5.mouseX, p5.mouseY, 100);
};

export const windowResized = (p5: p5Type): void => {
  // コンポーネントのレスポンシブ化
  p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
};
