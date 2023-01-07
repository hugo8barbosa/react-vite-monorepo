import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View, Image } from "react-native";

interface CardProps {
    text: string;
}

export const Card = ({ text }: CardProps) => {
    const [status, setStatus] = useState(false);
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: "https://loremflickr.com/640/480/city" }} />
            <TouchableWithoutFeedback onPress={() => setStatus(!status)}>
                <Text style={{ ...styles.text, textDecorationLine: status ? "line-through" : "none" }}>{text}</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
    },
    image: {
        height: 200,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    text: {
        cursor: "pointer",
        color: "#3f51b5",
        textAlign: "center",
        fontSize: 24,
        lineHeight: 60,
        height: 60,
        textTransform: "uppercase",
        fontWeight: "500",
        userSelect: "none",
    },
});
