import { View, StyleSheet, Text } from "react-native";

const Index = () => {
    return (
        <View style={styles.container}>
            <Text>Root Layout</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Index;
