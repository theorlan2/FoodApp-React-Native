import React, { useContext } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import { FlashList } from "@shopify/flash-list";

import { RecipesContext } from "@/context/useRecipesContext";

import StepItem from "../StepItem";

const StepsTab = () => {
  const { recipe, recipeIngredientsIcons } = useContext(RecipesContext);
  return (
    <View style={styles.containerTab}>
      <ScrollView style={styles.scrollCont}>
        <FlashList
          data={recipe.steps}
          estimatedItemSize={10}
          renderItem={({ item }) => (
            <StepItem
              icon={item.icon}
              element={item}
              icons={recipeIngredientsIcons}
            />
          )}
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
});

export default StepsTab;
