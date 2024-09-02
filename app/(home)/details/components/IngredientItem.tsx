import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import { IngredientI } from "@/types/Recipe";

type Props = {
  element: IngredientI;
  icon: string;
  icons: {};
};

const IngredientItem = ({
  element: { id, name, peso },
  icon,
  icons,
}: Props) => {
  console.log("element icon: ", icon);
  return (
    <View style={styles.row} key={id}>
      <View style={styles.containerImage}>
        <Image source={icons[icon]} />
      </View>
      <View style={styles.containerDescription}>
        <Text style={styles.description}>{name || ""}</Text>
      </View>

      <View style={styles.weight}>
        <Text style={styles.subElement}>{peso}</Text>
      </View>
    </View>
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
