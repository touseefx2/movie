import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { observer } from "mobx-react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import stack from "./src/navigation";
import store from "./src/store";
import { create } from "mobx-persist";

export default observer(App);
function App() {
  const Stack = createNativeStackNavigator();
  const { setInternet } = store.General;

  useEffect(() => {
    hydrateStores();
    const unsubscribeNetinfo = NetInfo.addEventListener((state) => {
      setInternet(state.isConnected);
    });

    return () => {
      unsubscribeNetinfo();
    };
  }, []);

  const hydrateStores = async () => {
    const hydrate = create({ storage: AsyncStorage });
    await hydrate("Movies", store.Movies);
  };

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BottomTabBar" component={stack.BottomTabBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
