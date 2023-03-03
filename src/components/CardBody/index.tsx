import { Text, View } from "react-native";

export function CardBody({ frase, autor, textColor }) {
  return (
    <View style={{ marginVertical: 20 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: 10,
          color: `${textColor}`,
        }}
      >
        {frase}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          color: `${textColor}`,
        }}
      >
        {autor}
      </Text>
    </View>
  );
}
