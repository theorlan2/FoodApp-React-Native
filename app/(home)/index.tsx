import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Rating } from "react-native-ratings";

import CarouselRecipes from "@/components/carousel/CarrouselRecipes";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { RecipesContext } from "@/context/useRecipesContext";

export default function HomeScreen() {
  const { recipe, recipes, setRecipeByIndex } = useContext(RecipesContext);

  function ratingCompleted() {}

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollCont}>
        <View style={styles.detailsContainer}>
          <CarouselRecipes data={recipes} setIndex={setRecipeByIndex} />
        </View>
        <View style={styles.contDetallesCaroucel}>
          <View style={styles.contTituloContDtC}>
            <ThemedText style={[styles.tituloContDtC]}>
              {recipe.name}
            </ThemedText>

            <ThemedText style={styles.textDetailsRecipe}>
              {`${recipe.views} Views /  ${recipe.likes} Likes`}
            </ThemedText>
            <View style={styles.contStarts}>
              <Rating
                imageSize={24}
                onFinishRating={ratingCompleted}
                style={{ paddingVertical: 5 }}
              />
            </View>
            <Link
              href={{
                pathname: "/(home)/details/[id]",
                params: { id: 1 },
              }}
            >
              <View style={styles.btnViewRecipe}>
                <LinearGradient
                  colors={recipe.gradients}
                  style={styles.btnViewRecipeGrd}
                >
                  <Text style={{ color: "white" }}> Open Recipe</Text>
                </LinearGradient>
              </View>
            </Link>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
  },
  Header2: {
    flex: 1,
  },
  scrollCont: {
    flex: 1,
  },
  viewPager: {
    flex: 1,
    paddingVertical: 20,
  },
  DetallesTab1: {
    flex: 1,
    position: "relative",
  },
  contDetallesCaroucel: {
    flex: 1,
  },
  contTituloContDtC: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tituloContDtC: {
    color: "#ff8e00",
    fontSize: 20,
  },
  textDetailsRecipe: {
    fontSize: 16,
    opacity: 0.5,
  },
  btnViewRecipe: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 13,
  },
  btnViewRecipeGrd: {
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 13,
    elevation: 3,
  },
  btnVerRecipeText: {
    fontSize: 18,
  },
  contStarts: {
    marginVertical: 10,
  },
});
