import { GestureResponderEvent } from "react-native";

export interface ICardMotivation {
  frase: string;
  autor: string;
  handleEdit: (event: GestureResponderEvent) => void;
  copyToClipboard: (event: GestureResponderEvent) => void;
  iconColor: string;
  textColor: string;
  cardColor: string;
}

export interface IButtonPrint {
  handlePrint: (event: GestureResponderEvent) => void;
  iconColor: string;
}

export interface ILandscape {
  sol: boolean;
  handle: (event: GestureResponderEvent) => void;
}

export interface ICardBody {
  frase: string;
  autor: string;
}
