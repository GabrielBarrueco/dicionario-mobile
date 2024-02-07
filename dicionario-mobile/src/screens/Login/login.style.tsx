import { styled } from 'styled-components/native';

export const Container = styled.View` 
  margin-Horizontal: 20;
  flex: 1;
  justify-Content: center,
`;

export const Input = styled.TextInput`
  height: 53px;
  padding-Vertical: 15px;
  padding-Horizontal: 8px;
  align-Items: center;
  flex-Shrink: 0px;
  border-Radius: 10px;
  background-Color: rgba(0, 0, 0, 0.05);
  margin-Top: 8px;
`;

export const TitleText = styled.Text` 
  color: #000;
  font-Family: "Arial";
  font-Size: 32px;
  font-Style: normal;
  font-Weight: 600;
  line-Height: 49px;
  letter-Spacing: -1.6;
`;

export const SubtitleText = styled.Text`
  color: #000;
  font-Family: "Arial";
  font-Size: 18;
  font-Weight: 400;
  line-Height: 49px;
  letter-Spacing: -1;
`;

export const SignUpButton = styled.TouchableOpacity`
  padding-Horizontal: 18;
  justify-Content: center;
  align-Items: center;
  border-Radius: 10px;
  height: 50px;
  background-Color: #000;
  margin-Top: 12px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-Family: "Arial";
  font-Size: 18;
  font-Style: normal;
  font-Weight: 400;
  line-Height: 49px;
  letter-Spacing: -1;
`;
