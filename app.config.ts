import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
    return {
        ...config,
        name: "RingFrenzy",
        slug: "RingFrenzy",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        scheme: "myapp", // Deep Linking Scheme
        userInterfaceStyle: "automatic",
        newArchEnabled: true,
        splash: {
            image: "./assets/splash-icon.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff",
        },
        ios: {
            supportsTablet: true,
            bundleIdentifier: "in.maranix.RingFrenzy",
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/adaptive-icon.png",
                backgroundColor: "#ffffff",
            },
            package: "in.maranix.RingFrenzy",
        },
        web: {
            favicon: "./assets/favicon.png",
            bundler: "metro",
        },
        plugins: ["expo-router"],
    };
};
