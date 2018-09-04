import React, { Component } from "react";
import { Text, View, TextInput, Switch } from "react-native";

class Component3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "hello",
      switchValue: false
    };
  }

  onChangeText(value) {
    this.setState({
      textValue: value
    });
  }

  onSubmit() {
    console.log("Input submitted");
  }

  onSwitchChange(value) {
    this.setState({
      switchValue: value
    });
  }

  render() {
    return (
      <View>
        <Text>Component 3</Text>
        <TextInput
          placeholder="Enter text"
          value={this.state.textValue}
          onChangeText={value => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
        />
        <Text>{this.state.textValue}</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={value => this.onSwitchChange(value)}
        />
      </View>
    );
  }
}

export default Component3;
