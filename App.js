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
import PuppyPage from "./screens/PuppyPage";
import About from "./screens/About";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { Provider } from "react-redux";
import { createStore } from "redux";
import favoritePuppyReducer from "./resources/store/favorite";
const store = createStore(favoritePuppyReducer);

type Props = {};
//put here all the routes of my screens
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    PuppyList: {
      screen: PuppyList
    },
    PuppyPage: {
      screen: PuppyPage
    }
  },
  {
    initialRouteName: "Home"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Search: RootStack,
    Favorites: {
      screen: PuppyList
    },
    About: {
      screen: About
    }
  },

  {
    tabBarOptions: {
      activeTintColor: "#e91e63",
      inactiveBackgroundColor: "#c5e8d6",
      inactiveTintColor: "#444444",
      labelStyle: {
        fontSize: 15
      },
      style: {
        backgroundColor: "#c5e8d6"
      }
    }
  }
);

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}
