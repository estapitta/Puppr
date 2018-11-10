import React from "react";

import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import puppyImages from "../resources/puppyImages";
import Sound from "react-native-sound";
import { selectFavorite, removePuppy } from "../resources/store/favorite";
import { connect } from "react-redux";

class PuppyPage extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const puppy = navigation.getParam("puppy", {});
    const isFavorite = navigation.getParam("isFavorite", false);
    const tintColor = isFavorite ? "#e91e63" : "#000000";
    const toggleFavorite = navigation.getParam("toggleFavorite", () => {});
    return {
      title: puppy.name,
      headerStyle: {
        backgroundColor: "#c5e8d6"
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontSize: 30,
        paddingTop: 13,
        fontFamily: "Academy Engraved LET"
      },
      headerBackTitle: null,
      headerRight: (
        <TouchableOpacity onPress={toggleFavorite}>
          <Image
            source={require("../resources/favorite.png")}
            style={{ width: 30, height: 30, tintColor, marginRight: 20 }}
          />
        </TouchableOpacity>
      )
    };
  };

  componentDidUpdate(prevProps) {
    if (this.props.isFavorite !== prevProps.isFavorite) {
      //this.props.isFavorite should be checked by looking into the store state for the puppys id
      this.props.navigation.setParams({ isFavorite: this.props.isFavorite });
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      toggleFavorite: this.toggleFavorite,
      isFavorite: this.props.isFavorite
    });
  }

  toggleFavorite = () => {
    //If puppy is favorite, dispatch to store to remove it,
    const puppy = this.props.navigation.getParam("puppy", {});

    if (this.props.isFavorite) {
      this.props.removeFavorite(puppy.id);
    } else {
      this.props.addFavorite(puppy.id);
    }
    //If its not favorite, dispatch to add it as favorite
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
    const puppy = this.props.navigation.getParam("puppy", {});

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
          <TouchableOpacity
            style={{
              alignItems: "center",
              width: "100%",
              padding: 15,
              borderColor: "black",
              backgroundColor: "#62AB42",
              borderWidth: 1,
              borderRadius: 45,
              alignSelf: "center",
              marginTop: 20
            }}
            onPress={() => {
              this.props.navigation.navigate("FormView", {
                puppyName: puppy.name
              });
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
              Ask About Me!
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <TouchableOpacity
          style={{
            alignItems: "center",
            padding: 10,
            borderColor: "black",
            backgroundColor: "#e91e63",
            position: "absolute",
            top: 10,
            right: 10
          }}
          onPress={() => {
            this.playSound(puppy.sound || "");
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: 14,
              flex: 1
            }}
          >
            Woof!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  const puppy = props.navigation.getParam("puppy", {});
  return {
    isFavorite: state.indexOf(puppy.id) !== -1
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: puppyId => dispatch(selectFavorite(puppyId)),
    removeFavorite: puppyId => dispatch(removePuppy(puppyId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuppyPage);
