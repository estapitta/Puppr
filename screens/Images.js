import React, { Component } from "react";
import { AppRegistry, Image } from "react-native";

export default class Dogs extends Component {
  render() {
    let pic = {
      uri:
        "https://vetstreet.brightspotcdn.com/dims4/default/078bc19/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F61%2F25%2F68c83fd8410b942e2fce47b982c9%2Fbeagle-ap-0ssneg-645lc101514.jpg"
    };
    return <Image source="pic" style={{ width: 193, height: 110 }} />;
  }
}
