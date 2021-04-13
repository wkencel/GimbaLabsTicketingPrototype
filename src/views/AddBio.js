import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function BioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bio Screen</Text>
      <Button
        title="Bio"
        // onPress={() => navigation.navigate('Home')} // currently points back to homescreen
      />
      <Button
        title="Go back to home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}