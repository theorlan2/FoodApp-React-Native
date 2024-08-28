import React, { ReactElement, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

import CarouselCell from "./CarouselCell";
import { useCarouselCalculationsHook } from "@/hooks/useCarouselWidthAndHeight";

import { RecipeI } from "@/types/Recipe";

type Props = {
  firstItemIndex: number;
  data: RecipeI[];
};

const CarouselRecipes = ({ data, firstItemIndex }: Props) => {
  const { itemWidth, sliderWidth } = useCarouselCalculationsHook();
  const carouselRef = useRef<Carousel<RecipeI>>(null);
  const [indexRecipe, setIndex] = useState(0);
  const CurrentItem = () => {
    if (
      carouselRef &&
      carouselRef.current &&
      carouselRef.current.currentIndex
    ) {
      setIndex(carouselRef.current.currentIndex);
      // save the indexRecipe
    }
  };

  return (
    <Carousel<RecipeI>
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      firstItem={firstItemIndex}
      inactiveSlideScale={0.94}
      inactiveSlideOpacity={1}
      enableMomentum={false}
      // containerCustomStyle={styles.slider}
      contentContainerCustomStyle={styles.sliderContainer}
      showsHorizontalScrollIndicator={false}
      ref={(ref) => (carouselRef.current = ref)}
      onScroll={CurrentItem}
      onLayout={CurrentItem}
      removeClippedSubviews={false}
      data={data}
      style={{}}
      renderItem={(item) => <CarouselCell image={item.item.image} />}
    ></Carousel>
  );
};
const styles = StyleSheet.create({
  slider: {
    marginTop: 20,
  },
  sliderContainer: {},
});
export default CarouselRecipes;
