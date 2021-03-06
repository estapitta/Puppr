import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Picker,
  Image,
  ImageBackground
} from "react-native";

import puppyImages from "../resources/puppyImages";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor() {
    super();
    this.state = {
      age: "",
      gender: "",
      showAgePicker: false,
      showGenderPicker: false
    };
  }

  renderAgePicker = () => {
    if (this.state.showAgePicker) {
      return (
        <Picker
          style={{
            position: "absolute",
            height: "40%",
            width: "100%",
            bottom: 0,
            backgroundColor: "white"
          }}
          selectedValue={this.state.age}
          onValueChange={newValue => {
            this.setState({
              age: newValue,
              showAgePicker: false
            });
          }}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="2 months" value="2 months" />
          <Picker.Item label="3 months" value="3 months" />
          <Picker.Item label="4 months" value="4 months" />
          <Picker.Item label="5 months" value="5 months" />
          <Picker.Item label="6 months" value="6 months" />
          <Picker.Item label="7 months" value="7 months" />
          <Picker.Item label="8 months" value="8 months" />
          <Picker.Item label="9 months" value="9 months" />

          <Picker.Item label="11 months" value="11 months" />
        </Picker>
      );
    }
  };

  renderGenderPicker = () => {
    if (this.state.showGenderPicker) {
      return (
        <Picker
          style={{
            position: "absolute",
            height: "33%",
            width: "100%",
            bottom: 0,
            backgroundColor: "white"
          }}
          selectedValue={this.state.gender}
          onValueChange={newValue => {
            this.setState({
              gender: newValue,
              showGenderPicker: false
            });
          }}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>
      );
    }
  };
  onPressAge = () => {
    this.setState({
      showAgePicker: true,
      showGenderPicker: false
    });
  };

  onPressGender = () => {
    this.setState({
      showGenderPicker: true,
      showAgePicker: false
    });
  };

  onPressFind = () => {
    this.props.navigation.navigate("PuppyList", {
      age: this.state.age,
      gender: this.state.gender
    });
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ImageBackground
          source={puppyImages["background"]}
          style={{ width: "100%", height: "100%" }}
          imageStyle={{ resizeMode: "cover" }}
        >
          <Text
            style={{
              fontSize: 90,
              fontFamily: "Academy Engraved LET",
              fontWeight: "500",
              alignSelf:"center",
              marginTop: 60
            }}
          >
            Puppr
          </Text>
          <TouchableOpacity
            style={styles.container}
            activeOpacity={1}
            onPress={() => {
              this.setState({
                showAgePicker: false,
                showGenderPicker: false
              });
            }}
          >
            <TouchableOpacity
              onPress={this.onPressAge}
              underlayColor="#d3d3d3"
              style={styles.selectionButton}
            >
              <Text>
                {this.state.age.length === 0 ? "Select Age" : this.state.age}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onPressGender}
              underlayColor="#d3d3d3"
              style={styles.selectionButton}
            >
              <Text>
                {this.state.gender.length === 0
                  ? "Select Gender"
                  : this.state.gender}
              </Text>
            </TouchableOpacity>
            <ImageBackground
              style={{
                marginTop: 40,
                marginBottom: 30,
                width: 200,
                height: 200,
                justifyContent: "flex-end",
                transform: [{ rotate: "15 deg" }]
              }}
              source={require("../resources/pawLight.png")}
            >
              <TouchableOpacity
                onPress={this.onPressFind}
                underlayColor="#d3d3d3"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1
                }}
              >
                <Text
                  style={{
                    marginTop: 100,
                    marginLeft: 5,
                    fontSize: 20,
                    fontWeight: "600"
                  }}
                >
                  Fetch!
                </Text>
              </TouchableOpacity>
            </ImageBackground>
            {this.renderAgePicker()}
            {this.renderGenderPicker()}
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingBottom: 0
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  selectionButton: {
    alignItems: "center",
    width: "70%",
    padding: 10,
    borderColor: "black",
    backgroundColor: "#EEEEEE",
    borderWidth: 1,
    borderRadius: 45,
    marginTop: 20
  }
});
