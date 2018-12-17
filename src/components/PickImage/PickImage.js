import * as React from 'react';
import { View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

//
import styles from './styles';

class PickImage extends React.Component {
  state = {
    image: { uri: null }
  };

  handleImagePicker = () => {
    ImagePicker.showImagePicker({}, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {

        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        // const source = { uri: response.uri };

        // You can also display the image using data:
        const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          image: source,
        });
      }
    });
  }
  render() {
    return (
      <View>
        <Image
          style={styles.image}
          source={this.state.image}
        />
        <Button title="Pick Image" onPress={this.handleImagePicker} />
      </View>
    )
  }
}

export default PickImage;
