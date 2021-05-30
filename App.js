import React from "react";
import Providers from "./navigation";
/*import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import MyTasksScreen from './screens/MyTasksScreen';
import CalendarScreen from './screens/CalendarScreen';
import SettingsScreen from './screens/SettingsScreen';
import ThisWeekScreen from './screens/ThisWeekScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#468189",
        inactiveTintColor: "#F4E9CD",
        activeBackgroundColor: "#F4E9CD",
        inactiveBackgroundColor: "#468189",
      }}
    >
      <Tab.Screen
        name="My Tasks"
        component={MyTasksScreen}
        options={{
          title: "My Tasks",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="playlist-add-check"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="This Week"
        component={ThisWeekScreen}
        options={{
          title: "This Week",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="calendar-today" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function getTopColor(token) {
  if (token == null) {
    return "#031926";
  } else {
    return "#031926";
  }
}

function getBottomColor(token) {
  if (token == null) {
    return "white";
  } else {
    return "#468189";
  }
}

function App() {
  // const token = state.userToken;
  // check if user is signed in with helper function and assign value to token
  const token = "notNull";

  function getHeaderTitle(route) {
    // In case the focused route is not found, assume it's the first screen, Screen1 in this example.
    if (getFocusedRouteNameFromRoute(route)) {
      return getFocusedRouteNameFromRoute(route);
    }
    return "My Tasks";
  }
  */
/*   function LogoTitle(name) {
    return (
      <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>headerTitle</Text>
      </View>
      <Image source={require('./assets/housemate-logo-beige.png')} style={styles.logo}/>
    </View> */
/*       <Text style={styles.headerText}>My Tasks</Text>
      <Image
        style={{
          width: 48,
          height: 50,
          position: 'absolute',
          right: 16,
          top: 20
        }}
        source={require('./assets/housemate-logo-beige.png')}
      /> */
/*     );
  } */

// const token = state.userToken;
// check if user is signed in with helper function and assign value to token
/* const token = 'null';

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView
        style={[
          styles.bottomSafeArea,
          { backgroundColor: getBottomColor(token) },
        ]}
      >
        <NavigationContainer>
          <Stack.Navigator>
            {token == null ? (
              <>
                <Stack.Screen
                  name="Sign In"
                  component={SignInScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Sign Up"
                  component={SignUpScreen}
                  options={{ headerShown: false }}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="My Tasks"
                  component={Tabs}
                  options={({ route }) => ({
                    headerTitle: getHeaderTitle(route),
                    headerTintColor: "white",
                    headerTitleStyle: {
                      alignItems: "center",
                      fontFamily: "Helvetica",
                      fontWeight: "bold",
                      fontSize: 30,
                      color: "#F4E9CD",
                      letterSpacing: 1,
                      marginTop: 10,
                    },
                    //headerTitle: name => <LogoTitle {...Stack.Screen.name} />,
                    headerStyle: { height: 70, backgroundColor: "#031926" },
                  })}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
}
export default App;

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: "#031926",
  },
  bottomSafeArea: {
    flex: 1,
  },
  logo: {
    width: 48,
    height: 50,
    position: 'absolute',
    marginRight: 10,
    top: 20,
  }
})*/

export default function App() {
  return <Providers />;
}
