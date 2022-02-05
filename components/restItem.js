import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    borderRadius: 10,
    height: 200,
  },
  heart: {
    position: "absolute",
    zIndex: 999,
    right: 10,
    top: 10,
  },
  infoFlex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 6,
    paddingVertical: 0
  },
  name: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  wait: {
    fontSize: 20,
    color: "#999"
  },
  rating: {
    fontSize: 20,
    color: "#999",
    fontWeight: "500",
  }
});

export default function RestItem() {
  return (
    <View>
      <Image
        source={require("../assets/images/bg2.jpg")}
        style={styles.image}
      />
      <TouchableOpacity style={styles.heart}>
        <MaterialCommunityIcons name="heart-outline" size={30} color="white" />
      </TouchableOpacity>
      <RestInfo name="Ovenstory" wait="20-25 mins" rating="4.5" />
    </View>
  );
}

const RestInfo = (props) => {
  return (
    <View style={styles.infoFlex}>
      <View>
        <Text style={styles.name} >{props.name}</Text>
        <Text style={styles.wait} >{props.wait}</Text>
      </View>
      <Text style={styles.rating} >{props.rating}</Text>
    </View>
  );
};
