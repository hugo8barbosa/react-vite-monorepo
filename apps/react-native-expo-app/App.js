import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Card, getRandomCity } from "react-vite-monorepo-shared";
import React from "react";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>React Native | Expo</Text>
            <Card text={getRandomCity()} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: "20%",
        backgroundColor: "#242424",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        color: "#fff",
        marginBottom: 24,
    },
});
