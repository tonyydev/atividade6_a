import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react'; 

export default function App() {
  const [ligar, setLigar] = useState(true)
  const [ligar2, setLigar2] = useState(true)

  const clicarBotao = () =>{
    setLigar(!ligar)
  }
  const clicarBotao2 = () =>{
    setLigar2(!ligar2)
  }

  

  return (
    <View style={styles.container}>

      {
        ligar ?
          <Text> </Text>
          :
          <Text> Aqui tem um texto que desaparece! </Text>
      }
      <Button
        title= 'APERTAR'
        onPress={clicarBotao}
      />

      {
        ligar2 ?
          <Text> </Text>
          :
          <Text> Aqui tem um texto que desaparece! </Text>
      }
      <Button
        title= 'APERTAR'
        onPress={clicarBotao2}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    marginTop: 20,
  }
});
