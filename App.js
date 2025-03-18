import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MinhasViagens from './components/MinhasViagens'
import Viagens from './components/viagens.js'
import Home from './components/home';

const route = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <route.Navigator initialRouteName="Home">
        <route.Screen name="Home" component={Home} />
        <route.Screen name="MinhasViagens" component={MinhasViagens} />
        <route.Screen name="Viagens" component={Viagens} />
      </route.Navigator>
    </NavigationContainer>
  );
}
