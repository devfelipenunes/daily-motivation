import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import ViewShot from "react-native-view-shot";
import Toast from "react-native-toast-message";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useRoute } from "@react-navigation/native";
import { CardEdit } from "../../components/CardEdit";
import { ImageBackground, View } from "react-native";
import { ButtonEdit } from "../../components/ButtonEdit";

export function Edit() {
  const route = useRoute();
  const dado = route.params;
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const viewShotRef = useRef();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      console.log(image);
    }
  };

  if (status === null) {
    requestPermission();
  }

  const saveImage = async () => {
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
    <>
      <ImageBackground
        source={require("../../../assets/bg.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Toast position="bottom" ref={(ref) => Toast.setRef(ref)} />
        <StatusBar style="dark" backgroundColor="#ffffff" />
        <View ref={imageRef} style={{ paddingHorizontal: 15 }} />
        <View style={{ paddingHorizontal: 15 }}>
          <ViewShot ref={viewShotRef}>
            <CardEdit image={image} frase={dado.frase} autor={dado.autor} />
          </ViewShot>
          <ButtonEdit saveImage={saveImage} pickImage={pickImage} />
        </View>
      </ImageBackground>
    </>
  );
}
