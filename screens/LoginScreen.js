import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'LoginScreen',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      errorpassword: '',
    };
  }

  onValidPassword = string => {
    if (string.lenght > 8 && string.lenght < 20) {
      return true;
    }
    return false;
  };

  onChangeUser = text => {
    this.setState({
      username: text,
    });
  };
  onChangePassword = password => {
    this.setState({
      password: password,
    });
    if (this.onValidPassword(this.state.password)) {
      this.setState({errorpassword: ''});
    } else {
      this.setState({errorpassword: 'Check the password'});
    }
  };

  onSubmit = () => {
    if (this.state.errorpassword.lenght === 0) {
      this.setState({error: ''});
      this.props.navigation.navigate('Home', {
        username: this.state.username,
        password: this.state.password,
      });
    } else {
      {
        this.setState({error: 'Check the information'});
      }
    }
  };
  render() {
    const {error} = this.state;
    const {errorpassword} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login React-Native</Text>
        <TextInput
          style={{padding: 10}}
          placeholder="Username"
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          style={styles.txtInput}
          onChangeText={this.onChangeUser}
        />
        <TextInput
          placeholder="Password"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          style={styles.txtInput}
          secureTextEntry={true}
          onChangeText={this.onChangePassword}
        />
        {errorpassword ? (
          <Text style={{color: 'red', fontSize: 10}}>{errorpassword}</Text>
        ) : null}
        <TouchableOpacity style={styles.btnSubmit}>
          <Text onPress={this.onSubmit} style={styles.txtSubmit}>
            Submit
          </Text>
        </TouchableOpacity>
        {error ? (
          <Text style={{color: 'red', fontSize: 10}}>{error}</Text>
        ) : null}
        <View style={styles.viewSignUp}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style={styles.txtSignUp}> Sign Up </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.txtForget}> Forget Password </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSignUp}>
          <TouchableOpacity style={styles.btnGoogle}>
            <Text style={styles.txtGoogle}>Google+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnFacebook}>
            <Text style={styles.txtFacebook}>Facebook</Text>
          </TouchableOpacity>
        </View>
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
  title: {
    fontSize: 30,
    color: 'blue',
  },
  txtInput: {
    backgroundColor: 'rgba(0,0,0, 0.1)',
    width: '80%',
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
  viewSignUp: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSignUp: {
    color: 'red',
    paddingTop: 20,
    textDecorationLine: 'underline',
  },
  txtForget: {
    color: 'red',
    paddingTop: 20,
    textDecorationLine: 'underline',
    justifyContent: 'center',
  },
  btnGoogle: {
    width: 100,
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  txtGoogle: {
    color: 'darkblue',
    textAlign: 'center',
  },
  btnFacebook: {
    width: 100,
    backgroundColor: 'rgba(0,145,234,1)',
    padding: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  txtFacebook: {
    color: 'blanchedalmond',
    textAlign: 'center',
  },
});
