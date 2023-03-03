import React from "react";
import Draggable from "react-native-draggable";
import { ICardEdit } from "../../Interfaces/IEdit";
import { ImageBackground, Text, View } from "react-native";

export function CardEdit({ frase, autor, image, imageRef }: ICardEdit) {
  return (
    <View collapsable={false}>
      <ImageBackground
        ref={imageRef}
        source={{ uri: image }}
        style={{
          width: 350,
          height: 350,
          borderRadius: 25,
          backgroundColor: "#fff1ff",
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
                fontSize: 20,
                marginBottom: 10,
                width: 300,
              }}
            >
              {frase}
            </Text>
            <Text style={{ color: "#FD9B52" }}>{autor}</Text>
          </Draggable>
        </View>
      </ImageBackground>
    </View>
  );
}
