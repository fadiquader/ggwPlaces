import * as React from 'react';
import { View, Button, StyleSheet, AsyncStorage } from 'react-native';

//
import Input from '../../components/Input';
import { Auth } from "../../services/Auth";

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleLogin = async () => {
    try {
      const res = await Auth.login(this.state);
      await AsyncStorage.setItem('@token', res.data.token);
      this.props.navigation.navigate('App')
    } catch (e) {
      alert(e.message)
    }
    // this.props.navigation.navigate('App')
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Input
            placeholder="E-mail"
            onChangeText={txt => this.setState({ email: txt })}
          />
          <Input
            placeholder="Password"
            onChangeText={txt => this.setState({ password: txt })}
            secureTextEntry
          />
          <Button title="Login" onPress={this.handleLogin} />
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
  }
};

export default Login;
