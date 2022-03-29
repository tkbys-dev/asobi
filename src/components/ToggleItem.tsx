import React, { useContext, useState, useEffect } from 'react';
import { StyleContext } from 'libs/context';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Overflow = 'auto' | 'hidden';

const variants = {
  open: { display: 'flex', opacity: 1 },
  closed: { display: 'none', opacity: 0 },
};
const ToggleItem = () => {
  const { state } = useContext(StyleContext);
  const [overflow, setOverflow] = useState<Overflow>('hidden');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setBodyStyle();
  }, [isOpen]);

  const setBodyStyle = () => {
    if (!isOpen) {
      // setOverflow('auto');
      document.body.style.overflow = 'auto';
    } else {
      // setOverflow('hidden');
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <motion.a
        variants={{
          open: {
            transition: {
              // staggeredChildren: 0.5,
            },
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        className="header_btn"
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
          setBodyStyle();
        }}
      >
        <motion.span
          variants={{
            open: {
              top: '50%',
              // bottom: 0,
              // margin: 'auto',
              opacity: 1,
              transform: 'rotate(135deg)',
            },
            closed: { opacity: 1 },
          }}
          // style={{ overflow: overflow }}
        ></motion.span>
        <motion.span
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
        ></motion.span>
        <motion.span
          variants={{
            open: {
              // top: 0,
              bottom: '45%',
              // margin: 'auto',
              opacity: 1,
              transform: 'rotate(-135deg)',
            },
            closed: { opacity: 1 },
          }}
        ></motion.span>
      </motion.a>
      <motion.nav
        animate={isOpen ? 'open' : 'closed'}
        initial={{ opacity: 0 }}
        variants={variants}
        className="header_nav"
      >
        <ul className="header_nav_list">
          <li
            className="header_nav_list_item"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <Link href="/works">
              <a>Works</a>
            </Link>
          </li>
          <li
            className="header_nav_list_item"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li
            className="header_nav_list_item"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <Link href="/members">
              <a>Members</a>
            </Link>
          </li>
          <li
            className="header_nav_list_item"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <Link href="/careers">
              <a>Careers</a>
            </Link>
          </li>
          <li
            className="header_nav_list_item"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </motion.nav>
    </>
  );
};
export default ToggleItem;
