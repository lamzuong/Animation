import {
  StyleSheet,
  Dimensions,
  Animated,
  ImageBackground,
} from "react-native";
import React, { useEffect, useRef } from "react";
import backgroundMu from "../image/bgmu.jpg";
import logoC1 from "../image/UEFA_CHAMPIONS_LEAGUE.png";

const { width, height } = Dimensions.get("window");
export default function HelloApp() {
  const time = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(time, {
      toValue: 2,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);
  const opacity = time.interpolate({
    inputRange: [0, 2],
    outputRange: [0, 1],
  });
  const marginTop = time.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [-100, -50, 0],
  });
  const marginLeft = time.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [-700, -350, 0],
  });
  return (
    <Animated.View style={{ opacity }}>
      <ImageBackground
        style={{ width: width, height: height, alignItems: "center" }}
        source={backgroundMu}
      >
        <Animated.Image
          source={logoC1}
          style={{ resizeMode: "center", marginTop }}
        />
        <Animated.Text
          style={{
            fontSize: 30,
            backgroundColor: "transparent",
            marginTop: 330,
            marginLeft,
            color: "white",
          }}
        >
          Manchester United
        </Animated.Text>
      </ImageBackground>
    </Animated.View>
  );
}
