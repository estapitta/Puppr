import React from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight
} from "react-native";
import puppyImages from "../resources/puppyImages";
import Sound from "react-native-sound";

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

  sound = null;
  playSound = soundUrl => {
    if (this.sound) {
      this.sound.stop();
      this.sound.release();
      this.sound = null;
    } else {
      this.sound = new Sound(soundUrl, Sound.MAIN_BUNDLE, error => {
        if (error) {
          // do something
          console.log(error);
        }

        // play when loaded
        this.sound.play();
      });
    }
  };

  render() {
    const puppy = this.props.navigation.getParam("puppy") || {};

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Image
          style={{ width: "100%", height: "40%" }}
          source={puppyImages[puppy.name]}
          resizeMode="cover"
        />

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            width: "100%",
            padding: 20
          }}
        >
          <Text>{puppy.description}</Text>

          <View style={{ marginTop: 15 }}>
            <Text
              style={{
                flex: 1,
                marginTop: 10
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Breed:</Text>
              {"   "}
              {puppy.breed}
            </Text>
            <View
              style={{
                width: "90%",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                padding: 5
              }}
            />

            <Text
              style={{
                flex: 1,
                marginTop: 10
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Age:</Text>
              {"   "}
              {puppy.age}
            </Text>
            <View
              style={{
                width: "90%",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                padding: 5
              }}
            />

            <Text
              style={{
                flex: 1,
                marginTop: 10
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Gender:</Text>
              {"   "}
              {puppy.gender}
            </Text>
            <View
              style={{
                width: "90%",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                padding: 5
              }}
            />

            <Text
              style={{
                flex: 1,
                marginTop: 10
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Color:</Text>
              {"   "}
              {puppy.color}
            </Text>
            <View
              style={{
                width: "90%",
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                padding: 5
              }}
            />
          </View>
          <TouchableHighlight
            style={{
              alignItems: "center",
              width: "70%",
              padding: 15,
              borderColor: "black",
              backgroundColor: "#62AB42",
              borderWidth: 1,
              borderRadius: 45,
              alignSelf: "center",
              marginTop: 20
            }}
            onPress={() => {
              this.playSound(puppy.sound || "");
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
              Woof!
            </Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    );
  }
}
