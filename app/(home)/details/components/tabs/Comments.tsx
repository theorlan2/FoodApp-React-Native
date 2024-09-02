import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { RecipesContext } from "@/context/useRecipesContext";
import { FlashList } from "@shopify/flash-list";
import CommentItem from "../CommentItem";

const CommentsTab = () => {
  const { recipe } = useContext(RecipesContext);

  return (
    <View style={styles.containerTab}>
      <ScrollView style={styles.containerScrollView}>
        {recipe.comments.length > 0 ? (
          <FlashList
            style={styles.containerList}
            data={recipe.comments}
            estimatedItemSize={10}
            renderItem={({ item }) => <CommentItem element={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={styles.commentText}>This post don't have coments</Text>
        )}
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
  commentText: {
    color: "#444",
    fontSize: 16,
    marginVertical: 10,
  },
  containerList: {
    flex: 1,
    backgroundColor: "green",
  },
});
export default CommentsTab;
