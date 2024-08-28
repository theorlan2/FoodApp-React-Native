import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {};

const DetailsRecipeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollCont}>
        <View style={styles.contenedorDetalles}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffdfa",
  },
  contenedorDetalles: {
    flex: 1,
  },
  scrollCont: {
    flex: 1,
  },
});

export default DetailsRecipeScreen;
