import React,{ useRef, useEffect } from 'react';
import useWindowSize from './lib/window';
import App from './App';
import Cursor from './lib/cursor'


interface Specs {
    scrollContainer: number | undefined | null
    size: number| undefined | null
    current: any | undefined | null
    cur: any | undefined | null
    curr: any | undefined | null
    width: any | undefined | null
  } 


function ScrollCont() {
    
    const app = React.useRef(null);
    const scrollContainer = React.useRef(null);
    
    const size = useWindowSize();
  
    React.useEffect(() => {
        const cur = scrollContainer.current;
      document.body.style.height = `${
        cur?.getBoundingClientRect().height
      }px`;
    }, [size.height]);
  
    const skewConfigs = React.useMemo(
      () => ({
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
      }),
      []
    );
  
    const skewScrolling = React.useCallback(() => {
      skewConfigs.current = window.scrollY;
      skewConfigs.previous +=
        (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
      skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;
  
      const diff = skewConfigs.current - skewConfigs.rounded;
      const acceleration = diff / size.width
  
      const velocity = +acceleration;
      const skew = velocity * 98;
      const curr = scrollContainer?.current;
      curr.style.transform = `translate3d(0,-${skewConfigs.rounded}px,0) skewY(${skew}deg)`;
  
      requestAnimationFrame(() => skewScrolling());
    }, [size.width, skewConfigs]);
  
    React.useEffect(() => {
      requestAnimationFrame(() => skewScrolling());
    }, [skewScrolling]);
  
    return(
        <main ref={app} style={{height: '100vh', position: 'fixed', overflow: 'hidden'}}className="Main">
             <Cursor/>
            <div ref={scrollContainer} style={{ pointerEvents: 'fill'}}>
                <App />
            </div>
        </main>
    )


   

  }
  
  export default ScrollCont;
  