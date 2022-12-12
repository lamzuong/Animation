import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";
import doraemon from "../image/icon.png";

export default function ResponseView() {
  const [location, setLocation] = useState({
    marginLeft: new Animated.Value(0),
    marginTop: new Animated.Value(0),
  });

  const onPress = (evt) => {
    const { locationX, locationY } = evt.nativeEvent;
    console.log(locationX, locationY);
    setLocation({
      marginLeft: new Animated.Value(locationX - 50),
      marginTop: new Animated.Value(locationY - 150),
    });
  };
  const onMove = (evt) => {
    const { locationX, locationY } = evt.nativeEvent;
    setLocation({
      marginLeft: new Animated.Value(locationX - 50),
      marginTop: new Animated.Value(locationY - 150),
    });
  };
  const onRelease = (evt) => {
    console.log("Stop moving");
    const anim1 = Animated.timing(location.marginLeft, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.bounce,
    });
    const anim2 = Animated.timing(location.marginTop, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.bounce,
    });
    Animated.parallel([anim1, anim2]).start();
  };
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
        source={doraemon}
        style={{
          height: 100,
          width: 100,
          marginLeft: location.marginLeft,
          marginTop: location.marginTop,
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
  },
});
