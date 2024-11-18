import { Appearance } from "react-native";
import {
    createThemeFromVariant,
    getThemeVariantFromColorScheme,
    type Theme,
    type ThemeVariant,
} from "../constants/theme";
import { useCallback, useEffect, useState } from "react";

const useTheme = (): Theme => {
    const [themeVariant, setThemeVariant] = useState<ThemeVariant>("light");

    const toggleTheme = useCallback(() => {
        setThemeVariant((prev) => (prev === "light" ? "dark" : "light"));
    }, []);

    const theme = createThemeFromVariant(themeVariant, toggleTheme);

    useEffect(() => {
        const initialColorScheme = Appearance.getColorScheme();
        const initialVariant = getThemeVariantFromColorScheme(initialColorScheme);
        setThemeVariant(initialVariant); // Set the initial theme variant

        const listener = Appearance.addChangeListener(({ colorScheme }) => {
            setThemeVariant(getThemeVariantFromColorScheme(colorScheme)); // Update on color scheme change
        });

        return () => listener.remove();
    }, []);

    return theme;
};

export default useTheme;
