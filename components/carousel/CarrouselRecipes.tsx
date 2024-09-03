import React, { ReactElement, useRef, useState } from "react";
import { StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

import CarouselCell from "./CarouselCell";
import { useCarouselCalculationsHook } from "@/hooks/useCarouselWidthAndHeight";

import { RecipeI } from "@/types/Recipe";

type Props = {
  setIndex: (index: number) => void;
  data: RecipeI[];
};

const CarouselRecipes = ({ data, setIndex }: Props) => {
  const { itemWidth, sliderWidth } = useCarouselCalculationsHook();
  const carouselRef = useRef<Carousel<RecipeI> | null>(null);

  const CurrentItem = (index: number) => {
    setIndex(index);
  };

  return (
    <Carousel<RecipeI>
      slideStyle={{ flex: 1 }}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      firstItem={0}
      inactiveSlideScale={0.94}
      inactiveSlideOpacity={1}
      enableMomentum={false}
      showsHorizontalScrollIndicator={false}
      ref={(ref) => (carouselRef.current = ref)}
      removeClippedSubviews={false}
      data={data}
      onSnapToItem={CurrentItem}
      renderItem={(item) => <CarouselCell image={item.item.image} />}
    ></Carousel>
  );
};
const styles = StyleSheet.create({});
export default CarouselRecipes;
