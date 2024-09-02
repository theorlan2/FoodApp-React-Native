import React, { useContext, useState } from "react";

import { TabView, SceneMap } from "react-native-tab-view";

import { RecipesContext } from "@/context/useRecipesContext";

import GradientTabBar from "./components/TabBar";
import StepsTab from "./components/tabs/Steps";
import IngredientsTab from "./components/tabs/Ingredients";
import CommentsTab from "./components/tabs/Comments";

import StepsIcon from "@/assets/images/svg-icons/steps.svg";
import IngredientsIcon from "@/assets/images/svg-icons/ingredients.svg";
import CommentsIcon from "@/assets/images/svg-icons/comments.svg";

const DetailsRecipeScreen = () => {
  const { recipe } = useContext(RecipesContext);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Steps",
      iconTab: <StepsIcon width={40} height={40} />,
    },
    {
      key: "second",
      title: "Ingredients",
      iconTab: <IngredientsIcon width={40} height={40} />,
    },
    {
      key: "third",
      title: "Comments",
      iconTab: <CommentsIcon width={40} height={40} />,
    },
  ]);

  const _renderScene = SceneMap({
    first: StepsTab,
    second: IngredientsTab,
    third: CommentsTab,
  });
  const _handleIndexChange = (index: number) => setIndex(index);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={_renderScene}
      renderTabBar={(props) => (
        <GradientTabBar
          gradients={recipe.gradients}
          setIndex={setIndex}
          index={index}
          icons={routes.map((item) => item.iconTab)}
          {...props}
        />
      )}
      onIndexChange={_handleIndexChange}
    />
  );
};

export default DetailsRecipeScreen;
