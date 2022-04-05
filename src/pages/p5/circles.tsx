import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import {
  setup,
  draw,
  // mouseClicked,
  // mouseDragged,
  mouseMoved,
  windowResized,
} from 'p5/p5-circles';
// import { setup, draw, mouseClicked, mouseDragged } from 'p5/p5';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const circles: NextPage = () => {
  return (
    <>
      <Sketch
        setup={setup}
        draw={draw}
        // mouseClicked={mouseClicked}
        // mouseDragged={mouseDragged}
        mouseMoved={mouseMoved}
        windowResized={windowResized}
        style={{
          flex: 1,
          height: '100vh',
          // textAlign: 'center'
        }}
      />
      {/* <iframe
        src="https://openprocessing.org/sketch/492096/embed/"
        width="400"
        height="400"
      ></iframe> */}
    </>
  );
};

export default circles;
