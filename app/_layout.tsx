import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen name="index" />
            </Stack>
            <StatusBar animated />
        </>
    );
};

export default RootLayout;
