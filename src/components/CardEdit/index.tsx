import Slider from "@react-native-community/slider";
import React, { useEffect, useRef, useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import Draggable from "react-native-draggable";

import { PinchGestureHandler, State } from "react-native-gesture-handler";

interface Props {
  frase: string;
  autor: string;
  image: string;
}

export function CardEdit({ frase, autor, image }: Props) {
  const imageRef = useRef(null);

  return (
    <View collapsable={false}>
      <ImageBackground
        ref={imageRef}
        source={{ uri: image }}
        style={{
          width: 350,
          height: 350,
          borderRadius: 25,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <Draggable
            renderSize={80}
            minX={-170}
            maxX={170}
            minY={-170}
            maxY={170}
            x={-160}
            y={-70}
          >
            <Text
              style={{
                color: "#FD9B52",
                fontSize: 16,
                marginBottom: 10,
                width: 300,
              }}
            >
              {frase}
            </Text>
            <Text style={{ fontSize: 10, color: "#FD9B52" }}>{autor}</Text>
          </Draggable>
        </View>
      </ImageBackground>
    </View>
  );
}
