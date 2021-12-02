import React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Button, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

function msg(){
  Alert.alert('MSG', 'Deseja fazer login no app?')
}

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Separator />
      <Separator />
      <Separator />
        <Image 
        source={require("./src/assets/logo.png")}
        style={{width: 170, height:170}}
        resizeMode="contain"
        />
        <Separator />
        <Separator />
        <Separator />
        <Separator />
        <View style={styles.buttonPrimario}>
          <Button 
          title="login" 
          color="#FFFFFF" 
          accessibilityLabel="Tap on Me"
          onPress={msg}
          />
        </View>
        <Separator />
        <View style={styles.buttonSecundario}>
          <Button 
          title="sing up" 
          color="#6E0A78"
          accessibilityLabel="Tap on Me"
          />
        </View>
        

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 300,
  },
  buttonPrimario: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6E0A78',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    width: 250,
    height: 59,
    shadowRadius: 10,
    shadowOpacity: 0.25,
 
  },
  buttonSecundario: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFFFFF',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    width: 250,
    height: 59,
    shadowRadius: 10,
    shadowOpacity: 0.25,
    borderWidth: 1,
    borderColor:"#6E0A78"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  

  
});

