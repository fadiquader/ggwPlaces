import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
//
import Input from '../../components/Input';
import PickImage from '../../components/PickImage';

class AddPlace extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Place'
  });
  render() {
    return (
      <View>
        <Input placeholder="Place Name" />
        <PickImage />
      </View>
    )
  }
}

export default AddPlace;
