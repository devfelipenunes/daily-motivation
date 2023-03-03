import { View } from "react-native";
import * as Animatable from "react-native-animatable";
import Draggable from "react-native-draggable";
import { ILandscape } from "../../Interfaces/IHome";
import { Cloud } from "../Cloud";

export function Landscape({ sol, handle }: ILandscape) {
  return (
    <>
      <Draggable renderSize={80} x={125} y={0} onPressIn={handle}>
        {sol ? (
          <Animatable.Image
            animation={{
              from: { translateY: 100 },
              to: { translateY: 300 },
            }}
            duration={70000}
            iterationCount={"infinite"}
            direction={"alternate"}
            style={{ width: 150, height: 150, tintColor: "white" }}
            source={require(`../../../assets/Lua.png`)}
          />
        ) : (
          <Animatable.Image
            animation={{
              from: { translateY: 100 },
              to: { translateY: 300 },
            }}
            duration={70000}
            iterationCount={"infinite"}
            direction={"alternate"}
            style={{ width: 150, height: 150 }}
            source={require(`../../../assets/Sol.png`)}
          />
        )}
      </Draggable>

      <Animatable.View
        animation={{
          from: { translateX: 50 },
          to: { translateX: -100 },
        }}
        duration={100000}
        iterationCount={"infinite"}
        direction={"alternate"}
        style={{ top: -200 }}
      >
        <Cloud />
      </Animatable.View>
      <Animatable.View
        animation={{
          from: { translateX: -200 },
          to: { translateX: -50 },
        }}
        duration={100000}
        iterationCount={"infinite"}
        direction={"alternate"}
        style={{ top: -50 }}
      >
        <Cloud />
      </Animatable.View>
    </>
  );
}
