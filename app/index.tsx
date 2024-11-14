import { StyleSheet, Text, View } from "react-native";

const Page = () => {
    return (
        <View style={styles.container}>
            <Text>Index Route</Text>
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

export default Page;
