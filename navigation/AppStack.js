import  React from 'react';
import MyTasksScreen from '../screens/MyTasksScreen';
import CalendarScreen from '../screens/CalendarScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ThisWeekScreen from '../screens/ThisWeekScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#468189',
        inactiveTintColor: '#F4E9CD',
        activeBackgroundColor: '#F4E9CD',
        inactiveBackgroundColor: '#468189',
      }}>
      <Tab.Screen name="My Tasks" component={MyTasksScreen}
        options={
          { title: "My Tasks",
          tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="playlist-add-check" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="This Week" component={ThisWeekScreen}
        options={
          { title: "This Week",
          tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Calendar" component={CalendarScreen}
        options={
          { tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="calendar-today" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen}
        options={
          { tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function getHeaderTitle(route) {
  // In case the focused route is not found, assume it's the first screen, Screen1 in this example.
  if (getFocusedRouteNameFromRoute(route)) { return getFocusedRouteNameFromRoute(route);}
  return 'My Tasks';
 /*const routeName = getFocusedRouteNameFromRoute(route) ?? 'My Task';
  switch (routeName) {
    case 'My Task':
      return 'My Task';
    case 'This Week':
      return 'This Week';
    case 'Calendar':
      return 'Calendar';
    case 'Settings':
      return 'Settings';
  } */
 //return 'My Tasks';
}
export default function AppStack() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen 
            name='My Tasks' 
            component={Tabs} 
          
            options={
              ({route}) => ({headerTitle: getHeaderTitle(route),
                headerTintColor: 'white',
                headerTitleStyle: {
                  alignItems: 'center',
                  fontFamily: 'Helvetica',
                  fontWeight: 'bold',
                  fontSize: 30,
                  color: '#F4E9CD',
                  letterSpacing: 1,
                  marginTop: 10,
                },
                //headerTitle: name => <LogoTitle {...Stack.Screen.name} />,
                headerStyle: { height: 120, backgroundColor: '#031926'},
  
              })}
            />
    </Stack.Navigator>
  );
}


//export default AppStack;
//<Stack.Screen name="Homes" component={HomeScreen} />