
import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
//
import AppContainer from './src/navigator';
import { setupAxios } from './src/config/axios.config';

setupAxios();

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
