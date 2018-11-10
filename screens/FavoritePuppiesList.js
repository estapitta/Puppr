import React from "react";
import { connect } from "react-redux";
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

class FavoritePuppiesList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Your Favorites",
      headerStyle: {
        backgroundColor: "#c5e8d6"
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontSize: 24,
        flex: 1,
        paddingTop: 13,
        fontFamily: "Academy Engraved LET"
      },
      headerBackTitle: null
    };
  };

  onPressName = puppy => {
    this.props.navigation.navigate("PuppyPage", {
      puppy: puppy
    });
  };

  render() {
    //Filter the puppies in puppyData by checking if their id exists in the store state
    const filteredPuppies = puppyData.filter(puppy => {
      return this.props.favorites.indexOf(puppy.id) !== -1;
    });

    return (
      <View style={styles.container}>
        {filteredPuppies.length === 0 ? (
          <Text style={{ fontSize: 20, fontFamily: "HelveticaNeue-Bold" }}>
            No favorites yet :(
          </Text>
        ) : (
          <ScrollView
            style={{ width: "100%" }}
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
                  onPress={() => this.onPressName(puppy)}
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
        )}
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

const mapStateToProps = state => {
  return {
    favorites: state
  };
};

export default connect(mapStateToProps)(FavoritePuppiesList);
