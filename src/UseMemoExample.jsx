import { useEffect, useMemo, useState } from "react";

export default function UseMemoExample() {
    const [number, setNumber] = useState(0);

    /*
     * useMemo is a hook that will only recompute the memoised value when one of the dependencies has changed.
     * Without this, the slowFunction would be called on every render, even if the number hasn't changed.
     * However, we should not just use useMemo everywhere, because it can hurt actually hurt performance if the value we
     * are memoising is not expensive to compute. This is because the useMemo function itself is called on every
     * render, even if the callback itself isn't called because the dependencies haven't changed. Also, every memoised
     * value needs to be stored in memory, so if we memoised everything in the app, we would use a lot of memory.
     */
    // const doubleNumber = slowFunction(number);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);

    const [dark, setDark] = useState(false);

    /*
     * We can also use useMemo to memoise an object or array, even though it is not expensive to compute. This is useful
     * because the useEffect below has a dependency on themeStyles. We might think this should only be called when
     * the value of themeStyles changes. However, because it is an object, JavaScript compares the reference rather
     * than the value and, because the themeStyles object is recreated on every render, the reference changes on every
     * render. This means the useEffect will be called on every render, even though the value of themeStyles hasn't
     * changed. The same is also true for arrays. By wrapping the object in useMemo, we can ensure that the reference
     * only changes when the value of the object changes (in this case when the dark dependency changes).
     */
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        };
    }, [dark]);

    useEffect(() => {
        console.log('Theme changed');
    }, [themeStyles]);

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}

function slowFunction(num) {
    console.log('Calling slow function');
    for (let i = 0; i <= 1000000000; i++) { }
    return num * 2;
}
