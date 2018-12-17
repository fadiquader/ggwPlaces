import * as React from 'react';
import { View, Text } from 'react-native';
//

class Places extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Places',
  });

  render() {
    return (
      <View>
        <Text>Places</Text>
      </View>
    )
  }
}

export default Places;
