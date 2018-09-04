import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

export default class Component2 extends Component {
  onPress() {
    console.log("area pressed");
  }

  onPress2() {
    console.log("area 2 pressed");
  }

  render() {
    return (
      <View>
        {/* <View style={styles.myView}>
          <Text style={styles.myText}>component 2</Text>
        </View> */}
        <View style={styles.container}>
          <TouchableHighlight
            onPress={this.onPress.bind(this)}
            style={styles.v1}
            underlayColor="blue"
          >
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity
            style={styles.v2}
            onPress={this.onPress2.bind(this)}
          >
            <View>
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text style={styles.v3Text}>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: "blue"
  },
  myText: {
    color: "white"
  },
  container: {
    flexDirection: "row",
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: "red",
    padding: 10,
    marginTop: 24
  },
  v2: {
    flex: 1,
    backgroundColor: "green",
    padding: 10,
    marginTop: 24
  },
  v3: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    marginTop: 24
  },
  v3Text: {
    color: "white"
  }
});
