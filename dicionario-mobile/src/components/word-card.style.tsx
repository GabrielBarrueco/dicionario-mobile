import { styled } from "styled-components";

interface ICardProps {
  width: number;
}

export const Container = styled.View`
  flex: 1px;
  height: 100px;
  margin-Top: 8px;
  margin-Horizontal: 2px;
  width: ${(props: ICardProps) => props.width}px;
  border-Radius: 8px;
  border-Color: "#DDD";
  border: 1px;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const TextContainer = styled.View`
  flex: 1px;
  align-items: center;
  padding: 4px;
  justify-content: center;
`;

export const TitleText = styled.Text`
  color: "#000";
  font-Family: "Arial";
  font-Size: 16;
  font-Style: "normal";
  font-Weight: 600;
  line-Height: 32;
  border-Color: "#000";
  letter-Spacing: -1;
`;

export const SubtitleText = styled.Text` 
  color: "#000";
  font-Family: "Arial";
  font-Size: 12;
  font-Style: "normal";
  font-Weight: 400;
  margin-Top: 20;
  letter-Spacing: -1;
`;

export const ImageContainer = styled.Image`
  width: "100%";
  height: 120;
  border-Top-Left-Radius: 8;
  border-Top-Right-Radius: 8;
`;
