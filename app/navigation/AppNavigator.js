import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Account, Favorite, Landing, Notification, Upload} from '../screens/App';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LandingNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Landing" component={Landing} />
  </Stack.Navigator>
);

const NotificationNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Notification" component={Notification} />
  </Stack.Navigator>
);

const UploadNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Upload" component={Upload} />
  </Stack.Navigator>
);

const FavoriteNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Favorite" component={Favorite} />
  </Stack.Navigator>
);

const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Account" component={Account} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6324cc',
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="홈"
        component={LandingNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => <Icon name={focused ? 'home' : 'home-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="알림"
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => <Icon name={focused ? 'bell' : 'bell-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="등록"
        component={UploadNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => <Icon name={focused ? 'plus-box' : 'plus-box-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="북마크"
        component={FavoriteNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => <Icon name={focused ? 'star' : 'star-outline'} color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="설정"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => <Icon name={focused ? 'account' : 'account-outline'} color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
