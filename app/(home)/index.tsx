import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { recipeList } from "@/constants/RecipesList";
import CarouselRecipes from "@/components/carousel/CarrouselRecipes";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  const [indexRecipe, setIndexRecipe] = useState(0);
  const [recipe, setRecipe] = useState(recipeList[indexRecipe]);

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollCont}>
        <View style={styles.detailsContainer}>
          <CarouselRecipes data={recipeList} firstItemIndex={indexRecipe} />
        </View>
        <View style={styles.contDetallesCaroucel}>
          <View style={styles.contTituloContDtC}>
            <ThemedText style={[styles.tituloContDtC]}>
              {recipe.name}
            </ThemedText>

            <ThemedText style={styles.vistasContDtC}>
              {`${recipe.views} Views /  ${recipe.likes} Likes`}
            </ThemedText>
            <View style={styles.contStarts}>
              {/* Ejemplo de Starts */}
              <Image source={require("@/assets/images/starts.png")} />
            </View>
            <Link
              href={{
                pathname: "/details/[id]",
                params: { id: "2" },
              }}
            >
              <Pressable
                style={styles.btnViewRecipe}
                onPress={() => {
                  console.log("example");
                }}
              >
                <LinearGradient
                  colors={[recipe.gradients[0], recipe.gradients[1]]}
                  style={styles.btnViewRecipeGrd}
                >
                  <Text> Open Recipe</Text>
                </LinearGradient>
              </Pressable>
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
  vistasContDtC: {
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
    marginTop: 20,
    elevation: 3,
  },
  btnVerRecipeText: {
    fontSize: 18,
  },
  contStarts: {},
});
