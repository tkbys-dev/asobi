import p5Type from 'p5';

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(p5.windowWidth, p5.windowHeight, 'p2d').parent(
    canvasParentRef
  );
};

export const draw = (p5: p5Type): void => {};

export const mouseClicked = (p5: p5Type): void => {};

export const mouseDragged = (p5: p5Type): void => {};

export const windowResized = (p5: p5Type): void => {
  // コンポーネントのレスポンシブ化
  p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
};
