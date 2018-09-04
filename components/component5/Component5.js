import React, { Component } from "react";
import { View, Text, ListView, StyleSheet } from "react-native";

class Component5 extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      userDataSource: ds
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(response => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(response)
        });
      });
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
        <Text>Component 5</Text>
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

export default Component5;
