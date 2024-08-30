import { LinearGradient } from "expo-linear-gradient";

import React from "react";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  colorGradientStart: string;
  colorGradientEnd: string;
};

const LikeButton = ({ colorGradientStart, colorGradientEnd }: Props) => {
  return (
    <LinearGradient
      colors={[colorGradientStart, colorGradientEnd]}
      style={styles.contenedorBtn}
    >
      <Pressable></Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  contenedorBtn: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 52,
    height: 52,
    borderRadius: 50,
    elevation: 8,
    zIndex: 20,
    marginBottom: 10,
  },
  btnSvg: {
    width: 28,
    height: 28,
    marginTop: 14,
    margin: 12,
  },
});

export default LikeButton;
