import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import screens from "../../screens";
import { styles } from "./styles";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default BottomTabBar = () => {
  return (
    <Tab.Navigator
      backBehavior={"initialRoute"}
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? "";
          if (routeName === "MovieDetail") {
            return { display: "none" };
          }
          return styles.tabBarStyle;
        })(route),
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={screens.Dashboard}
        options={styles.dashboardIcon}
      />
      <Tab.Screen
        name="Watch"
        component={WatchStack}
        options={styles.watchIcon}
      />
      <Tab.Screen
        name="Media Library"
        component={screens.MediaLibrary}
        options={styles.mediaLibraryIcon}
      />
      <Tab.Screen
        name="More"
        component={screens.More}
        options={styles.moreIcon}
      />
    </Tab.Navigator>
  );
};

const WatchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Watchs"
      screenOptions={{
        animationEnabled: false,
        headerShown: false,
      }}
    >
      <Stack.Screen name="Watchs" component={screens.Watch} />
      <Stack.Screen name="MovieDetail" component={screens.MovieDetail} />
    </Stack.Navigator>
  );
};
