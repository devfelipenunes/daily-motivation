import {
  GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

interface Props {
  saveImage: (event: GestureResponderEvent) => void;
  pickImage: (event: GestureResponderEvent) => void;
}

export function ButtonEdit({ saveImage, pickImage }: Props) {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={pickImage}
        style={{
          width: 120,
          height: 43,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          borderRadius: 10,
          alignItems: "center",
          backgroundColor: "#FD9B52",
        }}
      >
        <FontAwesome5 name="edit" size={18} color="white" />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Editar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={saveImage}
        style={{
          width: 120,
          height: 43,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          borderRadius: 10,
          alignItems: "center",
          backgroundColor: "#FD9B52",
        }}
      >
        <MaterialIcons name="save-alt" size={24} color="white" />
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
