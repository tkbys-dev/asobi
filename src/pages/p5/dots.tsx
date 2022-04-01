import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { setup, draw, mouseClicked, mouseDragged } from 'p5/p5-dots';
// import { setup, draw, mouseClicked, mouseDragged } from 'p5/p5';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const dots: NextPage = () => {
  return (
    <>
      <Sketch
        setup={setup}
        draw={draw}
        mouseClicked={mouseClicked}
        mouseDragged={mouseDragged}
        style={{
          flex: 1,
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
