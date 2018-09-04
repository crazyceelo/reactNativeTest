import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Brad",
      showName: true,
      message: this.props.message
    };
  }

  static defaultProps = {
    message: "default prop example"
  };

  render() {
    let name = this.state.showName ? this.state.name : "no name";

    return (
      <View>
        <Text style={styles.hello}>{this.state.message}</Text>
        <Text>{name}</Text>
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
