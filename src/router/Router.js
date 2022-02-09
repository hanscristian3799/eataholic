import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import SearchScreen from "../screens/SearchScreen";
import RestaurantDetailScreen from "../screens/RestaurantDetailScreen";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          contentStyle: {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Eataholic" }}
        />
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
