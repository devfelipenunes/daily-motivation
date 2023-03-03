import * as Animatable from "react-native-animatable";
import Draggable from "react-native-draggable";

export function Cloud() {
  const duration = 10000;

  return (
    <>
      <Draggable renderSize={80} x={0} y={0}>
        <Animatable.Image
          animation={{
            from: { translateX: 10 },
            to: { translateX: -10 },
          }}
          duration={duration}
          iterationCount={"infinite"}
          direction={"alternate"}
          style={{ width: 120, height: 55, opacity: 50 }}
          source={require("../../../assets/Nuvem.png")}
        />
      </Draggable>
      <Draggable renderSize={80} x={50} y={20}>
        <Animatable.Image
          animation={{
            from: { translateX: 0 },
            to: { translateX: -20 },
          }}
          duration={duration}
          iterationCount={"infinite"}
          direction={"alternate"}
          style={{ width: 120, height: 55, opacity: 50 }}
          source={require("../../../assets/Nuvem.png")}
        />
      </Draggable>
      <Draggable renderSize={80} x={100} y={-10}>
        <Animatable.Image
          animation={{
            from: { translateX: 0 },
            to: { translateX: -20 },
          }}
          duration={duration}
          iterationCount={"infinite"}
          direction={"alternate"}
          style={{ width: 120, height: 55, opacity: 50 }}
          source={require("../../../assets/Nuvem.png")}
        />
      </Draggable>
      <Draggable renderSize={80} x={50} y={-20}>
        <Animatable.Image
          animation={{
            from: { translateX: 0 },
            to: { translateX: -40 },
          }}
          duration={duration}
          iterationCount={"infinite"}
          direction={"alternate"}
          style={{ width: 120, height: 55, opacity: 50 }}
          source={require("../../../assets/Nuvem.png")}
        />
      </Draggable>
    </>
  );
}
