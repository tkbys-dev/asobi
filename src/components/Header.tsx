import React, { useState } from 'react';
import Link from 'next/link';
import { getWindowSize } from '../hooks/GetWindowSize';
import { AnimatePresence, motion } from 'framer-motion';
import ToggleItem from '@/components/ToggleItem';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0 },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { width, height } = getWindowSize();

  return (
    <>
      <header className="header">
        <Link href="/">
          <a>
            <img
              src="/assets/img/common/header-logo.svg"
              className="header_logo"
              width="132"
              height="49"
              alt="test. inc"
            />
          </a>
        </Link>
        {(() => {
          if (width <= 834) {
            return (
              <>
                <AnimatePresence>
                  <ToggleItem />
                </AnimatePresence>
              </>
            );
          } else {
            return (
              <>
                {/* <nav className="header_nav">
                  <ul className="header_nav_list">
                    <li className="header_nav_list_item">
                      <Link href="/works">
                        <a>Works</a>
                      </Link>
                    </li>
                    <li className="header_nav_list_item">
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li className="header_nav_list_item">
                      <Link href="/members">
                        <a>Members</a>
                      </Link>
                    </li>
                    <li className="header_nav_list_item">
                      <Link href="/careers">
                        <a>Careers</a>
                      </Link>
                    </li>
                    <li className="header_nav_list_item">
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav> */}
              </>
            );
          }
        })()}
      </header>
    </>
  );
}
