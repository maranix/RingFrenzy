import { createContext, useContext, type ReactNode } from "react";
import type { Theme } from "../constants/theme";
import useTheme from "../hooks/useTheme";

interface Props {
    children: ReactNode | undefined;
}

const ThemeContext = createContext<Theme | undefined>(undefined);

export const ThemeContextProvider = ({ children }: Props) => {
    const theme = useTheme();

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};

export const useThemeContext = (): Theme => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "Could not find ThemeContextProvider parent. useThemeContext must be used within a ThemeContextProvider.",
        );
    }

    return context;
};
