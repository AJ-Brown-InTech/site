import { useEffect, useState } from "react";
import "../styles/cursor.scss";

interface Props{
    events: number;
}
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event: { clientX: any; clientY: any; } ) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}

const DotRing = () => {
    // 1.
  const { x, y } = useMousePosition();
  return (
    <>
            {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
      ></div>
            {/* 3. */}
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </>
  );
};

export default DotRing;