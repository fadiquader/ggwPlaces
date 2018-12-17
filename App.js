
import React, {Component} from 'react';
import { SafeAreaView } from 'react-native';
//
import AppContainer from './src/navigator';

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
