import { Text, Image, TouchableOpacity, Dimensions, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, TextContainer, TitleText } from "./word-card.style";

interface ICardProps {
  word: string
}

const Card = (props: ICardProps) => {
  const width = (Dimensions.get("screen").width - 32) / 3;
  const navigation = useNavigation();

  const handleCardTap = useCallback(() => {
    //navigation.navigate("Detail", {word: props.word})
  }, [/**navigation, props.word**/])

  return(
    <Container onPress={handleCardTap} width={width}>
      <TextContainer>
        <TitleText>{props.word}</TitleText>
      </TextContainer>
    </Container>
  )
}

export default Card;
