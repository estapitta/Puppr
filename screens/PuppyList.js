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

class PuppyList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Check Us Out",
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
        {filteredPuppies.length === 0 ? (
          <Text style={{fontSize:20, fontFamily:"HelveticaNeue-Bold"}}>Check back soon for more pups</Text>
        ) : (
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
              paddingVertical:10
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
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    fontWeight: "700"
  },
  selectionButton: {
    alignItems: "center",
    width: "45%",
    padding: 5,
    paddingTop: 5,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor:"white",
    margin: 5,
    shadowColor: "black",
    shadowOffset:{width:2, height: 4},
    shadowOpacity: 0.7,
    shadowRadius: 2
  }
});

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};

export default connect(mapStateToProps)(PuppyList);
