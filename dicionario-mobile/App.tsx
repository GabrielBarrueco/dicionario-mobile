import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './src/routes/routes';

const Stack = createNativeStackNavigator();

export default function Page() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user)
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen component={HomeStack} name="HomeStack"  options={{ headerShown: false }}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
