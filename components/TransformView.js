import { useEffect, useRef } from "react";
import { Animated, StatusBar, StyleSheet, Text, View } from "react-native";

export default function TransformView(props) {
  const colorAnim = useRef(new Animated.Value(0)).current;
  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["green", "red", "yellow"],
  });
  const transAnim = useRef(new Animated.Value(0)).current;
  const rotate = transAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["45deg", "0deg", "-45deg"],
  });
  useEffect(() => {
    const anim1 = Animated.timing(colorAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    });
    const anim2 = Animated.timing(colorAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    });
    const animColor = Animated.sequence([anim1, anim2]);
    const anim3 = Animated.timing(transAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    });
    const anim4 = Animated.timing(transAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    });
    const animRotate = Animated.sequence([anim3, anim4]);
    const animFinal = Animated.parallel([animColor, animRotate]);
    Animated.loop(animFinal).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            width: 300,
            height: 200,
            // backgroundColor: backgroundColor,
            transform: [{ rotate: rotate }, { rotateY: rotate }],
          },
          props.style,
        ]}
      >
        {props.children}
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
