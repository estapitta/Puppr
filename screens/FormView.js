import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert
} from "react-native";
import puppyImages from "../resources/puppyImages";

class FormView extends React.Component {
  static navigationOptions = {
    title: "Contact Us",
    headerStyle: {
      backgroundColor: "#c5e8d6"
    },
    headerTintColor: "#000",
    headerTitleStyle: {
      fontSize: 30,
      paddingTop: 10,
      fontFamily: "Academy Engraved LET"
    },
    headerBackTitle: null
  };

  render() {
    const puppyName = this.props.navigation.getParam("puppyName", "");

    return (
      <ImageBackground
        source={puppyImages["background"]}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-around",
          paddingHorizontal: 20
        }}
        imageStyle={{ resizeMode: "cover" }}
      >
        <Text style={{ fontSize: 25, fontWeight: "600" }}>
          Send us your name and email and we will contact you with more info
          about {puppyName}!
        </Text>
        <TextInput
          placeholder="Email"
          style={{
            width: "100%",
            height: 45,
            backgroundColor: "white",
            paddingLeft: 10
          }}
        />
        <TextInput
          placeholder="Name"
          style={{
            width: "100%",
            height: 45,
            backgroundColor: "white",
            paddingLeft: 10
          }}
        />
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
            const alertTitle = "Mail sent";
            const alertMessage = `You have made ${puppyName} a very happy puppy! You'll hear back from us soon`;
            Alert.alert(alertTitle, alertMessage, [
              {
                title: "OK",
                onPress: () => {
                  this.props.navigation.goBack();
                }
              }
            ]);
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
            Request Info
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

export default FormView;
