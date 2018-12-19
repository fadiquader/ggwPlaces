import * as React from 'react';
import { StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
//
import { NavigationEvents } from 'react-navigation';

import { Place } from '../../services/Place';

class Places extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Places',
  });
  state = {
    locations: [],
    loading: false,
  }
  getPlaces = async () => {
    try {
      this.setState({
        loading: true,
      });
      const res = await Place.fetchAllPlaces();
      console.log(res)
      this.setState({
        locations: res.data.locations,
      })
    } catch (e) {
      alert(e.message)
    }

    this.setState({
      loading: false,
    });
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.placeItem}>
        <Image
          style={styles.placeImage}
          source={{uri: item.picture}}
        />
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  };


  render() {
    return (
    <>
      <NavigationEvents
        onDidFocus={this.getPlaces}
        />
      <FlatList
        data={this.state.locations}
        renderItem={this.renderItem}
        keyExtractor={item => item._id}
        onRefresh={this.getPlaces}
        refreshing={this.state.loading}
      />
    </>
    )
  }
}

const styles = StyleSheet.create({
  placeItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    width: 35,
    height: 35,
    marginRight: 16,
  }
});

export default Places;
