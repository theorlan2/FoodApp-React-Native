import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { CommentI } from "@/types/Recipe";

type Props = {
  element: CommentI;
};

const CommentItem = ({ element: { id, userName, comment } }: Props) => {
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
    color: "#444",
    fontSize: 16,
  },
  containerComment: {
    flex: 1,
    marginTop: 4,
  },
  description: {
    color: "#999",
    fontSize: 14,
  },
});

export default CommentItem;
