import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { View } from "react-native";
//Icon
import { ButtonCardMotivation } from "../ButtonCardMotivation";
import { ICardMotivation } from "../../Interfaces/IHome";
import { CardBody } from "../CardBody";

export function CardMotivation({
  frase,
  autor,
  handleEdit,
  copyToClipboard,
  iconColor,
  textColor,
  cardColor,
}: ICardMotivation) {
  return (
    <Animatable.View
      animation={"flipInY"}
      duration={1000}
      delay={500}
      style={{ paddingHorizontal: 15, top: 150, elevation: 100 }}
    >
      <View
        style={{
          width: "100%",
          padding: 20,
          borderRadius: 25,
          backgroundColor: `${cardColor}`,
          borderWidth: 1,
          borderColor: "rgba(255, 255, 255, 0.5)",
          shadowColor: "black",
        }}
      >
        <CardBody textColor={textColor} frase={frase} autor={autor} />
        <ButtonCardMotivation
          handleEdit={handleEdit}
          copyToClipboard={copyToClipboard}
          iconColor={iconColor}
        />
      </View>
    </Animatable.View>
  );
}
