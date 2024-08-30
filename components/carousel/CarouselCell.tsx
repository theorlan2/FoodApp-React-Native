import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Image } from "expo-image";

import { useCarouselCalculationsHook } from "@/hooks/useCarouselWidthAndHeight";

type Props = {
  image: string;
};

const CarouselCell = ({ image }: Props) => {
  const { itemWidth, slideHeight, itemHorizontalMargin, entryBorderRadius } =
    useCarouselCalculationsHook();

  const styles = StyleSheet.create({
    slideInnerContainer: {
      flex: 1,
      width: itemWidth,
      height: slideHeight,
      paddingHorizontal: itemHorizontalMargin,
      paddingBottom: 18, // needed for shadow
    },
    imageContainer: {
      flex: 1,
      borderRadius: entryBorderRadius,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      width: itemWidth,
      height: slideHeight,
    },
  });
  return (
    <Pressable style={styles.slideInnerContainer}>
      <View style={styles.imageContainer}>
        <Image style={{ width: "100%", height: "100%" }} source={`${image}`} />
      </View>
    </Pressable>
  );
};

export default CarouselCell;
