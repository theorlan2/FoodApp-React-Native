import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { RecipesContext } from "@/context/useRecipesContext";
import { FlashList } from "@shopify/flash-list";

const CommentsTab = () => {
  const { recipe } = useContext(RecipesContext);

  return (
    <View style={styles.containerTab}>
      <ScrollView style={styles.containerScrollView}>
        <Text style={styles.comentariosText}>No Hay Comentarios</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTab: {
    flex: 1,
    position: "relative",
  },
  containerScrollView: {
    flex: 1,
  },
  comentariosText: {},
});
export default CommentsTab;
