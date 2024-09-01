import React from "react";
import { Pressable, View, Image, StyleSheet, Text } from "react-native";

import { IngredientI } from "@/types/Recipe";

type Props = {
  element: IngredientI;
};

const IngredientItem = ({ element: { id, name, icon, peso } }: Props) => {
  return (
    <Pressable style={styles.row} key={id}>
      <View style={styles.containerImage}>
        <Image source={{ uri: icon }} />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.description}>{name || ""}</Text>
      </View>

      <View style={styles.weight}>
        <Text style={styles.subElement}>{peso}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 20,
  },
  containerImage: {
    flex: 1,
    marginLeft: 10,
  },
  containerDescription: {
    flex: 4,
  },
  title: {
    color: "#444",
    fontSize: 16,
  },
  description: {
    color: "#444",
    fontSize: 16,
    marginTop: 10,
  },
  weight: {
    flex: 1,
    marginTop: 12,
  },
  subElement: {
    color: "#999",
    fontSize: 14,
  },
});

export default IngredientItem;
