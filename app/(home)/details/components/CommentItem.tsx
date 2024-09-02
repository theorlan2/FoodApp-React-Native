import React from "react";
import { View, StyleSheet, Text, useColorScheme } from "react-native";

import { CommentI } from "@/types/Recipe";
import { Colors } from "@/constants/Colors";

type Props = {
  element: CommentI;
};

const CommentItem = ({ element: { id, userName, comment } }: Props) => {
  const colorScheme = useColorScheme();

  const styles = StyleSheet.create({
    columns: {
      flex: 1,
      flexDirection: "column",
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft: 20,
    },
    containerDescription: {
      flex: 1,
    },
    title: {
      color: Colors[colorScheme ?? "light"].textTitle,
      fontSize: 16,
    },
    containerComment: {
      flex: 1,
      marginTop: 4,
    },
    description: {
      color: Colors[colorScheme ?? "light"].text,
      opacity: 0.7,
      fontSize: 14,
    },
  });

  return (
    <View style={styles.columns} key={id}>
      <View style={styles.containerDescription}>
        <Text style={styles.title}>{userName}</Text>
      </View>

      <View style={styles.containerComment}>
        <Text style={styles.description}>{comment}</Text>
      </View>
    </View>
  );
};

export default CommentItem;
