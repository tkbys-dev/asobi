import React, { useContext, useState, useEffect } from 'react';
import { StyleContext } from 'libs/context';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useGlobalStore, usePersistStore } from 'store/global';
import { useRouter } from 'next/router';

type Overflow = 'auto' | 'hidden';

const variants = {
  open: { display: 'flex', opacity: 1 },
  closed: { display: 'none', opacity: 0 },
};
const ToggleItem = () => {
  const { state } = useContext(StyleContext);
  const [overflow, setOverflow] = useState<Overflow>('hidden');

  const [isOpen, setIsOpen] = useState(false);
  const { isMenuOpen, setMenu } = useGlobalStore();
  const router = useRouter();

  useEffect(() => {
    setMenu(isOpen);
  }, [isOpen, setMenu]);

  useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen, setIsOpen]);

  useEffect(() => {
    // setBodyStyle();
    // const setBodyStyle = () => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // };
  }, [isMenuOpen]);

  useEffect(() => {
    const routeChange = () => {
      console.log('route change start');
      setMenu(false);
    };
    router.events.on('routeChangeComplete', routeChange);
    router.events.on('hashChangeComplete', routeChange);

    return () => {
      router.events.off('routeChangeComplete', routeChange);
      router.events.off('hashChangeComplete', routeChange);
    };
  }, [router, setMenu]);

  return (
    <>
      <motion.a
        variants={{
          open: {
            transition: {
              // staggeredChildren: 0.5,
            },
          },
          closed: {},
        }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="header_btn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <motion.span
          variants={{
            open: {
              top: '50%',
              opacity: 1,
              rotate: 135,
            },
            closed: {},
          }}
        ></motion.span>
        <motion.span
          variants={{
            open: { opacity: 0 },
            closed: {},
          }}
        ></motion.span>
        <motion.span
          variants={{
            open: {
              bottom: '45%',
              opacity: 1,
              rotate: -135,
            },
            closed: {},
          }}
        ></motion.span>
      </motion.a>
      <AnimatePresence exitBeforeEnter>
        {isMenuOpen && (
          <motion.nav className="header_nav">
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
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};
export default ToggleItem;
