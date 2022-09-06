import { View, Text, useWindowDimensions } from "react-native";
import React, { useContext, useState } from "react";
import NewsScreen from "../Screens/NewsScreen";
import { NewsContext } from "../API/Context";
import TopNavigation from "./TopNavigation";
import DiscoverScreen from "../Screens/DiscoverScreen";
import { SceneMap, TabView } from "react-native-tab-view";

const InshortTabs = () => {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default InshortTabs;
