import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
// import { motion } from "framer-motion-3d"

const imageList: string[] = [
  '/asobi/assets/img/top/test1.jpg',
  '/asobi/assets/img/top/test2.jpg',
  '/asobi/assets/img/top/test3.jpg',
  '/asobi/assets/img/top/test4.jpg',
  '/asobi/assets/img/top/test5.jpg',
  '/asobi/assets/img/top/test6.jpg',
];

// interface Position {
//   x: number;
//   y: number;
// }

export default function topImages() {
  // const x = useMotionValue(0);
  const constraintsRef = useRef(null);
  // const background = useTransform(
  //   x,
  //   [-100, 0, 100],
  //   ['#ff008c', '#7700ff', 'rgb(230, 255, 0)']
  // );

  return (
    <div className="top_image">
      <motion.div className="top_image-area" ref={constraintsRef}></motion.div>
      <motion.img
        // whileHover={{ scale: 0.9 }}
        whileTap={{ scale: 0.9 }}
        initial={{ x: 0, y: 0, top: '5%', left: '15%' }}
        animate={{
          top: '5%',
          left: '15%',
        }}
        drag
        dragConstraints={constraintsRef}
        // dragConstraints={{ top: 50, bottom: 50, left: 200, right: 200 }}
        src="/asobi/assets/img/top/test1.jpg"
        alt=""
        width="300"
        // height="300"
      />
      <motion.img
        initial={{ x: 0, y: 0, top: '20%', left: '85%' }}
        animate={{ top: '20%', left: '85%' }}
        drag
        dragConstraints={constraintsRef}
        // dragConstraints={{ top: 80, bottom: 80, left: 900, right: 900 }}
        src="/asobi/assets/img/top/test2.jpg"
        alt=""
        width="300"
        // height="300"
      />
      <motion.img
        initial={{ x: 0, y: 0, top: '80%', left: '5%' }}
        animate={{ top: '80%', left: '5%' }}
        drag
        dragConstraints={constraintsRef}
        // dragConstraints={{ top: 800, bottom: 800, left: 1000, right: 1000 }}
        // x={x}
        src="/asobi/assets/img/top/test3.jpg"
        alt=""
        width="300"
        // height="300"
      />
      <motion.img
        initial={{ x: 0, y: 0, top: '60%', left: '75%' }}
        animate={{ top: '60%', left: '75%' }}
        drag
        dragConstraints={constraintsRef}
        // dragConstraints={{ top: 670, bottom: 670, left: 50, right: 50 }}
        // x={x}
        src="/asobi/assets/img/top/test4.jpg"
        alt=""
        width="300"
        // height="300"
      />
      <motion.img
        initial={{ x: 0, y: 0, top: '60%', left: '40%' }}
        animate={{ top: '60%', left: '40%' }}
        drag
        dragConstraints={constraintsRef}
        // dragConstraints={{ top: 400, bottom: 400, left: 0, right: 0 }}
        // x={x}
        src="/asobi/assets/img/top/test5.jpg"
        alt=""
        width="300"
        // height="300"
      />
      <motion.img
        initial={{ x: 0, y: 0, top: '10%', left: '55%' }}
        animate={{ top: '10%', left: '55%' }}
        drag
        dragConstraints={constraintsRef}
        // dragConstraints={{ top: 300, bottom: 300, left: 600, right: 600 }}
        // x={x}
        src="/asobi/assets/img/top/test6.jpg"
        alt=""
        width="300"
        // height="300"
      />
    </div>
  );
}
