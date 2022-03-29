import '@/styles/reset.css';
import '@/styles/style.scss';
// import 'tailwindcss/tailwind.css';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import { StyleContext, reducer } from 'libs/context';
import { useEffect, useReducer } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, {
    bodyStyle: '',
  });

  // const body = <HTMLElement>document.getElementById('body');
  // const style = window.getComputedStyle(body);

  useEffect(() => {
    function onResize() {
      if (dispatch != null) {
        dispatch({
          type: 'updateBodyStyle',
          payload: {
            bodyStyle: '',
          },
        });
      }
    }
    dispatch({
      type: 'updateBodyStyle',
      payload: {
        bodyStyle: '',
      },
    });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <StyleContext.Provider value={{ state, dispatch }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyleContext.Provider>
    </>
  );
}

export default MyApp;
