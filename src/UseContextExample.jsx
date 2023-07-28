import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";

export default function UseContextExample() {
    return (
        <>
            <ThemeProvider>
                <FunctionContextComponent />
            </ThemeProvider>
        </>
    );
};
