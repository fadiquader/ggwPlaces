import * as React from 'react';
import { StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
//

class Places extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Places',
  });

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.placeItem}>
        <Image source={{uri: item.picture}}/>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <FlatList
        data={[
          {
            _id: '1',
            name: 'sdfsdf',
            picture: ''
          },
          {
            _id: '2',
            name: 'sdfsdf',
            picture: ''
          },
        ]}
        renderItem={this.renderItem}
        keyExtractor={item => item._id}
      />
    )
  }
}

const styles = StyleSheet.create({
  placeItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5'
  }
});

export default Places;
