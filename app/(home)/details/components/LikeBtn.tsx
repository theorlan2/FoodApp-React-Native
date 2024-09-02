import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import HeartIcon from "@/assets/images/svg-icons/heart-icon.svg";

type Props = {
  colors: string[];
};

const LikeButton = ({ colors }: Props) => {
  return (
    <LinearGradient colors={colors} style={styles.containerButoon}>
      <Pressable style={styles.buttonGradient}>
        <HeartIcon width={24} height={24} />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containerButoon: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 52,
    height: 52,
    borderRadius: 50,
    elevation: 8,
    zIndex: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  buttonGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 1,
    shadowOffset: { width: 1, height: 1 },
  },
});

export default LikeButton;
