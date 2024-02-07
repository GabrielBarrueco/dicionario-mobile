import { Text, Image, TouchableOpacity, Dimensions, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, ImageContainer, TextContainer, TitleText } from "./word-card.style";
import { ButtonText, HeaderContainer, MenuButton } from "./header.style";

interface IHeaderProps {

}

const Header = () => {
  const navigation = useNavigation();

  return (
    <>
      <HeaderContainer testID="headerContainer">
        <MenuButton testID='menuButton'>
          <ButtonText testID='buttonText'>Word List</ButtonText>
        </MenuButton>
        <MenuButton testID='menuButton'>
          <ButtonText testID='buttonText'>History</ButtonText>
        </MenuButton>
        <MenuButton testID='menuButton'>
          <ButtonText testID='buttonText'>Favorites</ButtonText>
        </MenuButton>
      </HeaderContainer>
    </>
  )
}

export default Header;