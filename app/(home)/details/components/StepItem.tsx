import { Pressable, View, Text, Image, StyleSheet } from "react-native";

import { RecipeStepI } from "@/types/Recipe";

type Props = {
  element: RecipeStepI;
  icon: string;
  icons: any;
};

const StepItem = ({ element: { name, details }, icon, icons }: Props) => {
  return (
    <Pressable style={styles.row}>
      <View style={styles.containerImage}>
        <Image source={icons[icon]} />
      </View>

      <View style={styles.containerDescription}>
        <Text style={styles.title}>{name}</Text>

        <Text style={styles.subElement}>{details}</Text>
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

export default StepItem;
