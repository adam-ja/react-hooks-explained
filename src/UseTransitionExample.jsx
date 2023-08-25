import { useState, useTransition } from "react";

export default function UseTransitionExample() {
    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const LIST_SIZE = 5000;

    /*
     * By default, React considers all state changes to be equally high priority and will try to complete all state
     * updates before rendering to the screen. In the example below, if we weren't using startTransition, it would set
     * the input (which is quick) but then also set the list (which is slow) before rendering, so the user would have to
     * wait for the list to be updated before seeing what they had typed appear in the input box.
     *
     * By using startTransition, we are telling React that everything inside that callback is lower priority and can be
     * worked on in the background. This means that the input will be rendered with the new value as soon as it is set,
     * and the list will only be rendered once it has been updated.
     *
     * useTransition should only be used sparingly, because each `startTransition` will cause an additional re-render.
     */
    function handleChange(e) {
        setInput(e.target.value);

        startTransition(() => {
            const l = [];

            for (let i = 0; i < LIST_SIZE; i++) {
                l.push(e.target.value);
            }

            setList(l);
        });
    }

    return (
        <>
            <input type="text" value={input} onChange={handleChange} />
            <br />
            {isPending
                ? 'Loading...'
                : list.map((item, index) => {
                    return <div key={index}>{item}</div>;
                })
            }
        </>
    );
}
