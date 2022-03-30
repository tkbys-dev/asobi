import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { draw, setup } from 'p5/basep5';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const processing: NextPage = () => {
  return (
    <>
      <Sketch setup={setup} draw={draw} style={{ flex: 1 }} />
    </>
  );
};

export default processing;
