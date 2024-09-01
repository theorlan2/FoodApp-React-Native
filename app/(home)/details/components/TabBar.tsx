import { LinearGradient } from "expo-linear-gradient";
import { ReactElement, useState } from "react";
import { Animated, View, StyleSheet, Pressable } from "react-native";
import {
  NavigationState,
  Route,
  SceneRendererProps,
} from "react-native-tab-view";

type Props = {
  icons: ReactElement[];
  index: number;
  gradients: string[];
  setIndex: (index: number) => void;
};
function GradientTabBar<T extends Route>({
  icons,
  index,
  setIndex,
  gradients,
  navigationState,
  position,
}: SceneRendererProps & { navigationState: NavigationState<T> } & Props) {
  const styles = StyleSheet.create({
    tabItem: {
      flex: 1,
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
    },
    containerTabBar: {
      paddingVertical: 10,
      flexDirection: "row",
    },
  });

  const inputRange = navigationState.routes.map((x, i) => i);

  return (
    <LinearGradient colors={gradients} style={styles.containerTabBar}>
      {navigationState.routes.map((route, i) => {
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex) =>
            inputIndex === i ? 1 : 0.5,
          ),
        });

        return (
          <Pressable style={styles.tabItem} onPress={() => setIndex(i)}>
            <Animated.View style={{ opacity }}>
              {icons[i] && icons[i]}
            </Animated.View>
            <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
          </Pressable>
        );
      })}
    </LinearGradient>
  );
}

export default GradientTabBar;
