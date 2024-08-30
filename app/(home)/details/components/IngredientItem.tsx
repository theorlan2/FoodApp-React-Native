import { IngredientI } from "@/types/Recipe";
import React from "react";
import { Pressable, View, Image, StyleSheet, Text } from "react-native";

type Props = {
  element: IngredientI;
};

const IngredientItem = ({ element: { id, name, icon, peso } }: Props) => {
  return (
    <Pressable style={styles.rowIngredients} key={id}>
      <View style={styles.contImageList}>
        <Image source={{ uri: icon }} />
      </View>
      <View style={styles.contTextList}>
        <Text style={styles.ingTextList}>{name || ""}</Text>
      </View>

      <View style={styles.contpesoTextList}>
        <Text style={styles.subTextList}>{peso}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rowIngredients: {},
  contImageList: {},
  contTextList: {},
  ingTextList: {},
  contpesoTextList: {},
  subTextList: {},
});

export default IngredientItem;
