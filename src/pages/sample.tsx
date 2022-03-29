import Link from 'next/link';
import DrawCanvas from '@/components/Canvas';
import type { NextPage } from 'next';
import { AnimatePresence } from 'framer-motion';

const Sample: NextPage = () => {
  return (
    <>
      <AnimatePresence>
        <DrawCanvas />
      </AnimatePresence>
    </>
  );
};

export default Sample;
