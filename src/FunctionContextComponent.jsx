import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
    /*
     * We can use our custom hooks from ThemeContext to get the current theme value and toggleTheme function.
     */
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();

    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem"
    };

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>Function Theme</div>
        </>
    );
};
