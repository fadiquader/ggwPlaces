import * as React from 'react';
import PropTypes from 'prop-types';
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
        const uri = 'data:image/jpeg;base64,' + response.data;
        const source = { uri };

        this.setState({
          image: source,
        });
        this.props.handlePickImage(uri)
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

PickImage.propTypes = {
  handlePickImage: PropTypes.func.isRequired,
}

export default PickImage;
