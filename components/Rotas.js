import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './home';
import MinhasViagens from './MinhasViagens';
import Viagens from './viagens';

const tab = createBottomTabNavigator();

const Rotas = () => {
    return (
        <tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#b94646',
            }}
        >

            <tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <tab.Screen
                name="MinhasViagens"
                component={MinhasViagens}
                options={{
                    tabBarLabel: 'Minhas Viagens',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="map" color={color} size={size} />
                    ),
                }}
            />

            <tab.Screen
                name="Viagens"
                component={Viagens}
                options={{
                    tabBarLabel: 'Viagens',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="earth" color={color} size={size} />
                    ),
                }}
            />
        </tab.Navigator>
    )
}
export default Rotas;