import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import {
  setup,
  draw,
  mouseClicked,
  mouseDragged,
  windowResized,
} from 'p5/p5-lines';
// import { setup, draw, mouseClicked, mouseDragged } from 'p5/p5';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const lines: NextPage = () => {
  return (
    <>
      <Sketch
        setup={setup}
        draw={draw}
        mouseClicked={mouseClicked}
        mouseDragged={mouseDragged}
        windowResized={windowResized}
        style={{
          flex: 1,
          // textAlign: 'center'
        }}
      />
    </>
  );
};

export default lines;
