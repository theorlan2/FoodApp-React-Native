import { Colors } from "@/constants/Colors";
import { ReactElement, useState } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Pressable,
  useColorScheme,
} from "react-native";
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

function CustomTabBar<T extends Route>({
  icons,
  setIndex,
  navigationState,
  position,
}: SceneRendererProps & { navigationState: NavigationState<T> } & Props) {
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    tabItem: {
      flex: 1,
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: Colors[colorScheme ?? "light"].background,
      paddingVertical: 10,
    },
    containerTabBar: {
      flexDirection: "row",
      elevation: 2,
      shadowOffset: { width: 1, height: 2 },
    },
  });

  const inputRange = navigationState.routes.map((x, i) => i);

  return (
    <View style={styles.containerTabBar}>
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
            <Animated.Text
              style={{
                opacity,
                fontWeight: "600",
                color: Colors[colorScheme ?? "light"].textTitle,
              }}
            >
              {route.title}
            </Animated.Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default CustomTabBar;
