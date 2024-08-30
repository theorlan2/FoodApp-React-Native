import { RecipesContext } from "@/context/useRecipesContext";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { G, Path } from "react-native-svg";

const DetailsLayout = () => {
  const { recipe } = useContext(RecipesContext);
  return (
    <View style={styles.container}>
      <LinearGradient colors={recipe.gradients} style={styles.containerH}>
        <View style={styles.tabsCont}>
          <Pressable style={styles.tabsList} onPress={() => {}}>
            <View style={[styles.svgCont, { opacity: 1 }]}>
              <Svg viewBox="0 0 60 60" style={styles.svgTabs}>
                <G fill="#FFF">
                  <Path d="M56.784 40.046C56.452 39.4 55.794 39 55.07 39h-1.096c-.464-12.195-9.362-22.26-21.017-24.52.017-.16.043-.32.043-.48 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 .16.025.32.043.48C11.387 16.74 2.49 26.805 2.025 39H1.93c-.726 0-1.383.4-1.715 1.046S-.06 41.46.36 42.05l2.26 3.164C3.868 46.96 5.89 48 8.035 48h40.932c2.143 0 4.167-1.04 5.413-2.786l2.26-3.164c.42-.59.476-1.36.144-2.004zM25.006 14.172C25.002 14.114 25 14.056 25 14c0-1.654 1.346-3 3-3s3 1.346 3 3c0 .057-.002.114-.006.172-.047-.005-.094-.007-.14-.012-.344-.038-.69-.065-1.038-.09-.128-.008-.255-.02-.383-.028C28.957 14.015 28.48 14 28 14s-.958.015-1.432.04c-.128.008-.255.02-.383.03-.348.024-.694.052-1.038.09-.047.005-.094.006-.14.012zm-.6 2.097c.535-.08 1.075-.14 1.615-.183.11-.01.22-.017.33-.024 1.1-.074 2.202-.074 3.3 0l.33.024c.54.044 1.08.102 1.615.182C42.805 17.96 51.503 27.436 51.98 39H4.02c.477-11.563 9.173-21.04 20.386-22.73zM52.75 44.05c-.87 1.22-2.286 1.95-3.785 1.95H8.035c-1.5 0-2.915-.73-3.787-1.948L2.068 41H54.93l-2.18 3.05z" />
                  <Path d="M27.986 18c-1.643 0-3.278.18-4.86.537-.54.12-.877.656-.756 1.195.105.465.518.78.975.78.073 0 .147-.008.22-.024 1.44-.324 2.926-.488 4.42-.488H28c.55 0 1-.447 1-1 0-.556-.444-1.02-1.014-1zM17.15 20.9c-5.204 3.082-8.992 8.66-10.134 14.92-.1.544.26 1.064.805 1.163.06.012.12.017.18.017.475 0 .896-.338.984-.82 1.04-5.698 4.473-10.768 9.186-13.56.475-.28.632-.895.35-1.37-.282-.475-.894-.632-1.37-.35z" />
                </G>
              </Svg>
              <Text style={styles.nomTab}>Ingredients</Text>
            </View>
          </Pressable>

          <Pressable style={styles.tabsList} onPress={() => {}}>
            <View style={styles.svgCont}>
              <Svg viewBox="0 0 60 60" style={styles.svgTabs}>
                <G fill="#FFF">
                  <Path d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.56 58 2 45.44 2 30S14.56 2 30 2s28 12.56 28 28-12.56 28-28 28z" />
                  <Path d="M30 6c-.552 0-1 .447-1 1v23H14c-.552 0-1 .447-1 1s.448 1 1 1h16c.552 0 1-.447 1-1V7c0-.553-.448-1-1-1z" />
                </G>
              </Svg>
              <Text style={styles.nomTab}>Step</Text>
            </View>
          </Pressable>

          <Pressable style={styles.tabsList} onPress={() => {}}>
            <View style={styles.svgCont}>
              <Svg viewBox="0 0 60 60" style={styles.svgTabs}>
                <G fill="#FFF">
                  <Path d="M30 1.5c-16.542 0-30 12.112-30 27 0 5.205 1.647 10.246 4.768 14.604-.59 6.537-2.175 11.39-4.475 13.69-.304.303-.38.768-.188 1.152.17.343.52.554.895.554.046 0 .093-.003.14-.01.405-.057 9.813-1.412 16.617-5.338C21.622 54.712 25.737 55.5 30 55.5c16.542 0 30-12.112 30-27s-13.458-27-30-27zm0 52c-3.487 0-6.865-.57-10.075-1.68 4.075-2.546 4.085-2.727 4.08-3.316 0-.35-.19-.682-.49-.862-.457-.273-1.042-.142-1.338.29-.55.436-2.906 1.948-5.016 3.25-4.463 2.696-10.474 4.2-13.808 4.88 2.202-3.67 3.09-8.986 3.44-13.16.02-.24-.047-.482-.19-.677C3.59 38.143 2 33.398 2 28.5c0-13.785 12.56-25 28-25s28 11.215 28 25-12.56 25-28 25z" />
                  <Path d="M16 21.515h15c.552 0 1-.448 1-1s-.448-1-1-1H16c-.552 0-1 .448-1 1s.448 1 1 1zM44 27.515H16c-.552 0-1 .448-1 1s.448 1 1 1h28c.552 0 1-.448 1-1s-.448-1-1-1zM44 35.515H16c-.552 0-1 .448-1 1s.448 1 1 1h28c.552 0 1-.448 1-1s-.448-1-1-1z" />
                </G>
              </Svg>
              <Text style={styles.nomTab}>Comments</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.contComit}>
          <View style={styles.contImitTabAct}>
            <Svg
              viewBox="0 0 181 29"
              height={20}
              width={40}
              style={styles.svgComit}
            >
              <Path
                d="M85.99 0s11.41 10.162 35.167 17.36c12.752 3.863 26.188 6.974 38.824 9.013 10.906 1.76 22.02 2.715 22.02 2.715H-1s7.21-.382 18.125-2.715c9.13-1.952 21.058-5.515 31.523-9.014C71.623 9.676 85.99 0 85.99 0z"
                fill="#fff"
                fill-rule="evenodd"
              />
            </Svg>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  containerH: {
    flex: 1,
  },
  contenedorHTop: {
    flexDirection: "row",
  },
  vContenedor: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  tituloCont: {
    flex: 1,
    alignItems: "center",
  },
  tabsList: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconMenu: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  tituloText: {
    fontSize: 20,
    marginTop: 10,
    color: "#fff",
    textAlign: "center",
  },
  tabsCont: {
    flexDirection: "row",
    paddingVertical: 15,
  },
  svgCont: {
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.3,
  },
  svgTabs: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  nomTab: {
    fontSize: 16,
    color: "#fff",
  },
  // Corte en el Tab Activa
  contImitTabAct: {
    flex: 1,
    maxWidth: "33.3%",
    alignSelf: "center",
  },
  contComit: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  svgComit: {
    top: -3.61,
    alignSelf: "center",
  },
  touchContenedor: {},
});

export default DetailsLayout;
