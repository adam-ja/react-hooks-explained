import { useDeferredValue, useEffect, useMemo } from "react";

export default function DeferredValueList({ input }) {
    const LIST_SIZE = 20000;

    /*
     * useDeferredValue tells React that deferredInput is lower priority and can take longer to update. This means React
     * can delay re-rendering anything that uses the deferred value until any higher priority events are finished. For
     * example, when a user is typing into an input field, React will intelligently wait until the user has stopped
     * typing before rendering the deferred value. These background renders can also be interrupted so if, for example,
     * the user starts typing again, React will cancel the deferred render and start a new one.
     *
     * Because this is baked into React, it is more flexible than debouncing or throttling where we have to specify a
     * fixed delay, as React can figure out how long it should wait based on the user's device and other things going on
     * in the app at the time.
     */
    const deferredInput = useDeferredValue(input);

    const list = useMemo(() => {
        const l = [];

        for (let i = 0; i < LIST_SIZE; i++) {
            l.push(<div key={i}>{deferredInput}</div>);
        }

        return l;
    }, [deferredInput]);

    useEffect(() => {
        console.log(`Input: ${input}\nDeferred Input: ${deferredInput}`);
    }, [input, deferredInput]);

    return list;
}
