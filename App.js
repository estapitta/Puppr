/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import PuppyList from "./screens/PuppyList";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

type Props = {};
//put here all the routes of my screens
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    PuppyList: {
      screen: PuppyList
    }
  },
  {
    initialRouteName: "Home"
  }
);

const TabNavigator = createBottomTabNavigator({
  Search: RootStack,
  Favorites: {
    screen: PuppyList
  }
});

export default class App extends Component<Props> {
  render() {
    return <TabNavigator />;
  }
}
