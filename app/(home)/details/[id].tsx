import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { RecipesContext } from "@/context/useRecipesContext";

import LikeButton from "./components/LikeBtn";
import IngredientItem from "./components/IngredientItem";

type Props = {};

const DetailsRecipeScreen = () => {
  const { recipe } = useContext(RecipesContext);

  return (
    <View style={styles.container}>
      <View style={styles.contenedorDetalles}>
        <View style={styles.viewPager}>
          <View style={{ ...styles.DetallesTab1, position: "relative" }}>
            <ScrollView style={styles.scrollCont}>
              <FlashList
                style={styles.ContList}
                data={recipe.ingredientes}
                renderItem={(item) => (
                  <IngredientItem element={item} icon={""} />
                )}
              />
            </ScrollView>
          </View>
          <View style={styles.DetallesTab2}>
            <ScrollView style={styles.scrollCont}>
              <FlashList
                style={styles.ContList}
                data={recipe.Steps}
                renderItem={(item) => <IngredientItem element={item} />}
              />
            </ScrollView>
          </View>
          <View style={styles.DetallesTab3}>
            <ScrollView style={styles.scrollCont}>
              <Text style={styles.comentariosText}>No Hay Comentarios</Text>
            </ScrollView>
          </View>
        </View>
      </View>
      <LikeButton colorGradientStart="" colorGradientEnd="" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdfa",
  },
  contenedorDetalles: {
    flex: 1,
  },
  scrollCont: {
    flex: 1,
  },
  ContList: {},
  viewPager: {},
  comentariosText: {},
  DetallesTab1: {},
  DetallesTab2: {},
  DetallesTab3: {},
});

export default DetailsRecipeScreen;
