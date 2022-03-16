import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

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
        initial={{ x: 200, y: 50 }}
        animate={{ x: 200, y: 50 }}
        // exit={{ x: 0, y: 0 }}
        drag
        // dragConstraints={{ top: 50, bottom: 50, left: 200, right: 200 }}
        dragConstraints={constraintsRef}
        // x={x}
        src="/asobi/assets/img/top/test1.jpg"
        alt=""
        width="300"
        // height="300"
      />
      <motion.img
        initial={{ x: 900, y: 80 }}
        animate={{ x: 900, y: 80 }}
        drag
        dragConstraints={{ top: 80, bottom: 80, left: 900, right: 900 }}
        // x={x}
        src="/asobi/assets/img/top/test2.jpg"
        alt=""
        width="300"
        // height="300"
      />
      <motion.img
        initial={{ x: 1000, y: 800 }}
        animate={{ x: 1000, y: 800 }}
        drag
        dragConstraints={{ top: 800, bottom: 800, left: 1000, right: 1000 }}
        // x={x}
        src="/asobi/assets/img/top/test3.jpg"
        alt=""
        width="300"
        // height="300"
      />
      <motion.img
        initial={{ x: 50, y: 670 }}
        animate={{ x: 50, y: 670 }}
        drag
        dragConstraints={{ top: 670, bottom: 670, left: 50, right: 50 }}
        // x={x}
        src="/asobi/assets/img/top/test4.jpg"
        alt=""
        width="300"
        // height="300"
      />
      <motion.img
        initial={{ x: 0, y: 400 }}
        animate={{ x: 0, y: 400 }}
        drag
        dragConstraints={{ top: 400, bottom: 400, left: 0, right: 0 }}
        // x={x}
        src="/asobi/assets/img/top/test5.jpg"
        alt=""
        width="300"
        // height="300"
      />
      <motion.img
        initial={{ x: 600, y: 300 }}
        animate={{ x: 600, y: 300 }}
        drag
        dragConstraints={{ top: 300, bottom: 300, left: 600, right: 600 }}
        // x={x}
        src="/asobi/assets/img/top/test6.jpg"
        alt=""
        width="300"
        // height="300"
      />
    </div>
  );
}
