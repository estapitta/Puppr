import React from "react";

import { View, Text } from "react-native";

export default class PuppyPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const puppy = navigation.getParam("puppy") || {};
    return {
      title: puppy.name,
      headerStyle: {
        backgroundColor: "#c5e8d6"
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontSize: 30,
        fontFamily: "Academy Engraved LET"
      },
      headerBackTitle: null
    };
  };

  render() {
    const puppy = this.props.navigation.getParam("puppy") || {};

    return (
      <View>
        <Text>{puppy.description}</Text>
      </View>
    );
  }
}
