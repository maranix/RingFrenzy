import { Slot } from "expo-router";
import { ThemeContextProvider } from "../providers/ThemeContext";

const RootLayout = () => {
    return (
        <ThemeContextProvider>
            <Slot />
        </ThemeContextProvider>
    );
};

export default RootLayout;
