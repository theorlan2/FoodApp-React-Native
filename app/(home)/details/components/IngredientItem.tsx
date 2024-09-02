import React from "react";
import { View, Image, StyleSheet, Text, useColorScheme } from "react-native";

import { IngredientI } from "@/types/Recipe";
import { Colors } from "@/constants/Colors";

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
  const colorScheme = useColorScheme();

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
      color: Colors[colorScheme ?? "light"].textTitle,
      fontSize: 16,
    },
    description: {
      color: Colors[colorScheme ?? "light"].text,
      fontSize: 16,
      marginTop: 10,
    },
    weight: {
      flex: 1,
      marginTop: 12,
    },
    subElement: {
      color: Colors[colorScheme ?? "light"].text,
      opacity: 0.7,
      fontSize: 14,
    },
  });

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

export default IngredientItem;
