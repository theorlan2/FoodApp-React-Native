import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { FlashList } from "@shopify/flash-list";

import { RecipesContext } from "@/context/useRecipesContext";

import IngredientItem from "../IngredientItem";

const IngredientsTab = () => {
  const { recipe, recipeIngredientsIcons } = useContext(RecipesContext);

  return (
    <View style={{ ...styles.containerTab }}>
      <ScrollView style={styles.scrollCont}>
        <FlashList
          style={styles.ContList}
          data={recipe.ingredientes}
          renderItem={(item) => (
            <IngredientItem
              element={item.item}
              icon={item.item.icon}
              icons={recipeIngredientsIcons}
            />
          )}
          estimatedItemSize={5}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  containerTab: {
    flex: 1,
  },
  scrollCont: {
    flex: 1,
  },
  ContList: {
    flex: 1,
  },
});

export default IngredientsTab;
