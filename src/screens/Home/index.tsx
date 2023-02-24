import { Button, FlatList, Text, View } from "react-native";
import { CardMotivation } from "../../components/CardMotivation";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

const dados = require("../../services/frases.json");

const apiKey = "9vRWc7PhTkbaikYWUjEdKl6M3LnZUUw6ZuwRxW4aWRkGLFMV9DpDgKfW";
const query = "pássaros"; // o termo que você quer buscar

export function Home() {
  async function getImage() {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=10`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    const data = await response.json();
    console.log(data.photos.photographer_url);
  }

  function getRandomObjectOfTheDay(myObjects) {
    const today = new Date();
    const index = today.getDate() % myObjects.length;
    const objectOfTheDay = myObjects[index];

    return objectOfTheDay;
  }
  const dado = getRandomObjectOfTheDay(dados);

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Frase do dia!",
        body: `${dado.frase}\n \nAutor: ${dado.autor}`,
        data: { data: "goes here" },
      },
      trigger: {
        hour: 7,
        minute: 0,
        repeats: true,
      },
    });
  }

  useEffect(() => {
    schedulePushNotification();
    getImage();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <CardMotivation frase={dado.frase} autor={dado.autor} />
    </View>
  );
}
