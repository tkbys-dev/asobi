import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { setup, draw, windowResized } from 'p5/p5-lines';
import { useEffect } from 'react';
// import { setup, draw, mouseClicked, mouseDragged } from 'p5/p5';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const lines: NextPage = () => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
  }, []);

  return (
    <>
      <Sketch
        setup={setup}
        draw={draw}
        windowResized={windowResized}
        style={
          {
            // flex: 1,
            // height: '100%',
          }
        }
      />
    </>
  );
};

export default lines;
