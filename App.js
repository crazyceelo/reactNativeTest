import React from "react";
import { StyleSheet, Text, View } from "react-native";

// components
import Hello from "./components/Hello";
import Component2 from "./components/component2/Component2";
import Component3 from "./components/component3/Component3";
import Component4 from "./components/component4/Component4";
import Component5 from "./components/component5/Component5";

export default class App extends React.Component {
  render() {
    return (
      <View>
        {/* <Hello /> */}
        {/* <Component2 /> */}
        {/* <Component3 /> */}
        <Component4 />
        {/* <Component5 /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
