import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React, { useContext } from "react";
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
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.carouselContainer}>
          <CarouselRecipes data={recipes} setIndex={setRecipeByIndex} />
        </View>
        <View style={styles.containerDetaillsCaroucel}>
          <ThemedText style={[styles.titleRecipe]}>{recipe.name}</ThemedText>

          <ThemedText style={styles.detailsRecipe}>
            {`${recipe.views} Views /  ${recipe.likes} Likes`}
          </ThemedText>
          <View style={styles.containerRating}>
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
            <View style={styles.containerButtonOpenRecipe}>
              <LinearGradient
                colors={recipe.gradients}
                style={styles.gradientButton}
              >
                <Text style={{ color: "white" }}>Open Recipe</Text>
              </LinearGradient>
            </View>
          </Link>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  containerDetaillsCaroucel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleRecipe: {
    color: "#ff8e00",
    fontSize: 20,
  },
  detailsRecipe: {
    fontSize: 16,
    opacity: 0.5,
  },
  containerButtonOpenRecipe: {
    flex: 1,
    paddingHorizontal: 50,
    paddingVertical: 13,
  },
  gradientButton: {
    alignItems: "center",
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 13,
    elevation: 3,
  },
  buttonOpenRecipe: {
    fontSize: 18,
  },
  containerRating: {
    marginVertical: 10,
  },
});
