import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import {
  preload,
  setup,
  draw,
  // mouseClicked,
  mouseDragged,
  mouseMoved,
  windowResized,
} from 'p5/p5-circles';
import { useEffect } from 'react';
import { Circles } from '@/components/p5/Circles';
// import { P5Wrapper } from '@/components/P5Wrapper';
const P5Wrapper = dynamic(() => import('@/components/P5Wrapper'), {
  ssr: false,
});
import { sineCosine } from 'p5/sine-cosine';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const circles: NextPage = () => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
  }, []);

  return (
    <>
      {/* <Sketch
        preload={preload}
        setup={setup}
        draw={draw}
        mouseDragged={mouseDragged}
        mouseMoved={mouseMoved}
        windowResized={windowResized}
        style={{
          flex: 1,
          height: '100vh',
          // textAlign: 'center'
        }}
      /> */}
      {/* <Circles /> */}
      <P5Wrapper sketch={sineCosine} />
    </>
  );
};

export default circles;
