import { useState } from "react";
import DeferredValueList from "./DeferredValueList";

export default function UseDeferredValueExample() {
    const [input, setInput] = useState('');

    function handleChange(e) {
        setInput(e.target.value);
    }

    return (
        <>
            <input type="text" value={input} onChange={handleChange} />
            <DeferredValueList input={input} />
        </>
    );
}
