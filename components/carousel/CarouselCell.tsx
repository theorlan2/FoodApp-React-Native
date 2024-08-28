import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";

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
  const IMAGE_URL = "http://192.168.5.80:6834/";
  console.log("image: ", `${IMAGE_URL}${image}?token=3c18f2`);
  return (
    <Pressable style={styles.slideInnerContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: `${IMAGE_URL}${image}?token=3c18f2` }}
        />
      </View>
    </Pressable>
  );
};

export default CarouselCell;
