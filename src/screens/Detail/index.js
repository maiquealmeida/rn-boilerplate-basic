import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Detail extends Component {
  handlePress = () => this.props.navigation.navigate('Detail');

  Render() {
    return (
      <View style={styles.container}>
        <Icon name="thumbs-o-up" size={30} color="#005500" />
        <Text>Welcome to Detail.</Text>
        <TouchableOpacity onPress={() => this.handlePress}>
          <Text>View Detail</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
