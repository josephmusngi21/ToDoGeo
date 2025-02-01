import { Text, View, StyleSheet } from "react-native";
import User from "../components/User/User";
import ToDo from "../components/ToDo/ToDo";

export default function Index() {
    return (
        <View style={styles.container}>
            <User />
            <ToDo />
            <View style={styles.user}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 0,
    },
    user: {
        width: "100%",
        alignItems: "center",
    },
});
