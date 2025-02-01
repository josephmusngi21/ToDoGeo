import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
export default function User() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://via.placeholder.com/150" }}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Good Morning</Text>
                <Text style={styles.text}>Username</Text>
            </View>
            <View style={styles.menuContainer}>
                <Image
                    source={{ uri: "https://via.placeholder.com/50" }}
                    style={styles.buttonImage}
                    onTouchEnd={() => {
                        console.log("Menu 1 clicked");
                    }}
                />
                <Image
                    source={{ uri: "https://via.placeholder.com/50" }}
                    style={styles.buttonImage}
                    onTouchEnd={() => {
                        console.log("Menu 2 clicked");
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightgrey", // Added background color for container
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    textContainer: {
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: "lightyellow", // Added background color for text container
    },
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 20,
        backgroundColor: "lightcoral", // Added background color for menu container
    },
    buttonImage: {
        width: 50,
        height: 50,
    },
    text: {
        fontSize: 20,
        color: "black",
    },
    menuButton1: {
        backgroundColor: "lightblue",
    },
    menuButton2: {
        backgroundColor: "lightgreen",
    },
});
