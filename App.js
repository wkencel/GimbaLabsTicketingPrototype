import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { RegisterScreen } from './src/views/Register.js';
// import { BioScreen } from './src/views/AddBio.js.js';
// import { IdeasScreen } from './src/views/AddIdea.js';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Register Id"
        onPress={() => navigation.navigate('Register Id')}
      />
      <Button
        title="Add Bio"
        onPress={() => navigation.navigate('Add Bio')}
      />
      <Button
        title="Add Ideas"
        onPress={() => navigation.navigate('Add Ideas')}
      />
    </View>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Registering Id</Text>
      <Button
      title="Create Id"
      // onPress={() => navigation.navigate('Register Id')} // currently points back to window
    />
    <Button
        title="Go back to home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function BioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bio Screen</Text>
      <Text>
      
        form that takes LINKED REF to AUTH
        
        form fields 
          alias:
          aboutURL: optional,
          imageURL: optional,
          time-block-length (min),
          time-block-cost (ADA)
      
      </Text>
      <Button
        title="Bio"
        // onPress={() => navigation.navigate('Add Bio')} // currently points back to window
      />
      <Button
        title="Go back to home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function IdeasScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
      title="Add idea"
      // onPress={() => navigation.navigate('Add Ideas')} // currently points back to window
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


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register Id" component={RegisterScreen} />
        <Stack.Screen name="Add Bio" component={BioScreen} />
        <Stack.Screen name="Add Ideas" component={IdeasScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;