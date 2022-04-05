import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import {
  setup,
  draw,
  mouseClicked,
  mouseDragged,
  windowResized,
} from 'p5/p5-dots';
import { useEffect } from 'react';
// import { setup, draw, mouseClicked, mouseDragged } from 'p5/p5';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const dots: NextPage = () => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
  }, []);

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

export default dots;
