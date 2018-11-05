import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Puppr",
    headerStyle: {
      backgroundColor: "#c5e8d6"
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontSize: 30,
      fontFamily: "Academy Engraved LET"
    }
  };
  constructor() {
    super();
    this.state = {
      breed: "",
      gender: ""
    };
  }

  onPressBreed = () => {};

  onPressGender = () => {};

  onPressFind = () => {
    this.props.navigation.navigate("PuppyList");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello Puppies</Text>
        <TouchableHighlight
          onPress={this.onPressBreed}
          underlayColor="#d3d3d3"
          style={styles.selectionButton}
        >
          <Text>
            {this.state.breed.length === 0 ? "Select Breed" : this.state.breed}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onPressGender}
          underlayColor="#d3d3d3"
          style={styles.selectionButton}
        >
          <Text>
            {this.state.gender.length === 0
              ? "Select Gender"
              : this.state.gender}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.onPressFind} underlayColor="#d3d3d3">
          <Text>Find</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingBottom: 60
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  selectionButton: {
    alignItems: "center",
    width: "70%",
    padding: 5,
    borderColor: "black",
    borderWidth: 1
  }
});
