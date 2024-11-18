import type { ColorSchemeName } from "react-native";
import { COLORS } from "./colors";

const themeVariant = ["light", "dark"] as const;
export type ThemeVariant = (typeof themeVariant)[number];

type ColorScheme = {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
};

// TODO: Add other commonly applicable properties for UI components such as
//
// 1 - typography
// 2 - spacing
// 3 - etc
interface ThemeBase {
    variant: ThemeVariant;
    colors: ColorScheme;
}

interface ThemeUtils {
    toggle: () => void;
}

export interface Theme extends ThemeBase, ThemeUtils { }

const COMMON_COLORS = {
    card: COLORS.Nebula,
    border: COLORS.saffronMango,
};

const LIGHT_THEME: ThemeBase = {
    variant: "light",
    colors: {
        primary: COLORS.greenWhite,
        background: COLORS.greenWhite,
        text: COLORS.darkJungleGreen,
        notification: COLORS.greenWhite,
        ...COMMON_COLORS,
    },
};

const DARK_THEME: ThemeBase = {
    variant: "dark",
    colors: {
        primary: COLORS.darkJungleGreen,
        background: COLORS.darkJungleGreen,
        text: COLORS.greenWhite,
        notification: COLORS.darkJungleGreen,
        ...COMMON_COLORS,
    },
};

export const getThemeVariantFromColorScheme = (
    colorScheme: ColorSchemeName,
): ThemeVariant => {
    if (colorScheme === "dark") {
        return "dark";
    }

    return "light";
};

export const createThemeFromVariant = (
    variant: ThemeVariant,
    toggleTheme: () => void,
): Theme => {
    if (variant === "light") {
        return {
            ...LIGHT_THEME,
            toggle: toggleTheme,
        };
    }

    return {
        ...DARK_THEME,
        toggle: toggleTheme,
    };
};
