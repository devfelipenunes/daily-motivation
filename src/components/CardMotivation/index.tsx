import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
  frase: string;
  autor: string;
}

export function CardMotivation({ frase, autor }: Props) {
  return (
    <View
      style={{
        margin: 10,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 10 }}>{frase}</Text>
      <Text>{autor}</Text>
    </View>
  );
}
