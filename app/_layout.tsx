import { Slot } from "expo-router";
import { ThemeContextProvider } from "../providers/ThemeContext";

const RootLayout: React.FC = () => {
    return (
        <ThemeContextProvider>
            <Slot />
        </ThemeContextProvider>
    );
};

export default RootLayout;
