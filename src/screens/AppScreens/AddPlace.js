import * as React from 'react';
import { View, ScrollView, Button } from 'react-native';
//
import Input from '../../components/Input';
import PickImage from '../../components/PickImage';
import PickLocation from '../../components/PickLocation';

class AddPlace extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Add Place'
  });
  state = {
    name: '',
    location: null,
    picture: null
  };

  addPlace = () => {
    console.log(this.state)
  }
  render() {
    return (
      <ScrollView>
        <Input
          placeholder="Place Name"
          onChangeText={txt => this.setState({ name: txt })}
        />
        <PickImage
          handlePickImage={image => this.setState({ picture: image })}
        />
        <PickLocation
          handlePickLocation={location => this.setState({location})}
        />
        <Button title="Add" onPress={this.addPlace} />
      </ScrollView>
    )
  }
}

export default AddPlace;
