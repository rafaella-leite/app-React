import React from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';



export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
        source={require("./src/assets/profile.png")}
        style={{width: 35, height:35}}
        resizeMode="contain"
        />
        <Image
        source={require("./src/assets/menu.png")}
        style={{width: 35, height:35}}
        resizeMode="contain"
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
  }
});