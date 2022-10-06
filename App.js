/** @format */
import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  Animated,
  StyleSheet,
} from "react-native";

// You can import from local files
import DynamicHeader from "./components/DynamicHeader";
import { DATA } from "./data";

// or any pure javascript modules available in npm
import { Card } from "react-native-paper";

export default function App() {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <DynamicHeader animHeaderValue={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        {DATA.map((book, index) => {
          return (
            <Card style={styles.card} key={book.id}>
              <Text style={styles.scrollText}>{book.title}</Text>
            </Card>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
  scrollText: {
    fontSize: 16,
    textAlign: "center",
    padding: 20,
    color: "#fff",
  },
  card: {
    backgroundColor: "#3C5B9B",
    shadowColor: "#470000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 15,
    margin: 2,
  },
});
