import React, { useCallback, useState } from 'react';
import List from './List';

export default function UseCallbackExample() {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    /*
     * Wrapping the getItems function in useCallback means that the getItems function is only recreated when its
     * dependencies (in this case number) change. Without it, the function is recreated every time the component
     * renders (for example, when we toggle the theme). This means that the List component would always receive a new
     * version of the getItems function, so its useEffect would be triggered and everything inside it would be triggered
     * on every render.
     * useCallback is similar to useMemo, but instead of returning the result of the function, it returns the function
     * itself. This means we can pass it around as a prop to other components and those components can call the function
     * with their own arguments.
     */
    const getItems = useCallback((incrementor) => {
        const incremented = number + incrementor;
        return [number, incremented, incremented + 1, incremented + 2];
    }, [number]);

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
            </button>
            <List getItems={getItems} />
        </div>
    );
}
