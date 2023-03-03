import { View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export function ButtonCardMotivation({
  handleEdit,
  copyToClipboard,
  iconColor,
}) {
  return (
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
  );
}
