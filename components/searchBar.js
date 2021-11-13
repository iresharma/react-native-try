import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons";

export default function SearchBar() {
  const searchStyles = {
    textInput: {
      backgroundColor: "#eee",
      borderRadius: 10,
      fontWeight: "bold",
      //   marginTop: 7,
      marginBottom: 0,
    },
    textInputContainer: {
      backgroundColor: "#eee",
      borderRadius: 50,
      flexDirection: "row",
      alginItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <View style={styles.viewStyles}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={searchStyles}
        renderLeftButton={() => (
          <View
            style={{
              marginHorizontal: 10,
              alignSelf: "center",
              justifySelf: "center",
            }}
          >
            <Ionicons name="location-sharp" size={28} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={styles.searchTextContainer}
          >
            <AntDesign name="clockcircle" size={15} color="black" style={{ marginRight: 10 }} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    flexDirection: "row",
    marginTop: 10,
  },
  searchTextContainer: {
    marginRight: 10,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8
  }
});
