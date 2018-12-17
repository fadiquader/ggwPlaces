import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
//
import Places from '../screens/AppScreens/Places';
import AddPlace from '../screens/AppScreens/AddPlace';
import PlaceDetails from '../screens/AppScreens/PlaceDetails';

const PlacesStack = createStackNavigator({
  Places: Places,
  PlaceDetails,
}, {
  navigationOptions: {
    tabBarLabel: 'Places',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name="ios-map"
        size={22}
        color={focused ? tintColor : null}
      />
    )
  }
});
const AddPlaceStack = createStackNavigator({
  AddPlace
}, {
  navigationOptions: {
    tabBarLabel: 'Add',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name="ios-add"
        size={22}
        color={focused ? tintColor : null}
      />
    )
  }
})
const AppNavigator = createBottomTabNavigator({
  PlacesStack,
  AddPlaceStack
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      // color: '#374dab',
      // fontSize: 15,
    }
  },
});

export default AppNavigator;
