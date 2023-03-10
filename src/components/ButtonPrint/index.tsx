import { Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import { IButtonPrint } from "../../Interfaces/IHome";

export function ButtonPrint({ handlePrint, iconColor }: IButtonPrint) {
  return (
    <View>
      <TouchableOpacity
        style={{
          top: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={handlePrint}
      >
        <Animatable.View
          animation="pulse"
          iterationCount="infinite"
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: iconColor, fontSize: 20, marginRight: 10 }}>
            Guarde o que mentalizou
          </Text>
          <Feather name="camera" size={24} color={iconColor} />
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
}
