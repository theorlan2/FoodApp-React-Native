import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  useColorScheme,
} from "react-native";

import { RecipeStepI } from "@/types/Recipe";
import { Colors } from "@/constants/Colors";

type Props = {
  element: RecipeStepI;
  icon: string;
  icons: any;
};

const StepItem = ({ element: { name, details }, icon, icons }: Props) => {
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
      fontSize: 14,
      opacity: 0.7,
      marginTop: 2,
    },
    weight: {
      flex: 1,
      marginTop: 12,
    },
  });

  return (
    <Pressable style={styles.row}>
      <View style={styles.containerImage}>
        <Image source={icons[icon]} />
      </View>

      <View style={styles.containerDescription}>
        <Text style={styles.title}>{name}</Text>

        <Text style={styles.description}>{details}</Text>
      </View>
    </Pressable>
  );
};

export default StepItem;
