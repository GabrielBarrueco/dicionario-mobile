import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';

export type StackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function HomeStack() {

  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}