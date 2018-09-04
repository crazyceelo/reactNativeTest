import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Hello extends Component {
  render() {
    console.log("test");
    return (
      <View>
        <Text style={styles.hello}>Hello from Hello.js</Text>
      </View>
    );
  }
}

export default Hello;

const styles = StyleSheet.create({
  hello: {
    color: "#00FF00",
    fontSize: 40,
    backgroundColor: "blue"
  }
});
