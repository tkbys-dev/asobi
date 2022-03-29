import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = {
  open: { display: 'flex', opacity: 1 },
  closed: { display: 'none', opacity: 0 },
};

export default function ToggleItem() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => {
      // document.body.style.overflow = 'hidden';
    };
  }, [isOpen]);

  return (
    <>
      <motion.a
        variants={{
          open: {
            transition: {
              staggeredChildren: 0.5,
            },
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        className="header_btn"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <motion.span
          variants={{
            open: {
              top: 0,
              bottom: 0,
              margin: 'auto',
              opacity: 1,
              transform: 'rotate(135deg)',
            },
            closed: { opacity: 1 },
          }}
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
              top: 0,
              bottom: 0,
              margin: 'auto',
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
}
