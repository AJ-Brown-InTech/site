import { useRef } from "react"
import '../styles/cursor.scss'
const Cursor = ()=> {
    const dot = useRef(null)
    const dotoutline = useRef(null)
    console.log(dotoutline)
    const delay = 18;
    const cursVisable = useRef(true);
    const cursEnlarged = useRef(false);

    const endX = useRef(window.innerWidth/ 2);
    const endY = useRef(window.innerHeight / 2);

    const _x = useRef(0)
    const _y = useRef(0)
    const requestRef = useRef(null)
    return(
        <span>

        <div ref={dotoutline} className="cursor-dot-outline"></div>
        <div ref={dot} className="cursor-dot"></div>
        </span>
    )
}

export default Cursor