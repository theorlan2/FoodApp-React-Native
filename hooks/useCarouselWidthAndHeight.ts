import React from "react";
import { useState, useMemo } from "react";
import { Dimensions } from "react-native";

export const useCarouselCalculationsHook = () => {
  const { width: viewportWidth, height: viewportHeight } = useMemo(
    () => Dimensions.get("window"),
    [],
  );
  const slideHeight = useMemo(() => viewportHeight * 0.6, [viewportHeight]);
  const slideWidth = wp(80);
  const itemHorizontalMargin = wp(2);
  const backDescripWidth = wp(95);

  function wp(percentage: number) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  }

  const sliderWidth = viewportWidth;
  const itemWidth = slideWidth + itemHorizontalMargin * 2;
  const PhotoWidth = itemWidth - 40;
  const entryBorderRadius = 8;

  return {
    slideHeight,
    itemWidth,
    sliderWidth,
    itemHorizontalMargin,
    entryBorderRadius,
    PhotoWidth,
    backDescripWidth,
  };
};
