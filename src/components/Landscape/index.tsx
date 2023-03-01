import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import Draggable from "react-native-draggable";

export function Landscape({ sol, handle, handleStop }) {
  return (
    <>
      <Draggable renderSize={80} x={125} y={0} onLongPress={handle}>
        {sol ? (
          <Animatable.Image
            animation={{
              from: { translateY: 100 },
              to: { translateY: 450 },
            }}
            duration={15000}
            iterationCount={"infinite"}
            direction={"alternate"}
            style={{ width: 150, height: 150, tintColor: "#0367A6" }}
            source={require(`../../../assets/Lua.png`)}
          />
        ) : (
          <Animatable.Image
            animation={{
              from: { translateY: 100 },
              to: { translateY: 450 },
            }}
            duration={15000}
            iterationCount={"infinite"}
            direction={"alternate"}
            style={{ width: 150, height: 150 }}
            source={require(`../../../assets/Sol.png`)}
          />
        )}
      </Draggable>
      <View style={{ top: -200 }}>
        <Draggable renderSize={80} x={-160} y={-70} onPressIn={handleStop}>
          <Animatable.Image
            animation={{
              from: { translateX: 0 },
              to: { translateX: -100 },
            }}
            duration={15000}
            iterationCount={"infinite"}
            direction={"alternate"}
            style={{ width: 120, height: 55, opacity: 50 }}
            source={require("../../../assets/Nuvem.png")}
          />
        </Draggable>

        <Draggable renderSize={80} x={0} y={0}>
          <Animatable.Image
            animation={{
              from: { translateX: -10 },
              to: { translateX: 150 },
            }}
            duration={20000}
            iterationCount={"infinite"}
            direction={"alternate"}
            style={{ width: 120, height: 55 }}
            source={require("../../../assets/Nuvem.png")}
          />
        </Draggable>
        <Draggable renderSize={80} x={0} y={100}>
          <Animatable.Image
            animation={{
              from: { translateX: -150 },
              to: { translateX: 150 },
            }}
            duration={15000}
            iterationCount={"infinite"}
            direction={"alternate"}
            style={{ width: 120, height: 55 }}
            source={require("../../../assets/Nuvem.png")}
          />
        </Draggable>
      </View>
    </>
  );
}
