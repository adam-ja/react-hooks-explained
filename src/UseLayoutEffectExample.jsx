import { useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffectExample() {
    const [show, setShow] = useState(false);
    const popup = useRef();
    const button = useRef();

    /*
     * useLayoutEffect is almost identical to useEffect. The difference is that useEffect runs asynchronously and does
     * not block the DOM, whereas useLayoutEffect runs synchronously after React calculates the new DOM but before it
     * actually paints it to the screen. It should be used when we need to calculate something based on the layout of
     * the DOM, such as measuring elements, or move things around in the DOM that are going to be visible to the user.
     * However, since it is synchronous, it can block the DOM from rendering, so it should only be used if useEffect
     * doesn't work.
     *
     * In this simple example, the user is unlikely to notice the popup moving from immediately below the button to 25px
     * below even if we used useEffect because it's such a simple calculation. However, if we were doing something more
     * complicated (or were worried about users with extremely slow computers), we would want to use useLayoutEffect.
     */
    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) {
            return;
        }

        const { bottom } = button.current.getBoundingClientRect();
        // Push the popup 25px below the bottom of the button
        popup.current.style.top = `${bottom + 25}px`;
    }, [show]);

    return (
        <>
            <button ref={button} onClick={() => setShow(prev => !prev)}>
                Click Here
            </button>
            {show && (
                <div ref={popup} style={{position: "absolute"}}>
                    This is a popup
                </div>
            )}
        </>
    );
}
