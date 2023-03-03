import Toast from "react-native-toast-message";
import * as Clipboard from "expo-clipboard";

import * as Device from "expo-device";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ICopyToClipboard {
  frase: string;
  autor: string;
}

export async function copyToClipboard({ frase, autor }: ICopyToClipboard) {
  await Clipboard.setStringAsync(`${frase} - ${autor}`);
  Toast.show({
    type: "success",
    text1: "Texto copiado para a área de transferência",
  });
}

export function getRandomObjectOfTheDay(myObjects) {
  const today = new Date();
  const index = today.getDate() % myObjects.length;
  const objectOfTheDay = myObjects[index];

  return objectOfTheDay;
}

export async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    setToken(token);
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }
  return token;
}
