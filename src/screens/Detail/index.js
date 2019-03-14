import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Detail extends Component {
  handlePress = () => this.props.navigation.navigate('Main');

  render() {
    return (
      <View style={styles.container}>
        <Icon name="thumbs-o-up" size={30} color="#005500" />
        <Text>Welcome to Detail.</Text>
        <TouchableOpacity onPress={this.handlePress}>
          <Text>Back to Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
