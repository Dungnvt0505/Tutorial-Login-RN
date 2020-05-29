import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class SignUpScreen extends Component {
  static navigationOptions = {
    title: 'SignUpScreen',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      confirmpass: '',
      error: '',
      checkpass: '',
    };
  }

  OnSubmit = () => {
    if (
      this.state.username.length === 0 ||
      this.state.password.length === 0 ||
      this.state.email.length === 0 ||
      this.state.confirmpass.length === 0
    ) {
      this.setState({error: 'Check the information'});
    } else if (this.state.password !== this.state.confirmpass) {
      this.setState({checkpass: 'Confirm Pass'});
    } else {
      this.setState({error: ''});
      this.props.navigation.navigate('Login', {
        username: this.state.username,
        password: this.state.password,
      });
    }
  };
  render() {
    const {navigate} = this.props.navigation;
    const {error} = this.state;
    const {checkpass} = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={{padding: 10}}
          placeholder="Username"
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          style={styles.txtInput}
          onChangeText={username => this.setState({username: username})}
        />
        <TextInput
          placeholder="Password"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.txtInput}
          secureTextEntry={true}
          onChangeText={password => this.setState({password: password})}
        />
        {checkpass ? (
          <Text style={{color: 'red', fontSize: 12}}>{checkpass}</Text>
        ) : null}
        <TextInput
          placeholder="ConfirmPass"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.txtInput}
          secureTextEntry={true}
          onChangeText={confirmpass =>
            this.setState({confirmpass: confirmpass})
          }
        />
        {checkpass ? (
          <Text style={{color: 'red', fontSize: 12}}>{checkpass}</Text>
        ) : null}
        <TextInput
          style={{padding: 10}}
          placeholder="Email"
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          style={styles.txtInput}
          onChangeText={email => this.setState({email: email})}
        />
        {error ? (
          <Text style={{color: 'red', fontSize: 12}}>{error}</Text>
        ) : null}

        <TouchableOpacity style={styles.btnSubmit}>
          <Text onPress={this.OnSubmit} style={styles.txtSubmit}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    color: 'blue',
  },
  txtInput: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    width: '100%',
    height: 40,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 20,
    color: '#000',
    marginTop: 10,
  },
  btnSubmit: {
    width: 100,
    backgroundColor: 'rgba(0,145,234,1)',
    padding: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  txtSubmit: {
    color: '#fff',
    textAlign: 'center',
  },
});
