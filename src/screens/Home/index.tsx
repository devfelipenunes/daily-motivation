import { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as Clipboard from "expo-clipboard";
import {
  Button,
  Image,
  ImageBackground,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";
import * as Notifications from "expo-notifications";
import { CardMotivation } from "../../components/CardMotivation";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { Landscape } from "../../components/Landscape";

import ViewShot from "react-native-view-shot";
import Draggable from "react-native-draggable";
import { ButtonPrint } from "../../components/ButtonPrint";

const dados = require("../../services/frases.json");

export function Home({ navigation }) {
  const doubleTapRef = useRef(null);
  const [duplicatedViews, setDuplicatedViews] = useState([]);

  const viewShotRef = useRef();
  const [sol, setSol] = useState(false);
  const [iconColor, setIconColor] = useState("#FEC580");
  const [toSpin, setToSpin] = useState(true);

  function getRandomObjectOfTheDay(myObjects) {
    const today = new Date();
    const index = today.getDate() % myObjects.length;
    const objectOfTheDay = myObjects[index];

    return objectOfTheDay;
  }
  const dado = getRandomObjectOfTheDay(dados);

  function handle() {
    setSol(!sol);
    setIconColor(sol ? "#FEC580" : "#0367A6");
  }

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
  }, []);

  async function copyToClipboard() {
    await Clipboard.setStringAsync(`${dado.frase} - ${dado.autor}`);
    Toast.show({
      type: "success",
      text1: "Texto copiado para a área de transferência",
    });
  }

  function handleEdit() {
    navigation.navigate("Edit", dado);
  }

  const handlePrint = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      console.log("Permission not granted!");
      return;
    }

    const result = await viewShotRef.current.capture();
    await MediaLibrary.saveToLibraryAsync(result);
    Toast.show({
      text1: "Imagem salva na sua galeria",
    });
    console.log("Image saved successfully!");
  };

  // const takeScreenshot = async () => {
  //   const result = await ExpoScreenshot.captureAsync();
  //   // faça algo com o resultado, como exibir em um Image component
  //   console.log(result);
  // };

  function handleGo() {
    navigation.navigate("Favoritos");
  }

  function handleToSpin() {
    setToSpin(!toSpin);
  }

  function handleStop() {
    console.log("aqui");
  }

  return (
    <ViewShot style={{ flex: 1 }} ref={viewShotRef}>
      <ImageBackground
        source={require("../../../assets/bg.png")}
        style={{
          flex: 1,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Toast position="top" ref={(ref) => Toast.setRef(ref)} />
        <StatusBar style="dark" backgroundColor="#ffffff" />
        <Landscape handleStop={handleStop} handle={handle} sol={sol} />

        <CardMotivation
          toSpin={toSpin}
          iconColor={iconColor}
          handleEdit={handleEdit}
          copyToClipboard={copyToClipboard}
          navigation={navigation}
          frase={dado.frase}
          autor={dado.autor}
        />
        <ButtonPrint iconColor={iconColor} handlePrint={handlePrint} />
      </ImageBackground>
    </ViewShot>
  );
}
