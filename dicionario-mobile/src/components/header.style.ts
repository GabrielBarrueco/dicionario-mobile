import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-Direction: row;
  align-Content: center;
  justify-Content: space-between;
  gap: 4px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const MenuButton = styled.TouchableOpacity`
  flex: 1px;
  height: 48px;
  border-Radius: 8px;
  border-Color: "#DDD";
  border: 0.5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: "#000";
  font-Family: "Arial";
  font-Size: 16;
  font-Style: "normal";
  font-Weight: 600;
  line-Height: 32;
  border-Color: "#000";
  letter-Spacing: -0.5;
`;
