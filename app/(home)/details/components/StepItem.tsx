import { RecipeStepI } from "@/types/Recipe";
import { Pressable, View, Text, Image, StyleSheet } from "react-native";

type Props = {
  element: RecipeStepI;
  icon: string;
};

const StepItem = ({ element: { name, details }, icon }: Props) => {
  return (
    <Pressable style={styles.row}>
      <View style={styles.contImageList}>
        <Image source={{ uri: icon }} />
      </View>

      <View style={styles.contTextList}>
        <Text style={styles.TextList}>{name}</Text>

        <Text style={styles.subTextList}>{details}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  row: {},
  contImageList: {},
  contTextList: {},
  TextList: {},
  subTextList: {},
});

export default StepItem;
