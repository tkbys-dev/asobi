import dynamic from 'next/dynamic';
import p5Types from 'p5';

const Sketch = dynamic(import('react-p5'), {
  // loading: () => <></>,
  ssr: false,
});

export const Circles = () => {
  const preload = (p5: p5Types) => {
    // 画像などのロードを行う
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, 'p2d').parent(
      canvasParentRef
    );
    p5.noFill();
    p5.stroke('#fff');
  };

  const draw = (p5: p5Types) => {
    // p5でいうdrawの処理を書く
  };

  const mouseDragged = (p5: p5Types): void => {
    p5.circle(p5.mouseX, p5.mouseY, 100);
  };

  const mouseMoved = (p5: p5Types): void => {
    p5.circle(p5.mouseX, p5.mouseY, 100);
  };

  const windowResized = (p5: p5Types) => {
    // コンポーネントのレスポンシブ化
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <Sketch
      preload={preload}
      setup={setup}
      draw={draw}
      mouseDragged={mouseDragged}
      mouseMoved={mouseMoved}
      windowResized={windowResized}
    />
  );
};
