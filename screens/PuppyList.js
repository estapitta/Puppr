import React from "react";
const puppyData = require("../resources/puppyDb.json");
import puppyImages from "../resources/puppyImages";

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Image
} from "react-native";

export default class PuppyList extends React.Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   name: ""
  //   // };
  // }
  onPressName = () => {};
  onPressPuppyPage = () => {
    this.props.navigation.navigate("PuppyPage");
  };

  render() {
    const age = this.props.navigation.getParam("age");
    const gender = this.props.navigation.getParam("gender");
    let filteredPuppies = puppyData.filter(puppy => {
      if (age) {
        return puppy.age === age;
      } else {
        return true;
      }
    });
    filteredPuppies = filteredPuppies.filter(puppy => {
      if (gender) {
        return puppy.gender === gender;
      } else {
        return true;
      }
    });

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Check out our Buddies</Text>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          {filteredPuppies.map(puppy => {
            return (
              <TouchableHighlight
                key={puppy.id}
                onPress={this.onPressName}
                underlayColor="#d3d3d3"
                style={styles.selectionButton}
              >
                <View style={{ width: "100%" }}>
                  <Image
                    style={{ width: "100%", height: 150 }}
                    source={puppyImages[puppy.name]}
                    resizeMode="cover"
                  />
                  <Text style={styles.puppyNames}>{puppy.name}</Text>
                </View>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  puppyNames: {
    fontSize: 15,
    textAlign: "center",
    margin: 10
  },
  selectionButton: {
    alignItems: "center",
    width: "45%",
    padding: 5,
    paddingTop: 5,
    borderColor: "black",
    borderWidth: 1,
    margin: 5
  }
});
