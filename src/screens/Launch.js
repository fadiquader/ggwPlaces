import * as React from 'react';
import { ActivityIndicator, View, StyleSheet, AsyncStorage } from 'react-native';

class Launch extends React.Component {
  componentDidMount() {
    this.checkUserAuth();
  }

  checkUserAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if(!token) throw new Error('Invalid token');
      this.props.navigation.navigate('App')

    } catch (e) {
      this.props.navigation.navigate('Auth')
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Launch;
