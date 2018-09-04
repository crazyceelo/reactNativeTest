import React, { Component } from "react";
import { Text, View, ListView, StyleSheet } from "react-native";

// array
const users = [
  { name: "john doe" },
  { name: "janet jackson" },
  { name: "Jack daniels" },
  { name: "beetle juice" },
  { name: "new jack" }
];

class Component4 extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      userDataSource: ds.cloneWithRows(users)
    };
  }

  renderRow(user, sectionId, rowId, highlightRow) {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text>Component 4</Text>
        <ListView
          dataSource={this.state.userDataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#C0C0C0",
    marginBottom: 30
  },
  rowText: {
    flex: 1
  }
});

export default Component4;
