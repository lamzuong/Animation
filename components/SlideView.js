import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

export default function SlideView() {
  const slideAnim1 = useRef(new Animated.Value(-700)).current;
  const slideAnim2 = useRef(new Animated.Value(-700)).current;
  useEffect(() => {
    const anim1 = Animated.timing(slideAnim1, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
      easing: Easing.bounce,
    });
    const anim2 = Animated.timing(slideAnim2, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
      easing: Easing.bounce,
    });
    Animated.stagger(2000, [anim1, anim2]).start();
    /*
    Animated.parallel([anim1, anim2]).start(); // song song
    Animated.sequence([anim1, anim2]).start(); // tuần tự
    */
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 300,
          height: 200,
          backgroundColor: "yellow",
          marginBottom: 20,
          marginLeft: slideAnim1,
        }}
      >
        <Text>Lâm Vương mãi đỉnh</Text>
      </Animated.View>
      <Animated.View
        style={{
          width: 300,
          height: 200,
          backgroundColor: "lightgreen",
          marginLeft: slideAnim2,
        }}
      >
        <Text>Lâm Vương mãi đỉnh</Text>
      </Animated.View>
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
