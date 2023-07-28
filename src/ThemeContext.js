/*
 * It is good practice to define everything related to a context in a single file. That way it is reusable and we don't
 * have to pollute other components with a bunch of code related to setting up the context.
 */
import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

/*
 * The useContext hook provides access to the value of the given context. Because we want to contain everything about
 * the theme context in this file, we define and export our own custom hook to allow other components to access the
 * context, rather than exporting the ThemeContext object itself.
 */
export function useTheme() {
    return useContext(ThemeContext);
};

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
};

export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    /*
     * The context provider wraps the components that need access to the context. It has a single prop called value,
     * which is the value of the context. This is available to all components that are children/descendants of the
     * provider. As such, we can use it to pass values deep into the component tree without having to pass props down
     * manually at every level.
     *
     * Whenever the value of the context changes, all children consuming the context will re-render using the new value.
     *
     * In this example, we want children to be able to both read and update the theme value, so we have a provider for
     * each of these actions, one inside the other.
     */
    return (
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    );
};
