import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
export default function User() {
    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Image
                    source={{ uri: "https://via.placeholder.com/150" }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Good Morning</Text>
                    <Text style={styles.text}>Username</Text>
                </View>
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 60,
        borderRadius: 10,
        width: "92%",
        backgroundColor: "lightgrey", // Added background color for container
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 75,
        backgroundColor: "blue", // Added background color for image
    },
    textContainer: {
        alignItems: "center",
        marginVertical: 10,
        backgroundColor: "lightyellow", // Added background color for text container
    },
    menuContainer: {
        flexDirection: "row",
        justifyContent: "space-around", // Changed to space-around
        alignItems: "center",
        width: "40%",
        height: '100%',
        backgroundColor: "lightcoral", // Added background color for menu container
    },
    userContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 'auto',
        width: "40%",
        backgroundColor: "lightblue", // Added background color for user container
    },
    buttonImage: {
        width: 30,
        height: 30,
        backgroundColor: "lightgreen", // Added background color for button image
    },
    text: {
        fontSize: 14,
        color: "black",
    },
});
