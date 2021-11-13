import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HeaderButton = (props) => {
  return (
    <TouchableOpacity
      style={props.active ? styles.buttonActive : styles.button}
      onPress={props.toggle}
    >
      <Text style={props.active ? styles.buttonTextActive : styles.buttonText}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("delivery");
  return (
    <View style={styles.header}>
      <HeaderButton toggle={() => setActiveTab('delivery')} active={activeTab === 'delivery'} text="Delivery" />
      <HeaderButton toggle={() => setActiveTab('pickup')} active={activeTab === 'pickup'} text="Pickup" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    borderRadius: 50,
  },
  buttonActive: {
    backgroundColor: "#000",
    padding: 6,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  button: {
    backgroundColor: "#fff",
    padding: 6,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonTextActive: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "900",
  },
});
