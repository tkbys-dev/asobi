import p5 from 'p5';
// import 'p5/lib/addons/p5.sound';
// require('p5/lib/addons/p5.sound');

let sound: string;

export const preload = (p5) => {
  // if (typeof window !== 'undefined') {
  //   sound = p5.Oscillator();
  // }
};

export const setup = (p: p5, canvasParentRef: Element): void => {
  p.createCanvas(p.windowWidth, p.windowHeight, 'p2d').parent(canvasParentRef);
  p.noFill();
  p.stroke('#fff');
  // sound.play();
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
