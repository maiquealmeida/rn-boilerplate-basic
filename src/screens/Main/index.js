import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export default class Main extends Component {
  handlePress = () => this.props.navigation.navigate("Detail");

  render() {
    return (
      <View style={styles.container}>
        <Icon name="rocket" size={30} color="#336699" />
        <Text>Welcome to Main.</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>View Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
