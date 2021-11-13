import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <ScrollView horizontal showHorizontalScrollIndicator={false} style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text} >{item.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 5, paddingVertical: 15 },
  button: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
  },
  image: {
    height: 60,
    width: 50,
    resizeMode: "contain",
  },
  text: {
      fontSize: 14,
      fontWeight: "bold",
  }
});
