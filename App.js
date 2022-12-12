import { useEffect, useRef } from "react";
import { Animated, StatusBar, StyleSheet, Text, View } from "react-native";
import FadeView from "./components/FadeView";
import SlideView from "./components/SlideView";
import TransformView from "./components/TransformView";
import ResponseView from "./components/ResponseView";
import HotGirlView from "./components/HotGirlView";
import HelloApp from "./screen/HelloApp";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      {/* Bài 7 
      <TransformView style={{ backgroundColor: "lightblue" }}>
        <Text>React Animated</Text>
      </TransformView>
      <TransformView style={{ backgroundColor: "yellow", height: 100 }}>
        <Text>React Animated</Text>
      </TransformView> */}
      <HotGirlView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
