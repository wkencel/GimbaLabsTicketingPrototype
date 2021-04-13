import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export function IdeasScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
      title="Add idea"
      />
      <Text>if add an idea, show field for next idea, and so on</Text>
      <Text>populates an array of ideas for users</Text>
      <Button
        title="Go back to home"
        onPress={() => navigation.popToTop()}
      />
      </View>
  );
}