import { ActivityIndicator, KeyboardAvoidingView, Alert, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../routes/routes"
import { ButtonText, Container, Input, SignUpButton, SubtitleText, TitleText } from "./login.style";

export type StackNavigation = NativeStackNavigationProp<StackParamList>;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation<StackNavigation>();

  const handleCardTap = () => {
    navigation.navigate("Home");
  }

  const logIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Logged In!');
      handleCardTap();
    } catch (error: any) {
      Alert.alert('Login failed:' + error.message);
      return;
    } finally {
      setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("[SignUp SUCESS]:", response);
      Alert.alert('Check your email');
    } catch (error: any) {
      console.log("[SignUp ERROR]:", error);
      Alert.alert('sign Up failed:' + error.message);
      return;
    } finally {
      setLoading(false);
    }
  }

  return (
    
    <Container>
      <SafeAreaView>
        <KeyboardAvoidingView behavior="padding">
          <TitleText>Login</TitleText>
          <SubtitleText>Or create your account</SubtitleText>
          <Input
            value={email}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            value={password}
            placeholder="Password"
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          {loading ?
            <ActivityIndicator size="large" color="#0000FF" style={{marginTop: 16}}/>
            : <>
              <SignUpButton testID="loginButton" onPress={logIn}>
                <ButtonText testID="loginTextButton">Login</ButtonText>
              </SignUpButton>
              <SignUpButton testID="signInButton" onPress={signUp}>
                <ButtonText testID="signInTextButton" >Create account</ButtonText>
              </SignUpButton>
            </>
          }
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Container>
    
  )
}

export default Login
