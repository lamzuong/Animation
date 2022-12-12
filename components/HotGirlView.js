import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import hinh1 from "../image/1.jpg";
import hinh2 from "../image/2.jpg";
import hinh3 from "../image/3.jpg";
import hinh4 from "../image/4.jpg";
import hinh5 from "../image/5.jpg";

const { width, height } = Dimensions.get("window");
const arr = [hinh1, hinh2, hinh3, hinh4, hinh5];
export default function HotGirlView() {
  const [location, setLocation] = useState({
    x: 0,
    y: 0,
  });
  const transAnim = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);

  const onPress = (evt) => {
    const { locationX, locationY } = evt.nativeEvent;
    setLocation({
      x: locationX,
      y: locationY,
    });
  };
  const onMove = (evt) => {
    const { locationX, locationY } = evt.nativeEvent;
    const temp = (1.5 * (locationX - location.x)) / width;
    const scale = new Animated.Value(temp);

    if (temp > 1) {
      setLocation({
        x: locationX,
        y: locationY,
      });
      setIndex((index + 1) % 5);
    }
    if (temp < -1) {
      setLocation({
        x: locationX,
        y: locationY,
      });
      setIndex((index - 1 + 5) % 5);
    }

    Animated.spring(transAnim, {
      toValue: scale,
      useNativeDriver: false,
    }).start();
  };
  const onRelease = (evt) => {
    Animated.timing(transAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  };
  const rotate = transAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-30deg", "30deg"],
  });
  const opacity = transAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 1, 0],
  });
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      onResponderGrant={onPress}
    >
      <Animated.Image
        source={arr[index]}
        style={{
          height: 200,
          width: 150,
          transform: [{ rotate: rotate }],
          opacity: opacity,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
