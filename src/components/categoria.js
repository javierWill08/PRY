import * as React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Swiper from "react-native-web-swiper";

const Categoria = (props) => {
  console.log(props);

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        from={1}
        minDistanceForAction={0.1}
        controlsProps={{
          dotsTouchable: true,
          prevPos: "left",
          nextPos: "right",
          nextTitle: ">",
          nextTitleStyle: { color: "red", fontSize: 24, fontWeight: "500" },
          PrevComponent: ({ onPress }) => (
            <TouchableOpacity onPress={onPress}>
              <Text style={{ color: "white", fontSize: 24, fontWeight: "500" }}>
                {"<"}
              </Text>
            </TouchableOpacity>
          ),
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FFA07A 	",
          }}
        >
          <Text
            onPress={() => {
              props.navigation.navigate("Aprendizaje");
            }}
          >
            Slide 1
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F08080",
          }}
        >
          <Text>Slide 2</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FF3333",
          }}
        >
          <Text>Slide 3</Text>
        </View>
      </Swiper>
    </View>
  );
};

export default Categoria;
