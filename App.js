/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Image } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import PuppyList from "./screens/PuppyList";
import PuppyPage from "./screens/PuppyPage";
import FormView from "./screens/FormView";
import FavoritePuppiesList from "./screens/FavoritePuppiesList";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { Provider } from "react-redux";
import { createStore } from "redux";
import favoritePuppies from "./resources/store/favorite";
const store = createStore(favoritePuppies);

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
    },
    FormView: {
      screen: FormView
    }
  },
  {
    initialRouteName: "Home"
  }
);

const FavoritesStack = createStackNavigator(
  {
    FavoritePuppiesList: {
      screen: FavoritePuppiesList
    },
    PuppyPage: {
      screen: PuppyPage
    },
    FormView: {
      screen: FormView
    }
  },
  {
    initialRouteName: "FavoritePuppiesList"
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: RootStack,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./resources/pawLight.png")}
            style={{ height: 20, width: 20, tintColor }}
          />
        )
      })
    },
    Favorites: {
      screen: FavoritesStack,
      navigationOptions: () => ({
        title: "Favorites",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./resources/favorite.png")}
            style={{ height: 20, width: 20, tintColor }}
          />
        )
      })
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
