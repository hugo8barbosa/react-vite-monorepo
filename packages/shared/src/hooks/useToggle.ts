import { useCallback, useState } from "react";

export function useToggle(initialState = false) {
    const [state, setState] = useState(initialState);

    const toggle: () => void = useCallback(() => setState((state) => !state), []);

    return [state, toggle];
}
