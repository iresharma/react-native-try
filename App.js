import React from "react";
import { SafeAreaView, View } from 'react-native'

import Home from "./screens/home";

export default function App() {
  return (
    <SafeAreaView style={{
      backgroundColor: '#eee',
      flex: 1
    }}>
      <View style={{
        backgroundColor: '#fff',
        padding: 10
      }}>
        <Home />
      </View>
    </SafeAreaView>
  );
}
