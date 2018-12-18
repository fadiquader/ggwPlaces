import * as React from 'react';
import { View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
//
import styles from './styles';

class PickLocation extends React.Component {
  mapRef = React.createRef();
  state = {
    focusedLocation: {
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      latitude: 37.78825,
      longitude: -122.4324,
    }
  };
  handleMapPress = event => {
    // console.log(this.mapRef)
    const coords = event.nativeEvent.coordinate;
    if(coords) {
      this.mapRef.current.animateToRegion({
        ...this.state.focusedLocation,
        ...coords,
      });
      this.setState(prev => ({
        focusedLocation: {
          ...prev.focusedLocation,
          ...coords,
        }
      }));
      this.props.handlePickLocation(coords)
    }
  };

  pickMyLocation = () => {
    navigator.geolocation.getCurrentPosition(pos => {
      console.log(pos)
      const { latitude, longitude } = pos.coords;
      const event = {
        nativeEvent: {
          coordinate: {
            latitude,
            longitude
          }
        }
      };
      this.handleMapPress(event)
    }, err => {

    })
  }
  render() {
    return (
      <>
        <View style={styles.mapContainer}>
          <MapView
            ref={this.mapRef}
            style={styles.map}
            initialRegion={this.state.focusedLocation}
            // region={this.state.focusedLocation}
            onPress={this.handleMapPress}>
            <Marker coordinate={this.state.focusedLocation} />
          </MapView>
        </View>
        <Button title="Pick My Location" onPress={this.pickMyLocation} />
      </>
    )
  }
}

export default PickLocation;
