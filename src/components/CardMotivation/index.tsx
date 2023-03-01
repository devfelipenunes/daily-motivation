import React from "react";
import * as Animatable from "react-native-animatable";
import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
//Icon
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Draggable from "react-native-draggable";

interface Props {
  frase: string;
  autor: string;
  navigation: string;
  handleEdit: (event: GestureResponderEvent) => void;
  copyToClipboard: (event: GestureResponderEvent) => void;
  handleToSpin: (event: GestureResponderEvent) => void;
  iconColor: string;
  toSpin: boolean;
}

export function CardMotivation({
  frase,
  autor,
  navigation,
  handleEdit,
  copyToClipboard,
  iconColor,
  toSpin,
  handleToSpin,
}: Props) {
  return (
    <Animatable.View
      animation={toSpin && "flipInY"}
      duration={1000}
      delay={500}
      style={{ paddingHorizontal: 15, top: 150 }}
    >
      <View
        style={{
          width: "100%",
          padding: 20,
          borderRadius: 25,
          backgroundColor: "white",
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>{frase}</Text>
          <Text>{autor}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <AntDesign
            onPress={handleEdit}
            name="picture"
            size={24}
            color={`${iconColor}`}
          />
          <Ionicons
            onPress={copyToClipboard}
            name="copy-outline"
            size={24}
            color={`${iconColor}`}
          />
        </View>
      </View>
    </Animatable.View>
  );
}
