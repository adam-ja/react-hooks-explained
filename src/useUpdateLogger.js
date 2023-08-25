import { useEffect } from "react";

export default function useUpdateLogger(key, value) {
    useEffect(() => {
        console.log(`${key} updated to:`, value);
    })
}
