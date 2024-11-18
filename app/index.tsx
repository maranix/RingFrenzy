import { View, StyleSheet, Text, Button } from "react-native";
import { useThemeContext } from "../providers/ThemeContext";

const Index = () => {
    const theme = useThemeContext();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.colors.background,
        },
        text: {
            color: theme.colors.text,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Root Layout : {theme.variant}</Text>
            <Button title="Toggle Theme" onPress={theme.toggle} />
        </View>
    );
};

export default Index;
