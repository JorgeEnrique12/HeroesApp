// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HomeScreen} from '../screens/home';
import {HeroesScreen} from '../screens/heroes/components';
import {HeroDetailsScreen} from '../screens/heroes/components/heroes-detail';

Icon.loadFont();
const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Heroes"
          component={HeroesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HeroesDetail"
          component={HeroDetailsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
