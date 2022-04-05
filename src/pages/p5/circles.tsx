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
      <Circles />
    </>
  );
};

export default circles;
