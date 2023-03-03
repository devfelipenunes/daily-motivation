import { ImageBackground } from "react-native";

export interface ICardEdit {
  frase: string;
  autor: string;
  image: string;
  imageRef: React.LegacyRef<ImageBackground>;
}
