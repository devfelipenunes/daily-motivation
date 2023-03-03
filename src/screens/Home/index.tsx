import { StatusBar } from "expo-status-bar";
import ViewShot from "react-native-view-shot";
import Toast from "react-native-toast-message";
import * as Permissions from "expo-permissions";
import { dados } from "../../services/frases.json";
import * as MediaLibrary from "expo-media-library";
import * as Notifications from "expo-notifications";
import { useEffect, useRef, useState } from "react";
import { Image, ImageBackground } from "react-native";
import { Landscape } from "../../components/Landscape";
import { ButtonPrint } from "../../components/ButtonPrint";
import { CardMotivation } from "../../components/CardMotivation";
import { copyToClipboard, getRandomObjectOfTheDay } from "../../utils";

export function Home({ navigation }) {
  const dado = getRandomObjectOfTheDay(dados);
  console.log(dado);

  const viewShotRef = useRef();
  const [sol, setSol] = useState(false);

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Mentalize",
        body: `${dado.frase} \n ${dado.autor}`,
        data: { data: "goes here" },
      },
      trigger: {
        hour: 17,
        minute: 32,
        repeats: true,
      },
    });
  }

  useEffect(() => {
    schedulePushNotification();
  }, []);

  function handleColor() {
    setSol(!sol);
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

  return (
    <ViewShot style={{ flex: 1 }} ref={viewShotRef}>
      <ImageBackground
        source={require("../../../assets/bg.png")}
        style={{
          flex: 1,
          backgroundColor: `${sol ? "#263056" : "white"}`,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Toast position="top" ref={(ref) => Toast.setRef(ref)} />
        <StatusBar style="dark" backgroundColor="#ffffff" />
        <Landscape handle={handleColor} sol={sol} />

        <CardMotivation
          cardColor={sol ? "rgba(255, 255, 255, 0.3)" : "white"}
          textColor={sol ? "white" : "#FEC580"}
          iconColor={sol ? "white" : "#FEC580"}
          handleEdit={() => navigation.navigate("Edit", dados)}
          copyToClipboard={() => copyToClipboard(dados)}
          frase={dado.frase}
          autor={dado.autor}
        />
        <ButtonPrint
          iconColor={sol ? "white" : "#FEC580"}
          handlePrint={handlePrint}
        />
      </ImageBackground>
    </ViewShot>
  );
}
