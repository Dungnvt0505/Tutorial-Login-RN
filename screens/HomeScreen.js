import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'HomeScreen',
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text style={styles.showUser}>
          User Name: {this.props.navigation.getParam('username', '')}
        </Text>
        <Text style={styles.showUser}>
          Password: {this.props.navigation.getParam('password', '')}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  showUser: {
    padding: 10,
    color: 'blue',
  },
});
