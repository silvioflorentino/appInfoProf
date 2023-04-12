import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import JuniorTi from './JuniorTi';
import PlenoTi from './PlenoTi';
import SeniorTi from './SeniorTi';

const Tab = createBottomTabNavigator();

export default function Rotasnavbar() {
  return (
    <Tab.Navigator initialRouteName="PlenoTi" screenOptions={{headerShown:false}}  >
      <Tab.Screen
        name="Junior"
        component={JuniorTi}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-graduate" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Pleno"
        component={PlenoTi}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-tie" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Senior"
        component={SeniorTi}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-ninja" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
